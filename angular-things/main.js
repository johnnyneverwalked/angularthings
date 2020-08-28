(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations/emerge.animation.ts":
/*!************************************************!*\
  !*** ./src/app/animations/emerge.animation.ts ***!
  \************************************************/
/*! exports provided: emerge, slideRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emerge", function() { return emerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideRight", function() { return slideRight; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const emerge = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("emerge", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ top: '55%', opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(250)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ top: '55%' }))
    ])
]);
const slideRight = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("slideRight", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("visible", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(0%)" })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("invisible", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(150%)" })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("visible => invisible", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("100ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(-5%)" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("300ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(150%)" }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("invisible => visible", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("300ms ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(0%)" })),
    ])
]);


/***/ }),

/***/ "./src/app/animations/enter-leave.animation.ts":
/*!*****************************************************!*\
  !*** ./src/app/animations/enter-leave.animation.ts ***!
  \*****************************************************/
/*! exports provided: pulsate, wiggle, fade, fadeIn, fadeOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pulsate", function() { return pulsate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wiggle", function() { return wiggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return fadeOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const pulsate = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("pulsate", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "scale(0)", opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("100ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "scale(1.2)", opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("100ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "scale(1)" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("100ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "scale(1.2)" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("100ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "scale(0.9)" })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("100ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "scale(1)" }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "scale(0)", opacity: 0 }))
    ])
]);
const wiggle = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('wiggle', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('800ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotateZ(-5deg)', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotateZ(5deg)', offset: 0.1 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotateZ(15deg)', offset: 0.2 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotateZ(-15deg)', offset: 0.3 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotateZ(15deg)', offset: 0.4 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotateZ(-15deg)', offset: 0.5 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotateZ(15deg)', offset: 0.6 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotateZ(5deg)', offset: 0.7 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotateZ(-5deg)', offset: 0.8 })
    ]))),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
    ])
]);
const fade = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("fade", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
    ])
]);
const fadeIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("fadeIn", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
    ])
]);
const fadeOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("fadeOut", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
    ])
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");






const routes = [
    {
        path: "",
        children: [
            {
                path: "tour-guide",
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/tour-guide-view/tour-guide-view.module */ "./src/app/pages/tour-guide-view/tour-guide-view.module.ts")).then(m => m.TourGuideViewModule),
                data: {
                    breadcrumb: "Tour Guide"
                }
            },
            {
                path: "grid",
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/grid-view/grid-view.module */ "./src/app/pages/grid-view/grid-view.module.ts")).then(m => m.GridViewModule),
                data: {
                    breadcrumb: "Grid"
                }
            }
        ]
    },
    { path: "home", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "**", component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function AppComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "John's salad bar!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*But ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "salads");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " are ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "components");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " instead.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AppComponent_div_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.name);
} }
const _c0 = function () { return {}; };
function AppComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_7_span_3_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r3.path)("queryParams", item_r3.params || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("mr-1 la la-2x ", item_r3.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.style.width === "20%");
} }
const _c1 = function () { return { width: "5%", height: "100%", transition: ".5s width ease-in-out" }; };
const _c2 = function () { return { "z-index": 1 }; };
class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'angular-things';
        this.menu = [
            { path: "/tour-guide", name: "Tour Guide", icon: "la-map-signs", params: { tourguide: true } },
            { path: "/grid", name: "Widget Grid", icon: "la-cubes", params: { tourguide: true } }
        ];
    }
    ngOnInit() {
        this.router.navigate(["/home"]);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["things-root"]], decls: 13, vars: 9, consts: [[1, "vh-100", "w-100", "d-flex", "flex-row", "container-fluid", "p-0"], [1, "bg-primary", "container-fluid", "text-white", "text-nowrap", 3, "ngStyle", "mouseenter", "mouseleave"], ["sideMenu", ""], [1, "row", "bg-dark"], [1, "col-12", "p-3"], ["width", "40px", "height", "40px", "src", "assets/favicon/apple-touch-icon.png", "title", "Home", 1, "mx-1", "basic-hover", "cursor-pointer", 3, "routerLink"], [4, "ngIf"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "flex-fill", "bg-light", "overflow-y-auto", 3, "ngStyle"], [1, "container-fluid"], [1, "row"], [1, "col", "p-4"], [1, "font-weight-bold", "d-inline"], [1, "font-italic"], [1, "text-success"], [1, "col-12", "p-3", "border-radius", "basic-hover", "font-weight-bold", "cursor-pointer", "text-center", 3, "routerLink", "queryParams"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AppComponent_Template_div_mouseenter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.style.width = "20%"; })("mouseleave", function AppComponent_Template_div_mouseleave_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.style.width = "5%"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_ng_container_6_Template, 12, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_7_Template, 4, 7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-center", _r0.style.width === "5%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.style.width === "20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'things-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_button_button_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/button/button.module */ "./src/app/components/button/button.module.ts");
/* harmony import */ var _pages_tour_guide_view_tour_guide_view_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/tour-guide-view/tour-guide-view.module */ "./src/app/pages/tour-guide-view/tour-guide-view.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _pages_grid_view_grid_view_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/grid-view/grid-view.module */ "./src/app/pages/grid-view/grid-view.module.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _components_button_button_module__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
            _pages_tour_guide_view_tour_guide_view_module__WEBPACK_IMPORTED_MODULE_5__["TourGuideViewModule"],
            _pages_grid_view_grid_view_module__WEBPACK_IMPORTED_MODULE_7__["GridViewModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTooltipModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _components_button_button_module__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
        _pages_tour_guide_view_tour_guide_view_module__WEBPACK_IMPORTED_MODULE_5__["TourGuideViewModule"],
        _pages_grid_view_grid_view_module__WEBPACK_IMPORTED_MODULE_7__["GridViewModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTooltipModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
                ],
                imports: [
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _components_button_button_module__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
                    _pages_tour_guide_view_tour_guide_view_module__WEBPACK_IMPORTED_MODULE_5__["TourGuideViewModule"],
                    _pages_grid_view_grid_view_module__WEBPACK_IMPORTED_MODULE_7__["GridViewModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTooltipModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/button/button.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/button/button.component.ts ***!
  \*******************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function ButtonComponent_button_0_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("m-0", ctx_r2.displayName == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.icon);
} }
function ButtonComponent_button_0_ng_container_2_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
} if (rf & 2) {
    const ic_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("m-0", ctx_r5.displayName == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ic_r6);
} }
function ButtonComponent_button_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_button_0_ng_container_2_i_1_Template, 1, 3, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.icons);
} }
function ButtonComponent_button_0_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 9);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("m-0", ctx_r4.displayName == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.icon);
} }
function ButtonComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.btnClick.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_button_0_i_1_Template, 1, 3, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_button_0_ng_container_2_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ButtonComponent_button_0_i_5_Template, 1, 3, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate5"]("btn ", ctx_r0.class, " ", ctx_r0.color, " btn-", ctx_r0.color, " position-relative ", ctx_r0.small ? "btn-sm" : "", " ", ctx_r0.full ? "btn-block" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("round", ctx_r0.displayName == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.disabled)("ngbTooltip", ctx_r0.tooltip)("container", "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.iconRightSide && !!ctx_r0.icon && !(ctx_r0.icons == null ? null : ctx_r0.icons.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.icons == null ? null : ctx_r0.icons.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.iconRightSide && !!ctx_r0.icon);
} }
function ButtonComponent_a_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("m-0", ctx_r9.displayName == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r9.icon);
} }
function ButtonComponent_a_1_ng_container_2_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
} if (rf & 2) {
    const ic_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("m-0", ctx_r12.displayName == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ic_r13);
} }
function ButtonComponent_a_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_a_1_ng_container_2_i_1_Template, 1, 3, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.icons);
} }
function ButtonComponent_a_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 9);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("m-0", ctx_r11.displayName == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r11.icon);
} }
function ButtonComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.btnClick.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_a_1_i_1_Template, 1, 3, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_a_1_ng_container_2_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ButtonComponent_a_1_i_5_Template, 1, 3, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate5"]("btn ", ctx_r1.class, " ", ctx_r1.color, " btn-", ctx_r1.color, " position-relative ", ctx_r1.small ? "btn-sm" : "", " ", ctx_r1.full ? "btn-block" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r1.disabled)("round", ctx_r1.displayName == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r1.href)("target", ctx_r1.target)("ngbTooltip", ctx_r1.tooltip)("queryParams", ctx_r1.queryParams);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.iconRightSide && !!ctx_r1.icon && !(ctx_r1.icons == null ? null : ctx_r1.icons.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.icons == null ? null : ctx_r1.icons.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.iconRightSide && !!ctx_r1.icon);
} }
class ButtonComponent {
    constructor() {
        this._availableButtons = {
            next: {
                color: "primary",
                displayName: "Next",
                tooltip: "Next",
                icon: "la-arrow-right",
                iconRightSide: true
            },
            prev: {
                color: "light border",
                displayName: "Previous",
                tooltip: "Previous",
                icon: "la-arrow-left"
            },
            cancel: {
                color: "light border",
                displayName: "Cancel",
                tooltip: "Cancel"
            },
            help: {
                color: "info",
                displayName: "Help",
                tooltip: "Help",
                icon: "la-question-circle"
            },
            shortcuts: {
                color: "btn-light border",
                displayName: "Shortcuts",
                tooltip: "Shortcuts",
                icon: "la-keyboard-o"
            },
            close: {
                color: "btn-light border",
                displayName: "",
                icon: "la-times"
            },
            warning: {
                color: "btn-danger",
                displayName: "Warning",
                tooltip: "Warning",
                icon: "la-exclamation-circle"
            },
            view: {
                color: "btn-light",
                displayName: "View",
                tooltip: "View",
                icon: "la-eye"
            },
            save: {
                color: "success",
                displayName: "Save",
                tooltip: "Save",
                icon: "la-save",
            },
            edit: {
                color: "primary",
                displayName: "Edit",
                tooltip: "Edit",
                icon: "la-save",
            },
            delete: {
                color: "danger",
                displayName: "Delete",
                tooltip: "Delete",
                icon: "la-trash"
            },
        };
        this.displayName = null;
        this.icon = null;
        this.icons = null;
        this.class = null;
        this.color = null;
        this.disabled = false;
        this.iconRightSide = false;
        this.href = null;
        this.small = false;
        this.full = false;
        this.tooltip = null;
        this.target = "_self";
        this.btnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.action = null;
    }
    set setAction(action) {
        this.action = action;
        this._applyButtonData(this._availableButtons[this.action], true);
    }
    ngOnInit() {
    }
    _applyButtonData(button, force = false) {
        if (!button) {
            return;
        }
        if (button.iconRightSide && this.iconRightSide == null || force) {
            this.iconRightSide = button.iconRightSide;
        }
        if (this.displayName === null || (force && this.displayName && button.displayName)) {
            this.displayName = this.displayName ? this.displayName : button.displayName;
        }
        if (this.icon === null || force) {
            this.icon = this.icon ? this.icon : button.icon;
        }
        if (this.color === null || force) {
            this.color = this.color ? this.color : button.color;
        }
        if ((this.tooltip === null && this.displayName === "")) {
            this.tooltip = button.tooltip;
        }
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { displayName: "displayName", icon: "icon", icons: "icons", class: "class", color: "color", disabled: "disabled", iconRightSide: "iconRightSide", href: "href", queryParams: "queryParams", small: "small", full: "full", tooltip: "tooltip", target: "target", setAction: ["action", "setAction"] }, outputs: { btnClick: "btnClick" }, decls: 2, vars: 2, consts: [["type", "button", 3, "class", "round", "disabled", "ngbTooltip", "container", "click", 4, "ngIf"], [3, "class", "disabled", "routerLink", "target", "ngbTooltip", "round", "queryParams", "click", 4, "ngIf"], ["type", "button", 3, "disabled", "ngbTooltip", "container", "click"], ["class", "la mr-1 ml-0", 3, "ngClass", "m-0", 4, "ngIf"], [4, "ngIf"], ["class", "la mr-0 ml-1", 3, "ngClass", "m-0", 4, "ngIf"], [1, "la", "mr-1", "ml-0", 3, "ngClass"], ["class", "la", 3, "ngClass", "m-0", 4, "ngFor", "ngForOf"], [1, "la", 3, "ngClass"], [1, "la", "mr-0", "ml-1", 3, "ngClass"], [3, "routerLink", "target", "ngbTooltip", "queryParams", "click"], ["class", "la mr-1", 3, "ngClass", "m-0", 4, "ngIf"], [1, "la", "mr-1", 3, "ngClass"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ButtonComponent_button_0_Template, 6, 16, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_a_1_Template, 6, 19, "a", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.href === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.href !== null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["a.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.round[_ngcontent-%COMP%] {\n  height: 38px;\n  width: 38px;\n  padding: 0 0 0 5px;\n  border-radius: 50%;\n  line-height: 0;\n}\n\n.round.btn-sm[_ngcontent-%COMP%] {\n  height: 28px;\n  width: 28px;\n}\n\n.round.btn-sm.vsm[_ngcontent-%COMP%] {\n  height: 20px !important;\n  width: 20px !important;\n}\n\n.round.btn-lg[_ngcontent-%COMP%] {\n  height: 58px;\n  width: 58px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQUY7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUNJO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtBQUNOOztBQUVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuYS5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5yb3VuZCB7XG4gIGhlaWdodDogMzhweDtcbiAgd2lkdGg6IDM4cHg7XG4gIHBhZGRpbmc6IDAgMCAwIDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBsaW5lLWhlaWdodDogMDtcblxuICAmLmJ0bi1zbSB7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIHdpZHRoOiAyOHB4O1xuICAgICYudnNtIHtcbiAgICAgIGhlaWdodDogMjBweCFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogMjBweCFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gICYuYnRuLWxnIHtcbiAgICBoZWlnaHQ6IDU4cHg7XG4gICAgd2lkdGg6IDU4cHg7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.scss']
            }]
    }], function () { return []; }, { displayName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], icons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], iconRightSide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], href: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], queryParams: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], small: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], full: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], target: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], setAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["action"]
        }], btnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/button/button.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/button/button.module.ts ***!
  \****************************************************/
/*! exports provided: ButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonModule", function() { return ButtonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.component */ "./src/app/components/button/button.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class ButtonModule {
}
ButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ButtonModule });
ButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltipModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ButtonModule, { declarations: [_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltipModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]],
                exports: [
                    _button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltipModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/grid/grid-host.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/components/grid/grid-host.directive.ts ***!
  \********************************************************/
/*! exports provided: GridHostDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridHostDirective", function() { return GridHostDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GridHostDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
GridHostDirective.ɵfac = function GridHostDirective_Factory(t) { return new (t || GridHostDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
GridHostDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: GridHostDirective, selectors: [["", "gridHost", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridHostDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[gridHost]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/grid/grid-widget/grid-widget.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/grid/grid-widget/grid-widget.component.ts ***!
  \**********************************************************************/
/*! exports provided: GridWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridWidgetComponent", function() { return GridWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _grid_host_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../grid-host.directive */ "./src/app/components/grid/grid-host.directive.ts");
/* harmony import */ var _widgets_url_shortcut_url_shortcut_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/url-shortcut/url-shortcut.component */ "./src/app/components/widgets/url-shortcut/url-shortcut.component.ts");
/* harmony import */ var _widgets_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/todo-list/todo-list.component */ "./src/app/components/widgets/todo-list/todo-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = ["widget"];
function GridWidgetComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Empty Space");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GridWidgetComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridWidgetComponent_i_5_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.delete.emit(ctx_r4.widgetElement.nativeElement); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GridWidgetComponent_ng_template_6_Template(rf, ctx) { }
const _c1 = function (a0) { return { shadow: a0 }; };
class GridWidgetComponent {
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.style = {};
        this.class = null;
        this.active = true;
        this.empty = false;
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.widgetEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    /**
     * @description Dynamically creates a component instance with the specified data
     * @param {IGridWidget} widget  -   The data to be loaded to the component
     */
    loadComponent(widget) {
        const type = GridWidgetComponent.componentTypes[widget.type];
        if (type === "EmptySpace") {
            return;
        }
        if (!type) {
            throw new Error("Component <" + widget.type + "> is not a valid widget");
        }
        const viewContainerRef = this.gridHost.viewContainerRef;
        viewContainerRef.clear();
        // @ts-ignore
        let component = viewContainerRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(type));
        if (widget.data) {
            Object.keys(widget.data).forEach(property => {
                component.instance[property] = widget.data[property];
            });
        }
        if (widget.output) {
            widget.output.forEach(property => {
                if (component.instance.hasOwnProperty(property)) {
                    component.instance[property].subscribe(event => {
                        this.widgetEvent.emit({
                            type: property,
                            value: event
                        });
                    });
                }
            });
        }
    }
}
GridWidgetComponent.componentTypes = {
    "EmptySpace": "EmptySpace",
    "UrlShortcutComponent": _widgets_url_shortcut_url_shortcut_component__WEBPACK_IMPORTED_MODULE_2__["UrlShortcutComponent"],
    "TodoListComponent": _widgets_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"]
};
GridWidgetComponent.ɵfac = function GridWidgetComponent_Factory(t) { return new (t || GridWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
GridWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridWidgetComponent, selectors: [["app-grid-widget"]], viewQuery: function GridWidgetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_grid_host_directive__WEBPACK_IMPORTED_MODULE_1__["GridHostDirective"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gridHost = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.widgetElement = _t.first);
    } }, inputs: { style: "style", class: "class", active: "active", empty: "empty" }, outputs: { delete: "delete", widgetEvent: "widgetEvent" }, decls: 7, vars: 7, consts: [[1, "widget", 3, "ngClass"], ["widget", ""], [1, "widget-content", 3, "ngClass", "ngStyle"], [1, "widget-backdrop"], ["class", "empty-msg", 4, "ngIf"], ["class", "la la-trash delete-btn", 3, "click", 4, "ngIf"], ["gridHost", ""], [1, "empty-msg"], [1, "la", "la-trash", "delete-btn", 3, "click"]], template: function GridWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GridWidgetComponent_span_4_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GridWidgetComponent_i_5_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GridWidgetComponent_ng_template_6_Template, 0, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, !ctx.empty))("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.active);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _grid_host_directive__WEBPACK_IMPORTED_MODULE_1__["GridHostDirective"]], styles: [".widget[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  margin: 5px;\n  z-index: 1;\n}\n.widget[_ngcontent-%COMP%]   .empty-msg[_ngcontent-%COMP%] {\n  display: none;\n}\n.widget-dark[_ngcontent-%COMP%]   .widget-content[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #373d42;\n}\n.widget-light[_ngcontent-%COMP%]   .widget-content[_ngcontent-%COMP%] {\n  color: #373d42;\n  background-color: white;\n}\n.widget-sm[_ngcontent-%COMP%]   .widget-content[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n.widget-lg[_ngcontent-%COMP%]   .widget-content[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n}\n.widget-md[_ngcontent-%COMP%]   .widget-content[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n}\n.widget.muuri-item-dragging[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  z-index: 3;\n}\n.widget.muuri-item-releasing[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n.widget.muuri-item-hidden[_ngcontent-%COMP%] {\n  z-index: 0;\n}\n.widget-content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 200px;\n  height: 200px;\n  border-radius: 5px;\n}\n.widget[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n.widget-edit[_ngcontent-%COMP%] {\n  border: 2px solid lightskyblue;\n  margin: 3px;\n}\n.widget-edit[_ngcontent-%COMP%]   .empty-msg[_ngcontent-%COMP%] {\n  display: initial;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n.widget-edit[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  display: block;\n  color: black;\n  z-index: 99;\n  cursor: pointer;\n}\n.widget-selected[_ngcontent-%COMP%] {\n  border: 2px solid red;\n}\n.widget-inactive[_ngcontent-%COMP%] {\n  border: 2px solid #bbb;\n  margin-left: 0;\n  margin-right: 0;\n}\n.widget-inactive[_ngcontent-%COMP%]   .empty-msg[_ngcontent-%COMP%] {\n  display: initial;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n.widget-inactive[_ngcontent-%COMP%]   .widget-content[_ngcontent-%COMP%] {\n  max-width: 200px;\n  max-height: 200px;\n}\n.widget-deleted[_ngcontent-%COMP%] {\n  border: none;\n}\n.widget-moving[_ngcontent-%COMP%] {\n  z-index: 100 !important;\n}\n.widget[_ngcontent-%COMP%]   .widget-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n.widget-edit[_ngcontent-%COMP%]   .widget-backdrop[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.1);\n  z-index: 98;\n}\n.widget-inactive[_ngcontent-%COMP%]   .widget-backdrop[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n  z-index: 98;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmlkL2dyaWQtd2lkZ2V0L2dyaWQtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtBQUVSO0FBRUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUNBO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0FBRUo7QUFDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBRUo7QUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBR0o7QUFEQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBSUo7QUFEQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FBSUo7QUFGQTtFQUNJLFVBQUE7QUFLSjtBQUhBO0VBQ0ksVUFBQTtBQU1KO0FBSkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFPSjtBQUxBO0VBQ0ksYUFBQTtBQVFKO0FBTkE7RUFDSSw4QkFBQTtFQUNBLFdBQUE7QUFTSjtBQVJJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNENBQUE7QUFVUjtBQVBBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFVSjtBQVJBO0VBQ0kscUJBQUE7QUFXSjtBQVRBO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVlKO0FBWEk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw0Q0FBQTtBQWFSO0FBWEk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBYVI7QUFWQTtFQUVJLFlBQUE7QUFZSjtBQVZBO0VBQ0ksdUJBQUE7QUFhSjtBQVZBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFhSjtBQVhBO0VBQ0ksb0NBQUE7RUFDQSxXQUFBO0FBY0o7QUFaQTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFlSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JpZC9ncmlkLXdpZGdldC9ncmlkLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWRnZXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IDVweDtcbiAgICB6LWluZGV4OiAxO1xuICAgICYgLmVtcHR5LW1zZyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4ud2lkZ2V0LWRhcmsgLndpZGdldC1jb250ZW50IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3M2Q0Mjtcbn1cbi53aWRnZXQtbGlnaHQgLndpZGdldC1jb250ZW50IHtcbiAgICBjb2xvcjogIzM3M2Q0MjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLndpZGdldC1zbSAud2lkZ2V0LWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuLndpZGdldC1sZyAud2lkZ2V0LWNvbnRlbnQge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xufVxuLndpZGdldC1tZCAud2lkZ2V0LWNvbnRlbnQge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4ud2lkZ2V0Lm11dXJpLWl0ZW0tZHJhZ2dpbmcge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICB6LWluZGV4OiAzO1xufVxuLndpZGdldC5tdXVyaS1pdGVtLXJlbGVhc2luZyB7XG4gICAgei1pbmRleDogMjtcbn1cbi53aWRnZXQubXV1cmktaXRlbS1oaWRkZW4ge1xuICAgIHotaW5kZXg6IDA7XG59XG4ud2lkZ2V0LWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ud2lkZ2V0IC5kZWxldGUtYnRuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLndpZGdldC1lZGl0IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodHNreWJsdWU7XG4gICAgbWFyZ2luOiAzcHg7XG4gICAgJiAuZW1wdHktbXNnIHtcbiAgICAgICAgZGlzcGxheTogaW5pdGlhbDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB9XG59XG4ud2lkZ2V0LWVkaXQgLmRlbGV0ZS1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi53aWRnZXQtc2VsZWN0ZWQge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbn1cbi53aWRnZXQtaW5hY3RpdmUge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiYmI7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICYgLmVtcHR5LW1zZyB7XG4gICAgICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgfVxuICAgICYgLndpZGdldC1jb250ZW50IHtcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgfVxufVxuLndpZGdldC1kZWxldGVkIHtcbiAgICAvL2Rpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmVcbn1cbi53aWRnZXQtbW92aW5nIHtcbiAgICB6LWluZGV4OiAxMDAgIWltcG9ydGFudDtcbn1cblxuLndpZGdldCAud2lkZ2V0LWJhY2tkcm9wIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IC0xO1xufVxuLndpZGdldC1lZGl0IC53aWRnZXQtYmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcbiAgICB6LWluZGV4OiA5ODtcbn1cbi53aWRnZXQtaW5hY3RpdmUgLndpZGdldC1iYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHotaW5kZXg6IDk4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid-widget',
                templateUrl: './grid-widget.component.html',
                styleUrls: ['./grid-widget.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, { style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], empty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], delete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], widgetEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gridHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_grid_host_directive__WEBPACK_IMPORTED_MODULE_1__["GridHostDirective"], { static: true }]
        }], widgetElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["widget", { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/grid/grid-widget/grid-widget.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/grid/grid-widget/grid-widget.module.ts ***!
  \*******************************************************************/
/*! exports provided: GridWidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridWidgetModule", function() { return GridWidgetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _grid_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid-widget.component */ "./src/app/components/grid/grid-widget/grid-widget.component.ts");
/* harmony import */ var _grid_host_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../grid-host.directive */ "./src/app/components/grid/grid-host.directive.ts");
/* harmony import */ var _widgets_url_shortcut_url_shortcut_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/url-shortcut/url-shortcut.component */ "./src/app/components/widgets/url-shortcut/url-shortcut.component.ts");
/* harmony import */ var _widgets_url_shortcut_url_shortcut_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/url-shortcut/url-shortcut.module */ "./src/app/components/widgets/url-shortcut/url-shortcut.module.ts");
/* harmony import */ var _widgets_todo_list_todo_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/todo-list/todo-list.module */ "./src/app/components/widgets/todo-list/todo-list.module.ts");








class GridWidgetModule {
}
GridWidgetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GridWidgetModule });
GridWidgetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GridWidgetModule_Factory(t) { return new (t || GridWidgetModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _widgets_url_shortcut_url_shortcut_module__WEBPACK_IMPORTED_MODULE_5__["UrlShortcutModule"],
            _widgets_todo_list_todo_list_module__WEBPACK_IMPORTED_MODULE_6__["TodoListModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GridWidgetModule, { declarations: [_grid_widget_component__WEBPACK_IMPORTED_MODULE_2__["GridWidgetComponent"], _grid_host_directive__WEBPACK_IMPORTED_MODULE_3__["GridHostDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _widgets_url_shortcut_url_shortcut_module__WEBPACK_IMPORTED_MODULE_5__["UrlShortcutModule"],
        _widgets_todo_list_todo_list_module__WEBPACK_IMPORTED_MODULE_6__["TodoListModule"]], exports: [_grid_host_directive__WEBPACK_IMPORTED_MODULE_3__["GridHostDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridWidgetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_grid_widget_component__WEBPACK_IMPORTED_MODULE_2__["GridWidgetComponent"], _grid_host_directive__WEBPACK_IMPORTED_MODULE_3__["GridHostDirective"]],
                exports: [_grid_host_directive__WEBPACK_IMPORTED_MODULE_3__["GridHostDirective"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _widgets_url_shortcut_url_shortcut_module__WEBPACK_IMPORTED_MODULE_5__["UrlShortcutModule"],
                    _widgets_todo_list_todo_list_module__WEBPACK_IMPORTED_MODULE_6__["TodoListModule"],
                ],
                entryComponents: [
                    _widgets_url_shortcut_url_shortcut_component__WEBPACK_IMPORTED_MODULE_4__["UrlShortcutComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/grid/grid.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/grid/grid.component.ts ***!
  \***************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var muuri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! muuri */ "./node_modules/muuri/dist/muuri.js");
/* harmony import */ var muuri__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(muuri__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dragselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dragselect */ "./node_modules/dragselect/docs/DragSelect.js");
/* harmony import */ var dragselect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dragselect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grid_host_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid-host.directive */ "./src/app/components/grid/grid-host.directive.ts");
/* harmony import */ var _grid_widget_grid_widget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid-widget/grid-widget.component */ "./src/app/components/grid/grid-widget/grid-widget.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_tour_guide_tour_guide_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../directives/tour-guide/tour-guide.directive */ "./src/app/directives/tour-guide/tour-guide.directive.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../loader/loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../button/button.component */ "./src/app/components/button/button.component.ts");


 // has no @types












const _c0 = ["mainGrid"];
const _c1 = ["availableWidgetsGrid"];
const _c2 = ["availableContainer"];
const _c3 = ["host"];
const _c4 = ["trash"];
function GridComponent_div_0_app_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("btnClick", function GridComponent_div_0_app_button_1_Template_app_button_btnClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.editLayout(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GridComponent_div_0_app_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("btnClick", function GridComponent_div_0_app_button_2_Template_app_button_btnClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.editLayout(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GridComponent_div_0_app_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("btnClick", function GridComponent_div_0_app_button_3_Template_app_button_btnClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r20.resetLayout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GridComponent_div_0_app_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("btnClick", function GridComponent_div_0_app_button_4_Template_app_button_btnClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r22.editLayout(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1494518490116523821$$SRC_APP_COMPONENTS_GRID_GRID_COMPONENT_TS___6 = goog.getMsg("Select all");
    I18N_5 = MSG_EXTERNAL_1494518490116523821$$SRC_APP_COMPONENTS_GRID_GRID_COMPONENT_TS___6;
}
else {
    I18N_5 = $localize `:␟b463541a7e303aa4d0b1102eaff8afbaf34e7a74␟1494518490116523821:Select all`;
}
const _c7 = ["displayName", I18N_5];
function GridComponent_div_0_app_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nAttributes"](1, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("btnClick", function GridComponent_div_0_app_button_5_Template_app_button_btnClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r24.selectAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("ml-2");
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8831459317888986184$$SRC_APP_COMPONENTS_GRID_GRID_COMPONENT_TS___9 = goog.getMsg("Delete selected");
    I18N_8 = MSG_EXTERNAL_8831459317888986184$$SRC_APP_COMPONENTS_GRID_GRID_COMPONENT_TS___9;
}
else {
    I18N_8 = $localize `:␟51a161ce175abcd44f6c6cbd0e996681bf553ac3␟8831459317888986184:Delete selected`;
}
const _c10 = ["displayName", I18N_8];
function GridComponent_div_0_app_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nAttributes"](1, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("btnClick", function GridComponent_div_0_app_button_6_Template_app_button_btnClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r26.setItemsAsRemoved(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("ml-2");
} }
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7687218977562230982$$SRC_APP_COMPONENTS_GRID_GRID_COMPONENT_TS___12 = goog.getMsg("Add widget");
    I18N_11 = MSG_EXTERNAL_7687218977562230982$$SRC_APP_COMPONENTS_GRID_GRID_COMPONENT_TS___12;
}
else {
    I18N_11 = $localize `:␟7f549b265193447cc77ad8b4f1b069cd8ba08797␟7687218977562230982:Add widget`;
}
const _c13 = ["displayName", I18N_11];
function GridComponent_div_0_app_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nAttributes"](1, _c13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("btnClick", function GridComponent_div_0_app_button_7_Template_app_button_btnClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r28.showAvailable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("ml-2");
} }
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1556270137829928334$$SRC_APP_COMPONENTS_GRID_GRID_COMPONENT_TS___15 = goog.getMsg("Close menu");
    I18N_14 = MSG_EXTERNAL_1556270137829928334$$SRC_APP_COMPONENTS_GRID_GRID_COMPONENT_TS___15;
}
else {
    I18N_14 = $localize `:␟a55bfaabb5258f66c2f853ce2383cfead1abd258␟1556270137829928334:Close menu`;
}
const _c16 = ["displayName", I18N_14];
function GridComponent_div_0_app_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nAttributes"](1, _c16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("btnClick", function GridComponent_div_0_app_button_8_Template_app_button_btnClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r30.hideAvailable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("ml-2");
} }
function GridComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GridComponent_div_0_app_button_1_Template, 1, 0, "app-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GridComponent_div_0_app_button_2_Template, 1, 0, "app-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GridComponent_div_0_app_button_3_Template, 1, 0, "app-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GridComponent_div_0_app_button_4_Template, 1, 0, "app-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, GridComponent_div_0_app_button_5_Template, 2, 2, "app-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, GridComponent_div_0_app_button_6_Template, 2, 2, "app-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, GridComponent_div_0_app_button_7_Template, 2, 2, "app-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, GridComponent_div_0_app_button_8_Template, 2, 2, "app-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isEditable());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isEditable());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isEditable());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isEditable());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isEditable());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isEditable());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isEditable() && !ctx_r0.showAvailableWidgets);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isEditable() && ctx_r0.showAvailableWidgets);
} }
function GridComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Edit Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_241752095106337880$$SRC_APP_COMPONENTS_GRID_GRID_COMPONENT_TS__18 = goog.getMsg("Drag widgets here to delete them");
    I18N_17 = MSG_EXTERNAL_241752095106337880$$SRC_APP_COMPONENTS_GRID_GRID_COMPONENT_TS__18;
}
else {
    I18N_17 = $localize `:␟8cba02ed17c3b958eb1fb3c4bfdbde07fbe1c7ab␟241752095106337880:Drag widgets here to delete them`;
}
const _c19 = ["title", I18N_17];
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1647814589798150947$$SRC_APP_COMPONENTS_GRID_GRID_COMPONENT_TS___21 = goog.getMsg("{$interpolation} deleted widgets", { "interpolation": "\uFFFD0\uFFFD" });
    I18N_20 = MSG_EXTERNAL_1647814589798150947$$SRC_APP_COMPONENTS_GRID_GRID_COMPONENT_TS___21;
}
else {
    I18N_20 = $localize `:␟307a343b1dfdae3624b6c0d6d18b7777b3b0c087␟1647814589798150947:${"\uFFFD0\uFFFD"}:INTERPOLATION: deleted widgets`;
}
const _c22 = ["title", I18N_20];
function GridComponent_div_6_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nAttributes"](1, _c22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nExp"](ctx_r33.deletedItems.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nApply"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r33.deletedItems.length, " ");
} }
function GridComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nAttributes"](3, _c19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GridComponent_div_6_span_4_Template, 3, 2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.deletedItems.length);
} }
function GridComponent_ng_template_9_Template(rf, ctx) { }
const _c23 = function () { return { "transition": ".5 display ease-in-out" }; };
class GridComponent {
    constructor(componentFactoryResolver, cd) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.cd = cd;
        this.availableWidgets = [
            {
                type: "UrlShortcutComponent",
                output: ["modifyWidgetData", "changeUrl"]
            },
            {
                type: "TodoListComponent",
                options: {
                    class: "widget-lg"
                }
            },
            {
                type: "EmptySpace",
                options: {
                    empty: true
                }
            },
        ];
        this.hideMenu = true;
        this.loading = false;
        this.showAvailableWidgets = false;
        this.editable = false;
        this.widgets = [];
        this.tmpItems = [];
        this.movingItem = null;
        this.onTrash = false;
        this._unsub$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.enableEdit = true;
        this.layoutAutoCalculate = false;
        this.enableDrag = true;
        this.dragSortInterval = 100;
        this.items = null;
        this.itemSelector = null;
        this.alignRight = false;
        this.alignBottom = false;
        this.horizontal = false;
        this.widgetEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.initGrid();
        if (this.enableEdit) {
            this.initAvailableWidgetsGrid();
        }
        // load widgets
        const widgets = window.localStorage.getItem("widgets");
        const layout = window.localStorage.getItem("layout");
        if (widgets && layout) {
            this.widgets = JSON.parse(widgets);
            this.layout = JSON.parse(layout);
            // this.widgets = [];
            // this.layout = [];
            this.loadWidgets();
            setTimeout(() => this.applyLayout("instant"));
        }
        this.ds = new dragselect__WEBPACK_IMPORTED_MODULE_3__({
            area: this.gridElement.nativeElement,
            selector: this.gridElement.nativeElement.querySelector(".drag-select"),
            multiSelectMode: false,
            onDragStart: (el) => {
                if (!this.isEditable()) {
                    this.ds.break();
                    return;
                }
            },
            onElementSelect: (el) => {
                if (el.classList.contains("widget-selected")) {
                    el.classList.remove("widget-selected");
                }
                else {
                    el.classList.add("widget-selected");
                }
            },
            onElementUnselect: (el) => {
                if (el.classList.contains("widget-selected")) {
                    el.classList.remove("widget-selected");
                }
                else {
                    el.classList.add("widget-selected");
                }
            },
            callback: () => this.ds.reset()
        });
    }
    ngOnDestroy() {
        this._unsub$.next();
    }
    /**
     * @description Initializes a Muuri instance using @Input options
     */
    initGrid() {
        this.grid = new muuri__WEBPACK_IMPORTED_MODULE_2__(this.gridElement.nativeElement, {
            items: this.enableEdit ? null : (this.itemSelector || this.items),
            dragEnabled: true,
            dragSortInterval: this.dragSortInterval,
            dragStartPredicate: () => {
                if (this.enableEdit) {
                    return this.editable;
                }
                return this.enableDrag;
            },
            layout: {
                alignRight: this.alignRight,
                alignBottom: this.alignBottom,
                horizontal: this.horizontal,
            },
            layoutOnInit: !this.enableEdit,
        }).on("dragReleaseEnd", (item) => {
            // if the item is added send the template back and create the actual widget
            console.log(item);
            if (this.movingItem) {
                this._addItem(this.availableWidgets[this.movingItem]);
                item.getElement().classList.remove("widget-moving");
                this.grid.send(item, this.availableWidgetsGrid, -1, { layoutSender: "instant", layoutReceiver: "instant" });
                this.cd.detectChanges();
            }
            this.grid.refreshItems().layout();
        }).on("dragReleaseStart", (item) => {
            if (this.onTrash) {
                this.setItemsAsRemoved(item.getElement());
            }
        }).on("receive", (data) => {
            // track if the item is being added
            this.movingItem = data.item.getElement().getAttribute("widget-id");
        });
        if (this.layoutAutoCalculate) {
            this.gridElement.nativeElement.addEventListener("mouseenter", (e) => {
                this.grid.layout();
            });
            this.gridElement.nativeElement.addEventListener("mouseleave", (e) => {
                this.grid.layout();
            });
        }
    }
    /**
     * @description Initializes a custom Muuri grid with static items in it to be used for the widget menu
     */
    initAvailableWidgetsGrid() {
        this.availableWidgetsGrid = new muuri__WEBPACK_IMPORTED_MODULE_2__(this.availableWidgetsGridElement.nativeElement, {
            dragEnabled: true,
            dragSort: () => {
                return [this.availableWidgetsGrid, this.grid];
            },
            dragContainer: document.body
        }).on("dragStart", (item) => {
            item.getElement().classList.add("widget-moving");
        }).on("dragReleaseEnd", (item) => {
            item.getElement().classList.remove("widget-moving");
        }).on("receive", () => {
            // make sure no item tracked as being added
            this.movingItem = null;
        });
    }
    _loadAvailableWidgets() {
        this.availableWidgets.forEach(widgetData => {
            this._createWidget(widgetData, false);
        });
        const elements = this.hostElement.nativeElement.querySelectorAll(".widget");
        elements.forEach((el, idx) => {
            el.setAttribute("widget-id", idx);
        });
        this.availableWidgetsGrid.add(elements);
        setTimeout(() => {
            this.hideMenu = false;
        }, 300);
    }
    /**
     * @description Enables or disables the edit menu of the grid
     * @param {boolean} enable
     * @param {boolean} saveLayout
     */
    editLayout(enable, saveLayout = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.editable = enable;
            if (!this.editable) {
                this.grid.getItems().forEach(el => {
                    this._makeWidgetUneditable(el.getElement());
                });
                this.gridElement.nativeElement.removeAllListeners("click");
                this.gridElement.nativeElement.removeAllListeners("touchend");
                document.documentElement.removeEventListener("keyup", this._keyShortcuts);
                this.tmpItems = [];
                this.onTrash = false;
                if (saveLayout) {
                    yield this.saveLayout();
                }
            }
            else {
                yield _services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"].sleep();
                this.grid.getItems().forEach(el => {
                    this._makeWidgetEditable(el.getElement());
                });
                document.documentElement.addEventListener("keyup", this._keyShortcuts.bind(this));
                this.gridElement.nativeElement.addEventListener("click", (e) => {
                    this.grid.getItems().forEach(item => {
                        var _a;
                        if (!((_a = this.ds) === null || _a === void 0 ? void 0 : _a.getSelection().includes(item.getElement()))) {
                            item.getElement().classList.remove("widget-selected");
                        }
                    });
                });
                this.gridElement.nativeElement.addEventListener("touchend", (e) => {
                    this.grid.getItems().forEach(item => {
                        var _a;
                        if (!((_a = this.ds) === null || _a === void 0 ? void 0 : _a.getSelection().includes(item.getElement()))) {
                            item.getElement().classList.remove("widget-selected");
                        }
                    });
                });
                this.trash.nativeElement.addEventListener("mouseenter", () => this.onTrash = true);
                this.trash.nativeElement.addEventListener("mouseleave", () => this.onTrash = false);
            }
            this.showAvailableWidgets = false;
            this.grid.refreshItems().layout();
        });
    }
    /**
     * @description Saves the grid layout in the UserSettings of the current user
     * @param {boolean} force   - Whether to save regardless of having differences or not
     */
    saveLayout(force = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const deletedItems = this.grid.getItems().filter(i => !i.isActive());
            if (deletedItems.length) {
                // perma delete
                this._removeItems(deletedItems);
                // update ids of remaining widgets
                this.widgets.forEach((w, idx) => {
                    let item = this.grid.getItems().find(i => i.getElement().getAttribute("sort-id") === w.id);
                    if (item) {
                        item.getElement().setAttribute("sort-id", idx.toString());
                    }
                    w.id = idx.toString();
                });
            }
            // save
            const itemIds = this.grid.getItems().map(item => item.getElement().getAttribute("sort-id"));
            this.layout = itemIds.filter(id => id !== undefined);
            window.localStorage.setItem("layout", JSON.stringify(this.layout));
            window.localStorage.setItem("widgets", JSON.stringify(this.widgets));
        });
    }
    /**
     * Dynamically loads the grid's widget components and sorts them based on their position in the grid layout
     */
    loadWidgets() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            this.widgets
                .sort((a, b) => {
                let a_idx = this.layout.findIndex(v => v === a.id);
                let b_idx = this.layout.findIndex(v => v === b.id);
                return a_idx - b_idx;
            })
                .forEach(widgetData => {
                this._createWidget(widgetData);
                let w = this.hostElement.nativeElement.querySelectorAll(".widget");
                this._addWidgetToGrid(w[w.length - 1], widgetData.id);
            });
            yield _services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"].sleep(100);
            this.grid.refreshItems().layout();
            this.loading = false;
        });
    }
    /**
     * Discards any changes done to the grid since the last saveLayout call
     */
    resetLayout() {
        // remove items added during this edit phase
        const addedItems = this.grid.getItems().filter(item => this.tmpItems.includes(item.getElement().getAttribute("sort-id")));
        this._removeItems(addedItems);
        // add items removed during this edit phase
        const deletedItems = this.grid.getItems().filter(i => !i.isActive());
        this.grid.show(deletedItems);
        deletedItems.forEach(item => item._isActive = true);
        // re-sort items like they where before this edit phase
        if (this.layout) {
            this.applyLayout("ease");
        }
        this.editLayout(false, false);
    }
    /**
     * @description Sorts the widgets based on the last saved layout
     * @param {string} sort - The order of the existing widgets
     */
    applyLayout(sort = null) {
        const items = this.grid.getItems();
        const itemIds = items.map(item => item.getElement().getAttribute("sort-id"));
        let newItems = [];
        let itemIndex = -1;
        for (let i = 0; i < this.layout.length; i++) {
            let itemId = this.layout[i];
            itemIndex = itemIds.indexOf(itemId);
            if (itemIndex !== -1) {
                newItems.push(items[itemIndex]);
            }
        }
        try {
            this.grid.sort(newItems, { layout: sort });
        }
        catch (err) {
            console.warn("Items could not be sorted.", err);
            if (!itemIds.filter(id => id === undefined).length) {
                this.layout = itemIds;
                console.warn("Resetting layout...");
            }
        }
    }
    /**
     * @description Marks any selected grid items to be deleted on saveLayout
     */
    setItemsAsRemoved(element) {
        let deletedTmp;
        if (element) {
            deletedTmp = [element];
        }
        else {
            deletedTmp = this.gridElement.nativeElement.querySelectorAll(".widget-selected");
        }
        deletedTmp.forEach(el => el.classList.add("widget-deleted"));
        this.grid.hide(deletedTmp);
        this.grid.getItems(deletedTmp).forEach(item => {
            item._isActive = false;
        });
        this.grid.refreshItems().layout();
    }
    /**
     * @description Removes items from the grid and the corresponding elements from the html
     * @param {any} items
     */
    _removeItems(items) {
        const itemIds = items.map(i => i.getElement().getAttribute("sort-id"));
        this.grid.remove(items, { removeElements: true });
        // remove them from widget array
        itemIds.forEach(id => {
            let idx = this.widgets.findIndex(i => i.id.toString() === id);
            if (idx !== -1) {
                this.widgets.splice(idx, 1);
            }
        });
    }
    /**
     * @description Creates a dynamic widget component and adds it to the grid
     * @param {IGridWidget} widgetData  - The data for the dynamic component instance
     */
    _addItem(widgetData) {
        // make grid editable
        if (!this.editable) {
            this.editLayout(true);
        }
        // init new widget
        const newWidget = Object.assign(Object.assign({}, widgetData), { id: this.widgets.length.toString() });
        this.widgets.push(newWidget);
        this._createWidget(newWidget);
        // make widget part of the grid
        let w = this.hostElement.nativeElement.querySelectorAll(".widget");
        this._addWidgetToGrid(w[w.length - 1], newWidget.id);
        this.grid.refreshItems().layout(true);
    }
    /**
     * @description Initializes a dynamic component instance based on widgetData and subscribes to any events passed
     * @param {IGridWidget} widgetData  - The data for the dynamic component instance
     * @param {boolean} active          - Whether the widget can be manipulated by the user
     */
    _createWidget(widgetData, active = true) {
        const widget = this.gridHost.viewContainerRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(_grid_widget_grid_widget_component__WEBPACK_IMPORTED_MODULE_5__["GridWidgetComponent"]));
        if (widgetData.options) {
            this._setWidgetOptions(widget, widgetData.options);
        }
        widget.instance.widgetEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._unsub$)).subscribe((event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
                console.log(event);
            }
            this.widgetEvent.emit(event);
            if (event.type === "modifyWidgetData") {
                if (event.value.overwrite) {
                    widgetData.data = event.value.data || {};
                    widgetData.options = event.value.options || {};
                }
                else {
                    widgetData.data = widgetData.data || {};
                    widgetData.options = widgetData.options || {};
                    Object.keys(event.value.data).forEach(property => {
                        widgetData.data[property] = event.value.data[property];
                    });
                    Object.keys(event.value.options).forEach(property => {
                        if (widget.instance.hasOwnProperty(property)) {
                            widgetData.options[property] = event.value.options[property];
                        }
                    });
                }
                if (event.value.options) {
                    this._setWidgetOptions(widget, widgetData.options);
                }
                yield this.saveLayout(true);
                setTimeout(() => {
                    this.grid.refreshItems().layout();
                });
            }
        }));
        widget.instance.delete.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._unsub$)).subscribe((el) => {
            el.classList.add("widget-deleted");
            this.grid.hide([el]);
            this.grid.getItems([el]).forEach(item => {
                item._isActive = false;
            });
            this.grid.refreshItems().layout();
        });
        if (!active) {
            widget.instance.class += ' widget-inactive';
            widget.instance.active = false;
        }
        widget.instance.loadComponent(widgetData);
    }
    /**
     * @description adds the specified widget to the grid
     * @param {any} widget  - The widget to be added
     * @param {string} id   - The sort-id of the widget in the grid layout
     */
    _addWidgetToGrid(widget, id) {
        widget.setAttribute("sort-id", id.toString());
        if (this.editable) {
            this.tmpItems.push(id.toString());
            this._makeWidgetEditable(widget);
        }
        this.grid.add([widget]);
    }
    /**
     * @description makes the widget able to be manipulated by the user and sets it to editable state
     * @param {any} el  - The target html element of the widget
     */
    _makeWidgetEditable(el) {
        el.classList.add("widget-edit");
        this.ds.addSelectables([el]);
        el.addEventListener("mousedown", (e) => {
            e.preventDefault();
            this.ds.break();
        });
        el.addEventListener("touchstart", (e) => {
            e.preventDefault();
            this.ds.break();
        });
        el.addEventListener("dblclick", (e) => {
            e.preventDefault();
            if (el.classList.contains("widget-selected")) {
                el.classList.remove("widget-selected");
            }
            else {
                el.classList.add("widget-selected");
            }
        });
        el.addEventListener("click", (e) => this._selectWidgetEvent(e, el));
        el.addEventListener("touchend", (e) => this._selectWidgetEvent(e, el));
    }
    /**
     * @description makes the widget unable to be manipulated by the user and removes its editable state
     * @param {any} el  - The target html element of the widget
     */
    _makeWidgetUneditable(el) {
        el.classList.remove("widget-edit", "widget-selected", "widget-deleted");
        this.ds.removeSelectables([el]);
        el.removeAllListeners("dblclick");
        el.removeAllListeners("click");
        el.removeAllListeners("touchend");
        el.removeAllListeners("mousedown");
        el.removeAllListeners("touchstart");
    }
    /**
     * @description sets the options as inputs for the selected widget
     * @param widget    - The widget instance
     * @param options   - The widget options
     * @private
     */
    _setWidgetOptions(widget, options) {
        Object.keys(options).forEach(property => {
            if (widget.instance.hasOwnProperty(property)) {
                widget.instance[property] = options[property];
            }
        });
    }
    /**
     * @description if the grid is in an editable state, marks every widget as selected
     */
    selectAll() {
        if (this.editable) {
            this.grid.getItems().forEach(item => item.getElement().classList.add("widget-selected"));
        }
    }
    /**
     * @description Makes all widgets of the static Muuri grid of the menu to appear
     */
    showAvailable() {
        this._loadAvailableWidgets();
        this.showAvailableWidgets = true;
        setTimeout(() => {
            this.availableWidgetsGrid.refreshItems().layout();
        }, 300);
    }
    /**
     * @description Makes all widgets of the static Muuri grid of the menu to disappear
     */
    hideAvailable() {
        this.showAvailableWidgets = false;
        this.availableWidgetsGrid.remove(this.availableWidgetsGrid.getItems(), { removeElements: true });
    }
    /**
     * Getter for editable
     */
    isEditable() {
        return this.editable;
    }
    /**
     * Getter for the items set as inactive in the grid
     */
    get deletedItems() {
        return this.grid.getItems().filter(i => !i.isActive());
    }
    /**
     * @description Enables keyboard shortcuts for keyup event
     * @param evt
     * @private
     */
    _keyShortcuts(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        switch (evt.code) {
            case "Delete":
                this.setItemsAsRemoved();
                break;
            case "KeyA":
                if (evt.ctrlKey) {
                    this.selectAll();
                }
        }
    }
    _selectWidgetEvent(e, el) {
        e.preventDefault();
        e.stopPropagation();
        if (e.ctrlKey) {
            if (el.classList.contains("widget-selected")) {
                el.classList.remove("widget-selected");
            }
            else {
                el.classList.add("widget-selected");
            }
        }
        else if (e.shiftKey) {
            if (el.classList.contains("widget-selected")) {
                el.classList.remove("widget-selected");
            }
            else {
                let prev = el;
                let toMark = [];
                let shouldMark = false;
                while (prev) {
                    if (!prev.classList.contains("widget-selected")) {
                        toMark.push(prev);
                    }
                    else {
                        shouldMark = true;
                        break;
                    }
                    prev = prev.previousElementSibling;
                }
                if (shouldMark) {
                    toMark.forEach(w => w.classList.add("widget-selected"));
                }
                else {
                    prev = toMark[0];
                    toMark = [];
                    while (prev) {
                        if (!prev.classList.contains("widget-selected")) {
                            toMark.push(prev);
                        }
                        else {
                            shouldMark = true;
                            break;
                        }
                        prev = prev.nextElementSibling;
                    }
                    if (shouldMark) {
                        toMark.forEach(w => w.classList.add("widget-selected"));
                    }
                    else {
                        toMark[0].classList.add("widget-selected");
                    }
                }
            }
        }
    }
}
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["app-grid"]], viewQuery: function GridComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_grid_host_directive__WEBPACK_IMPORTED_MODULE_4__["GridHostDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.gridElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.availableWidgetsGridElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.availableContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.hostElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.trash = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.gridHost = _t.first);
    } }, inputs: { enableEdit: "enableEdit", layoutAutoCalculate: "layoutAutoCalculate", enableDrag: "enableDrag", dragSortInterval: "dragSortInterval", items: "items", itemSelector: "itemSelector", alignRight: "alignRight", alignBottom: "alignBottom", horizontal: "horizontal" }, outputs: { widgetEvent: "widgetEvent" }, decls: 14, vars: 9, consts: [["class", "my-2 text-right", 4, "ngIf"], ["id", "grid-main-template", "tourGuide", "", 1, "grid", "grid-main", 3, "ngClass"], ["mainGrid", ""], ["id", "drag-select", 1, "drag-select", 3, "hidden"], ["color", "purple", "type", "square-loader", 3, "loading"], ["class", "mr-1 edit-label", 4, "ngIf"], ["class", "p-0 m-0 recycle-bin text-lightgrey", "tourGuide", "", "id", "recycle-bin", 4, "ngIf"], ["host", ""], ["gridHost", ""], ["id", "grid-available-widgets", "tourGuide", "", 1, "grid-container", "my-2", 3, "hidden", "ngStyle"], ["availableContainer", ""], [1, "grid", "custom-scroller", "horizontal-scrollbar"], ["availableWidgetsGrid", ""], [1, "my-2", "text-right"], ["action", "edit", "class", "grid-edit-button btn-lg", "icon", "la-cog", "displayName", "", "id", "gear-button", "tourGuide", "", 3, "btnClick", 4, "ngIf"], ["action", "save", "class", "grid-edit-button btn-lg float-left", "displayName", "", "id", "save-button", "tourGuide", "", 3, "btnClick", 4, "ngIf"], ["class", "ml-2", "action", "cancel", "icon", "la-times", 3, "btnClick", 4, "ngIf"], ["class", "float-left", "action", "save", 3, "btnClick", 4, "ngIf"], ["action", "help", "icon", "la-cubes", 3, "class", "btnClick", 4, "ngIf", 6, "displayName"], ["action", "delete", 3, "class", "btnClick", 4, "ngIf", 6, "displayName"], ["action", "save", "icon", "la-cube", "id", "grid-add-widget", "tourGuide", "", 3, "class", "btnClick", 4, "ngIf", 6, "displayName"], ["action", "save", "icon", "la-times", 3, "class", "btnClick", 4, "ngIf", 6, "displayName"], ["action", "edit", "icon", "la-cog", "displayName", "", "id", "gear-button", "tourGuide", "", 1, "grid-edit-button", "btn-lg", 3, "btnClick"], ["action", "save", "displayName", "", "id", "save-button", "tourGuide", "", 1, "grid-edit-button", "btn-lg", "float-left", 3, "btnClick"], ["action", "cancel", "icon", "la-times", 1, "ml-2", 3, "btnClick"], ["action", "save", 1, "float-left", 3, "btnClick"], ["action", "help", "icon", "la-cubes", 3, "btnClick", 6, "displayName"], ["action", "delete", 3, "btnClick", 6, "displayName"], ["action", "save", "icon", "la-cube", "id", "grid-add-widget", "tourGuide", "", 3, "btnClick", 6, "displayName"], ["action", "save", "icon", "la-times", 3, "btnClick", 6, "displayName"], [1, "mr-1", "edit-label"], [1, "la", "la-edit"], ["tourGuide", "", "id", "recycle-bin", 1, "p-0", "m-0", "recycle-bin", "text-lightgrey"], [1, "la", "la-trash", "la-5x", 6, "title"], ["trash", ""], ["class", "font-weight-bold", 3, "title", 4, "ngIf"], [1, "font-weight-bold", 6, "title"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, GridComponent_div_0_Template, 9, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-loader", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, GridComponent_span_5_Template, 3, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, GridComponent_div_6_Template, 5, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, GridComponent_ng_template_9_Template, 0, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.enableEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.isEditable() ? "grid-edit" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.isEditable());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEditable());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEditable());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.hideMenu || !ctx.showAvailableWidgets)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c23));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _directives_tour_guide_tour_guide_directive__WEBPACK_IMPORTED_MODULE_10__["TourGuideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["LoaderComponent"], _grid_host_directive__WEBPACK_IMPORTED_MODULE_4__["GridHostDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], _button_button_component__WEBPACK_IMPORTED_MODULE_12__["ButtonComponent"]], styles: [".grid[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 100%;\n  min-width: 100%;\n}\n\n.grid-edit[_ngcontent-%COMP%] {\n  border: dashed lightgray;\n}\n\n.grid-edit-button[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n}\n\n.grid-main[_ngcontent-%COMP%] {\n  min-height: 500px;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  overflow: auto !important;\n  max-height: 100%;\n  min-width: 220px;\n  padding: 3px 3px 3px 8px;\n  background-color: rgba(239, 239, 239, 0.8);\n  box-shadow: -1px 1px 16px 2px rgba(0, 0, 0, 0.4);\n  z-index: 100;\n  position: absolute;\n  right: 0;\n  top: 25%;\n}\n\n.edit-label[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n  top: 0;\n  right: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.drag-select[_ngcontent-%COMP%] {\n  background-color: #ff790f;\n  border: 1px solid #862718;\n  position: absolute;\n  opacity: 0.3;\n  z-index: 5;\n}\n\n.recycle-bin[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -75px;\n  z-index: 5;\n  left: 10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.recycle-bin[_ngcontent-%COMP%]:hover {\n  transition: color 200ms ease;\n  color: indianred !important;\n}\n\n.recycle-bin[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  left: -12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmlkL2dyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFDSjs7QUFBSTtFQUNJLDRCQUFBO0VBQ0EsMkJBQUE7QUFFUjs7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQUVSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ncmlkL2dyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG59XG5cbi5ncmlkLWVkaXQge1xuICAgIGJvcmRlcjogZGFzaGVkIGxpZ2h0Z3JheTtcbn1cblxuLmdyaWQtZWRpdC1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG59XG5cbi5ncmlkLW1haW4ge1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xufVxuXG4uZ3JpZC1jb250YWluZXIge1xuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDIyMHB4O1xuICAgIHBhZGRpbmc6IDNweCAzcHggM3B4IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOSwgMjM5LCAyMzksIDAuOCk7XG4gICAgYm94LXNoYWRvdzogLTFweCAxcHggMTZweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAyNSU7XG59XG5cbi5lZGl0LWxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogNTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5kcmFnLXNlbGVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzkwZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODYyNzE4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwLjM7XG4gICAgei1pbmRleDogNTtcbn1cblxuLnJlY3ljbGUtYmluIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtNzVweDtcbiAgICB6LWluZGV4OiA1O1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGVhc2U7XG4gICAgICAgIGNvbG9yOiBpbmRpYW5yZWQgIWltcG9ydGFudDtcbiAgICB9XG4gICAgJiBzcGFuIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiAtMTJweDtcbiAgICB9XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-grid',
                templateUrl: './grid.component.html',
                styleUrls: ['./grid.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { enableEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], layoutAutoCalculate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], enableDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dragSortInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], itemSelector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], alignRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], alignBottom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], horizontal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], widgetEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], gridElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["mainGrid", { static: true }]
        }], availableWidgetsGridElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["availableWidgetsGrid", { static: true }]
        }], availableContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["availableContainer", { static: true }]
        }], hostElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["host", { static: true }]
        }], trash: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["trash"]
        }], gridHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_grid_host_directive__WEBPACK_IMPORTED_MODULE_4__["GridHostDirective"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/grid/grid.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/grid/grid.module.ts ***!
  \************************************************/
/*! exports provided: GridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridModule", function() { return GridModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid.component */ "./src/app/components/grid/grid.component.ts");
/* harmony import */ var _button_button_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/button.module */ "./src/app/components/button/button.module.ts");
/* harmony import */ var _grid_widget_grid_widget_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid-widget/grid-widget.component */ "./src/app/components/grid/grid-widget/grid-widget.component.ts");
/* harmony import */ var _grid_widget_grid_widget_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid-widget/grid-widget.module */ "./src/app/components/grid/grid-widget/grid-widget.module.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/modal.module */ "./src/app/components/modal/modal.module.ts");
/* harmony import */ var _tour_guide_tour_guide_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tour-guide/tour-guide.module */ "./src/app/components/tour-guide/tour-guide.module.ts");
/* harmony import */ var _loader_loader_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loader/loader.module */ "./src/app/components/loader/loader.module.ts");










class GridModule {
}
GridModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GridModule });
GridModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GridModule_Factory(t) { return new (t || GridModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _modal_modal_module__WEBPACK_IMPORTED_MODULE_6__["ModalModule"],
            _grid_widget_grid_widget_module__WEBPACK_IMPORTED_MODULE_5__["GridWidgetModule"],
            _button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
            _tour_guide_tour_guide_module__WEBPACK_IMPORTED_MODULE_7__["TourGuideModule"],
            _loader_loader_module__WEBPACK_IMPORTED_MODULE_8__["LoaderModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GridModule, { declarations: [_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _modal_modal_module__WEBPACK_IMPORTED_MODULE_6__["ModalModule"],
        _grid_widget_grid_widget_module__WEBPACK_IMPORTED_MODULE_5__["GridWidgetModule"],
        _button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
        _tour_guide_tour_guide_module__WEBPACK_IMPORTED_MODULE_7__["TourGuideModule"],
        _loader_loader_module__WEBPACK_IMPORTED_MODULE_8__["LoaderModule"]], exports: [_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"]],
                exports: [_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _modal_modal_module__WEBPACK_IMPORTED_MODULE_6__["ModalModule"],
                    _grid_widget_grid_widget_module__WEBPACK_IMPORTED_MODULE_5__["GridWidgetModule"],
                    _button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
                    _tour_guide_tour_guide_module__WEBPACK_IMPORTED_MODULE_7__["TourGuideModule"],
                    _loader_loader_module__WEBPACK_IMPORTED_MODULE_8__["LoaderModule"],
                ],
                entryComponents: [_grid_widget_grid_widget_component__WEBPACK_IMPORTED_MODULE_4__["GridWidgetComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/loader/LoaderTypes.ts":
/*!**************************************************!*\
  !*** ./src/app/components/loader/LoaderTypes.ts ***!
  \**************************************************/
/*! exports provided: LoaderTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderTypes", function() { return LoaderTypes; });
var LoaderTypes;
(function (LoaderTypes) {
    LoaderTypes["ball8bits"] = "ball-8bits";
    LoaderTypes["ballatom"] = "ball-atom";
    LoaderTypes["ballbeat"] = "ball-beat";
    LoaderTypes["ballcircus"] = "ball-circus";
    LoaderTypes["ballclimbingdot"] = "ball-climbing-dot";
    LoaderTypes["ballcliprotate"] = "ball-clip-rotate";
    LoaderTypes["ballcliprotatemultiple"] = "ball-clip-rotate-multiple";
    LoaderTypes["ballcliprotatepulse"] = "ball-clip-rotate-pulse";
    LoaderTypes["ballelasticdots"] = "ball-elastic-dots";
    LoaderTypes["ballfall"] = "ball-fall";
    LoaderTypes["ballfussion"] = "ball-fussion";
    LoaderTypes["ballgridbeat"] = "ball-grid-beat";
    LoaderTypes["ballgridpulse"] = "ball-grid-pulse";
    LoaderTypes["ballnewtoncradle"] = "ball-newton-cradle";
    LoaderTypes["ballpulse"] = "ball-pulse";
    LoaderTypes["ballpulserise"] = "ball-pulse-rise";
    LoaderTypes["ballpulsesync"] = "ball-pulse-sync";
    LoaderTypes["ballrotate"] = "ball-rotate";
    LoaderTypes["ballrunningdots"] = "ball-running-dots";
    LoaderTypes["ballscale"] = "ball-scale";
    LoaderTypes["ballscalemultiple"] = "ball-scale-multiple";
    LoaderTypes["ballscalepulse"] = "ball-scale-pulse";
    LoaderTypes["ballscaleripple"] = "ball-scale-ripple";
    LoaderTypes["ballscaleripplemultiple"] = "ball-scale-ripple-multiple";
    LoaderTypes["ballspin"] = "ball-spin";
    LoaderTypes["ballspinclockwise"] = "ball-spin-clockwise";
    LoaderTypes["ballspinclockwisefade"] = "ball-spin-clockwise-fade";
    LoaderTypes["ballspinclockwisefaderotating"] = "ball-spin-clockwise-fade-rotating";
    LoaderTypes["ballspinfade"] = "ball-spin-fade";
    LoaderTypes["ballspinfaderotating"] = "ball-spin-fade-rotating";
    LoaderTypes["ballspin-rotate"] = "ball-spin-rotate";
    LoaderTypes["ballsquareclockwisespin"] = "ball-square-clockwise-spin";
    LoaderTypes["ballsquarespin"] = "ball-square-spin";
    LoaderTypes["balltrianglepath"] = "ball-triangle-path";
    LoaderTypes["ballzigzag"] = "ball-zig-zag";
    LoaderTypes["ballzigzagdeflect"] = "ball-zig-zag-deflect";
    LoaderTypes["cubetransition"] = "cube-transition";
    LoaderTypes["fire"] = "fire";
    LoaderTypes["linescale"] = "line-scale";
    LoaderTypes["linepulseout"] = "line-pulse-out";
    LoaderTypes["linepulseoutrapid"] = "line-pulse-out-rapid";
    LoaderTypes["linescalepulseout"] = "line-scale-pulse-out";
    LoaderTypes["linescaleparty"] = "line-scale-party";
    LoaderTypes["linespinclockwisefade"] = "line-spin-clockwise-fade";
    LoaderTypes["linespinclockwisefaderotating"] = "line-spin-clockwise-fade-rotating";
    LoaderTypes["pacman"] = "pacman";
    LoaderTypes["squarejelly-box"] = "square-jelly-box";
    LoaderTypes["squareloader"] = "square-loader";
    LoaderTypes["squarespin"] = "square-spin";
    LoaderTypes["timer"] = "timer";
    LoaderTypes["triangleskewspin"] = "triangle-skew-spin";
    // ? custom types
    LoaderTypes["thegreeksatom"] = "thegreeks-atom";
})(LoaderTypes || (LoaderTypes = {}));


/***/ }),

/***/ "./src/app/components/loader/loader.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _LoaderTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoaderTypes */ "./src/app/components/loader/LoaderTypes.ts");





var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2125204197222110713$$SRC_APP_COMPONENTS_LOADER_LOADER_COMPONENT_TS_1 = goog.getMsg(" Please wait\" ");
    I18N_0 = MSG_EXTERNAL_2125204197222110713$$SRC_APP_COMPONENTS_LOADER_LOADER_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟0c9e2c7639ba67ec44f423ab3cb38f2ed6fc33ff␟2125204197222110713: Please wait" `;
}
class LoaderComponent {
    constructor(spinner, cd) {
        this.spinner = spinner;
        this.cd = cd;
        this._loaderTypes = Object.values(_LoaderTypes__WEBPACK_IMPORTED_MODULE_2__["LoaderTypes"]);
        this.random = false;
        this.fullScreen = false;
        this.color = "#fff";
        this.bgColor = "rgba(0,0,0,0.3)";
        this.textColor = null;
        this.size = "medium";
        this.loading = false;
    }
    set setLoading(loading) {
        this.loading = loading;
        if (loading) {
            this.show();
        }
        else {
            this.hide();
        }
        this.cd.markForCheck();
    }
    ngOnInit() {
        if (this.random) {
            this.type = this._loaderTypes[Math.floor(Math.random() * this._loaderTypes.length)];
        }
        else {
            this.type = this._loaderTypes.includes(this.type) ? this.type : _LoaderTypes__WEBPACK_IMPORTED_MODULE_2__["LoaderTypes"].ballscalemultiple;
        }
    }
    ngAfterViewInit() {
        if (this.loading) {
            this.spinner.show();
        }
        this.cd.detectChanges();
    }
    show() {
        this.spinner.show();
    }
    hide() {
        this.spinner.hide();
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], inputs: { setLoading: ["loading", "setLoading"], type: "type", random: "random", fullScreen: "fullScreen", color: "color", bgColor: "bgColor", textColor: "textColor", size: "size" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]])], decls: 3, vars: 7, consts: [[3, "bdColor", "size", "color", "fullScreen", "type"], [1, "font-weight-bold", "mt-4"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bdColor", ctx.bgColor)("size", ctx.size)("color", ctx.color)("fullScreen", ctx.fullScreen)("type", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.textColor);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n  .overlay {\n  z-index: 8 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FBQUo7O0FBSUk7RUFDSSxxQkFBQTtBQURSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46aG9zdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbn1cblxuOjpuZy1kZWVwIHtcbiAgICAub3ZlcmxheSB7XG4gICAgICAgIHotaW5kZXg6IDghaW1wb3J0YW50O1xuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-loader",
                templateUrl: "./loader.component.html",
                styleUrls: ["./loader.component.scss"],
                providers: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]]
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { setLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["loading"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], random: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fullScreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bgColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], textColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/loader/loader.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/loader/loader.module.ts ***!
  \****************************************************/
/*! exports provided: LoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderModule", function() { return LoaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");





class LoaderModule {
}
LoaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoaderModule });
LoaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoaderModule_Factory(t) { return new (t || LoaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoaderModule, { declarations: [_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"]], exports: [_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"]
                ],
                declarations: [_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _animations_enter_leave_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animations/enter-leave.animation */ "./src/app/animations/enter-leave.animation.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/button.component */ "./src/app/components/button/button.component.ts");





const _c0 = ["footer"];
const _c1 = ["body"];
function ModalComponent_div_0_div_4_h4_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.headerTitle, " ");
} }
function ModalComponent_div_0_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnClick", function ModalComponent_div_0_div_4_div_5_Template_app_button_btnClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r6.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalComponent_div_0_div_4_h4_3_Template, 2, 1, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ModalComponent_div_0_div_4_div_5_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.headerTitle !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.hasClose);
} }
function ModalComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, null, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function () { return { "min-width": "600px" }; };
function ModalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_div_0_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onBackdropClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ModalComponent_div_0_div_4_Template, 6, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ModalComponent_div_0_div_8_Template, 4, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("full-width", ctx_r0.fullWidth)("full-height", ctx_r0.fullHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fade", undefined)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hasHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hasFooter);
} }
const _c3 = [[["", "body", ""]], [["", "header", ""]], [["", "footer", ""]]];
const _c4 = ["[body]", "[header]", "[footer]"];
class ModalComponent {
    constructor(cd) {
        this.cd = cd;
        this.hasClose = true;
        this.closeWithBackdrop = true;
        this.closeWithEscape = true;
        this.fullWidth = false;
        this.fullHeight = false;
        this.headerTitle = "";
        this.hasHeader = true;
        this.hasFooter = true;
        this.backdropClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    handleEscapeEvent() {
        if (this.opened && this.closeWithEscape) {
            this.opened = false;
            this.close.emit();
            this.cd.markForCheck();
        }
    }
    show() {
        this.opened = true;
        this.open.emit();
        this.cd.markForCheck();
    }
    hide() {
        this.opened = false;
        this.close.emit();
        this.cd.markForCheck();
    }
    onBackdropClose() {
        if (this.closeWithBackdrop && this.opened) {
            this.opened = false;
            this.close.emit();
            this.backdropClose.emit();
            this.cd.markForCheck();
        }
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], viewQuery: function ModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.body = _t.first);
    } }, hostBindings: function ModalComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.escape", function ModalComponent_keydown_escape_HostBindingHandler() { return ctx.handleEscapeEvent(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { hasClose: "hasClose", closeWithBackdrop: "closeWithBackdrop", closeWithEscape: "closeWithEscape", fullWidth: "fullWidth", fullHeight: "fullHeight", headerTitle: "headerTitle", hasHeader: "hasHeader", hasFooter: "hasFooter" }, outputs: { backdropClose: "backdropClose", close: "close", open: "open" }, ngContentSelectors: _c4, decls: 1, vars: 1, consts: [["class", "app-modal-wrapper", 4, "ngIf"], [1, "app-modal-wrapper"], [1, "app-modal"], [1, "app-modal-backdrop", 3, "click"], [1, "app-modal-content", "shadow", "d-flex", "flex-column", "justify-content-between", 3, "ngStyle"], ["class", "header p-3", 4, "ngIf"], [1, "body", "flex-fill", "custom-scroller", "position-relative", "mr-1", "my-1", "p-3", "overflow-y-auto"], ["body", ""], ["class", "footer p-3", 4, "ngIf"], [1, "header", "p-3"], [1, "d-flex", "align-items-center"], [1, "flex-grow-1", "align-self-center"], ["class", "font-weight-bold m-0", 4, "ngIf"], ["class", "flex-shrink-1", 4, "ngIf"], [1, "font-weight-bold", "m-0"], [1, "flex-shrink-1"], ["action", "close", "displayName", "", 3, "btnClick"], [1, "footer", "p-3"], ["footer", ""]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModalComponent_div_0_Template, 9, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.opened);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]], styles: [".app-modal-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 200;\n}\n\n.app-modal-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.app-modal[_ngcontent-%COMP%]   .app-modal-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.app-modal[_ngcontent-%COMP%]   .app-modal-content[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 10px;\n  position: absolute;\n}\n\n.app-modal[_ngcontent-%COMP%]   .app-modal-content.full-width[_ngcontent-%COMP%] {\n  min-width: calc(100% - 60px) !important;\n  max-width: calc(100% - 60px) !important;\n}\n\n.app-modal[_ngcontent-%COMP%]   .app-modal-content.full-height[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 60px) !important;\n  max-height: calc(100vh - 60px) !important;\n}\n\n.app-modal[_ngcontent-%COMP%]   .app-modal-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  border-bottom: solid 1px #FFDEE2E6;\n}\n\n.app-modal[_ngcontent-%COMP%]   .app-modal-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  border-top: solid 1px #FFDEE2E6;\n}\n\n.app-modal[_ngcontent-%COMP%]   .app-modal-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .presets[_ngcontent-%COMP%]     button {\n  margin-left: 10px;\n}\n\n.absolute-center[_ngcontent-%COMP%], .app-modal-container[_ngcontent-%COMP%], .app-modal[_ngcontent-%COMP%]   .app-modal-content[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLG9DQUFBO0FBREo7O0FBSUU7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7QUFISjs7QUFNSTtFQUNFLHVDQUFBO0VBQ0EsdUNBQUE7QUFKTjs7QUFPSTtFQUNFLHlDQUFBO0VBQ0EseUNBQUE7QUFMTjs7QUFRSTtFQUNFLGtDQUFBO0FBTk47O0FBU0k7RUFTRSwrQkFBQTtBQWZOOztBQVNVO0VBQ0UsaUJBQUE7QUFQWjs7QUFpQkE7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBZEYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1tb2RhbC13cmFwcGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDIwMDtcbn1cblxuLmFwcC1tb2RhbC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIEBleHRlbmQgLmFic29sdXRlLWNlbnRlcjtcbn1cblxuLmFwcC1tb2RhbCB7XG4gIC5hcHAtbW9kYWwtYmFja2Ryb3Age1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB9XG5cbiAgLmFwcC1tb2RhbC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIEBleHRlbmQgLmFic29sdXRlLWNlbnRlcjtcblxuICAgICYuZnVsbC13aWR0aCB7XG4gICAgICBtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpICFpbXBvcnRhbnQ7IC8vIDMwcHggZWFjaCBzaWRlXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpICFpbXBvcnRhbnQ7IC8vIDMwcHggZWFjaCBzaWRlXG4gICAgfVxuXG4gICAgJi5mdWxsLWhlaWdodCB7XG4gICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCkgIWltcG9ydGFudDsgLy8gMzBweCBlYWNoIHNpZGVcbiAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KSAhaW1wb3J0YW50OyAvLyAzMHB4IGVhY2ggc2lkZVxuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNGRkRFRTJFNjtcbiAgICB9XG5cbiAgICAuZm9vdGVyIHtcbiAgICAgIC5wcmVzZXRzIHtcbiAgICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjRkZERUUyRTY7XG4gICAgfVxuICB9XG59XG5cbi5hYnNvbHV0ZS1jZW50ZXIge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbiJdfQ== */"], data: { animation: [_animations_enter_leave_animation__WEBPACK_IMPORTED_MODULE_1__["fade"]] }, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-modal",
                templateUrl: "./modal.component.html",
                styleUrls: ["./modal.component.scss"],
                animations: [_animations_enter_leave_animation__WEBPACK_IMPORTED_MODULE_1__["fade"]],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { hasClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeWithBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeWithEscape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fullWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fullHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], headerTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hasHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hasFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backdropClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], footer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["footer"]
        }], body: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["body"]
        }], handleEscapeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["document:keydown.escape"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/modal/modal.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/modal/modal.module.ts ***!
  \**************************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _button_button_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/button.module */ "./src/app/components/button/button.module.ts");





class ModalModule {
}
ModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ModalModule });
ModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ModalModule_Factory(t) { return new (t || ModalModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModalModule, { declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"]], exports: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]],
                exports: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/tour-guide/tour-guide.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/tour-guide/tour-guide.component.ts ***!
  \***************************************************************/
/*! exports provided: TourGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourGuideComponent", function() { return TourGuideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _interfaces_ITourGuide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/ITourGuide */ "./src/app/interfaces/ITourGuide.ts");
/* harmony import */ var _animations_enter_leave_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations/enter-leave.animation */ "./src/app/animations/enter-leave.animation.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "./src/app/services/navigation/navigation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../button/button.component */ "./src/app/components/button/button.component.ts");














const _c0 = ["highlighted"];
const _c1 = ["progress"];
const _c2 = ["tooltipShow"];
const _c3 = ["shortcutsModal"];
const _c4 = ["tooltip"];
function TourGuideComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TourGuideComponent_ng_container_0_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.backDropEnd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fade", undefined);
} }
function TourGuideComponent_ng_container_0_app_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("btnClick", function TourGuideComponent_ng_container_0_app_button_4_Template_app_button_btnClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.toggleTooltip(true, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fade", undefined);
} }
function TourGuideComponent_ng_container_0_div_8_i_12_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TourGuideComponent_ng_container_0_div_8_i_12_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r18.prevPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Previous page: " + (ctx_r13.prevPageTitle || ctx_r13.prevPageUrl));
} }
function TourGuideComponent_ng_container_0_div_8_span_14_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TourGuideComponent_ng_container_0_div_8_span_14_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const i_r21 = ctx.index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r22.goToStepViaProgress(i_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r21 = ctx.index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate2"]("mx-1 tour-guide-step ", ctx_r14.canSkipSteps ? "" : "no-skip", " ", i_r21 <= ctx_r14.currentStep ? "bg-primary" : "", "");
} }
function TourGuideComponent_ng_container_0_div_8_i_16_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TourGuideComponent_ng_container_0_div_8_i_16_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r24.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Next page: " + (ctx_r15.nextPageTitle || ctx_r15.nextPageUrl));
} }
function TourGuideComponent_ng_container_0_div_8_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TourGuideComponent_ng_container_0_div_8_app_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("btnClick", function TourGuideComponent_ng_container_0_div_8_app_button_20_Template_app_button_btnClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r27.endTour(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("btn-sm m-1 pull-left");
} }
function TourGuideComponent_ng_container_0_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TourGuideComponent_ng_container_0_div_8_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r29.toggleTooltip(false); return ctx_r29.showTooltipButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TourGuideComponent_ng_container_0_div_8_i_12_Template, 1, 1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TourGuideComponent_ng_container_0_div_8_span_14_Template, 1, 4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, TourGuideComponent_ng_container_0_div_8_i_16_Template, 1, 1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, TourGuideComponent_ng_container_0_div_8_div_17_Template, 6, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, TourGuideComponent_ng_container_0_div_8_app_button_20_Template, 1, 2, "app-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "app-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("btnClick", function TourGuideComponent_ng_container_0_div_8_Template_app_button_btnClick_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r31.startTour(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "app-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("btnClick", function TourGuideComponent_ng_container_0_div_8_Template_app_button_btnClick_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r32.currentStep <= 0 && ctx_r32.prevPageUrl ? ctx_r32.prevPage() : ctx_r32.prevStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "app-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("btnClick", function TourGuideComponent_ng_container_0_div_8_Template_app_button_btnClick_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r33.currentStep >= ctx_r33.steps.length - 1 && ctx_r33.nextPageUrl ? ctx_r33.nextPage() : ctx_r33.nextStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("border", !ctx_r7.hasBackdrop);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fade", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r7.tooltipContent.title, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r7.tooltipContent.text, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r7.canSkipSteps || !ctx_r7.currentStep) && ctx_r7.prevPageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.steps);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r7.canSkipSteps || ctx_r7.currentStep >= ctx_r7.steps.length - 1) && ctx_r7.nextPageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.hasProgressBar);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.canEndTour || ctx_r7.currentStep >= ctx_r7.steps.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("btn-sm m-1 pull-left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("btn-sm m-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx_r7.prevPageUrl && ctx_r7.currentStep <= 0 ? ctx_r7.prevPageTitle || ctx_r7.prevPageUrl : "")("hidden", ctx_r7.currentStep <= 0 && !ctx_r7.prevPageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("btn-sm m-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx_r7.nextPageUrl && ctx_r7.currentStep >= ctx_r7.steps.length - 1 ? ctx_r7.nextPageTitle || ctx_r7.nextPageUrl : "")("hidden", ctx_r7.currentStep >= ctx_r7.steps.length - 1 && !ctx_r7.nextPageUrl);
} }
function TourGuideComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TourGuideComponent_ng_container_0_div_1_Template, 1, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TourGuideComponent_ng_container_0_app_button_4_Template, 1, 1, "app-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("btnClick", function TourGuideComponent_ng_container_0_Template_app_button_btnClick_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); return _r2.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TourGuideComponent_ng_container_0_div_8_Template, 24, 20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.hasBackdrop);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.visibleTooltipButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r0.hasBackdrop || ctx_r0.scrolling);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.visibleTooltip);
} }
function TourGuideComponent_ul_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TourGuideComponent_ul_1_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.hasBackdrop = !ctx_r36.hasBackdrop; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " hasBackdrop ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TourGuideComponent_ul_1_Template_li_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r38.hasProgressBar = !ctx_r38.hasProgressBar; return ctx_r38.toggleTooltip(ctx_r38.visibleTooltip); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " hasProgressBar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TourGuideComponent_ul_1_Template_li_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r39.canSkipSteps = !ctx_r39.canSkipSteps; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " canSkipSteps ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TourGuideComponent_ul_1_Template_li_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r40.canEndTour = !ctx_r40.canEndTour; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " canEndTour ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TourGuideComponent_ul_1_Template_li_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r41.canEndFromBackdrop = !ctx_r41.canEndFromBackdrop; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " canEndFromBackdrop ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TourGuideComponent_ul_1_Template_li_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r42.canEditSteps = !ctx_r42.canEditSteps; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " canEditSteps ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.hasBackdrop ? "la-check text-success" : "la-times text-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.hasProgressBar ? "la-check text-success" : "la-times text-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.canSkipSteps ? "la-check text-success" : "la-times text-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.canEndTour ? "la-check text-success" : "la-times text-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.canEndFromBackdrop ? "la-check text-success" : "la-times text-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.canEditSteps ? "la-check text-success" : "la-times text-danger");
} }
class TourGuideComponent {
    constructor(navigation, cd, renderer, el, route, router) {
        this.navigation = navigation;
        this.cd = cd;
        this.renderer = renderer;
        this.el = el;
        this.route = route;
        this.router = router;
        this.steps = [];
        this.canEditSteps = true;
        this.hasBackdrop = true;
        this.canSkipSteps = true;
        this.canEndTour = true;
        this.canEndFromBackdrop = false;
        this.hasProgressBar = false;
        this.showDev = true;
        this.tourStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tourEnded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.visibleTooltip = false;
        this.visibleTooltipButton = false;
        this.openedEditor = false;
        this.tooltipContent = {
            title: "Tour Guide",
            text: "This is a tutorial to help you with understanding how to use this entity..."
        };
        this._currentStep = -1;
        this._currentPage = -1;
        this._currentStepRect = null;
        this._ongoing = false;
        this._scrolling = false;
        this._changingStep = false;
        this._unsub$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        el.nativeElement["startTour"] = () => {
            this.startTour();
        };
        el.nativeElement["isOngoing"] = () => {
            return this.isOngoing;
        };
    }
    ngOnInit() {
        document.documentElement.addEventListener("keydown", this._keyShortcuts.bind(this));
        this.isDevMode = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() || !_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production;
    }
    ngOnDestroy() {
        document.documentElement.removeEventListener("keydown", this._keyShortcuts);
        this.endTour();
        this._unsub$.next();
    }
    ngAfterViewInit() {
        this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsub$)).subscribe(params => {
            if (params.hasOwnProperty(_interfaces_ITourGuide__WEBPACK_IMPORTED_MODULE_2__["TOUR_GUIDE_ATTR"]) && !this.isOngoing) {
                setTimeout(() => {
                    this.startTour();
                });
            }
        });
    }
    // INITIALIZERS
    /**
     * @description Sets the tour state to onGoing and emits an event indicating the tour has started
     */
    startTour() {
        if (!this.steps.length) {
            return;
        }
        this._ongoing = true;
        this.tourStarted.emit();
        this._currentStep = -1;
        this.nextStep();
    }
    /**
     * @description Clears all the tour-guide related classes from the elements, ends the tour and emits an event with relevant info
     * such as if the tour finished prematurely, if the esc was pressed etc.
     * @param {ITourGuideEndEvent} event    - The event to be emitted when the tour ends
     */
    endTour(event) {
        this._clearSteps();
        let evt = {
            escapeKey: false,
            pageChanged: false,
            prematureEnd: this.currentStep < this.steps.length - 1,
            backdropClicked: false,
            step: this.currentStep
        };
        if (event) {
            evt = Object.assign(Object.assign({}, evt), event);
        }
        this.tourEnded.emit(evt);
        this._ongoing = false;
    }
    /**
     * @description On backdrop click, if both canEndTour and canEndFromBackdrop are true, calls endTour with event of backdropClicked = true
     */
    backDropEnd() {
        if (this.canEndTour && this.canEndFromBackdrop) {
            this.endTour({ backdropClicked: true });
        }
    }
    // STEP NAVIGATION
    /**
     * @description ends the current tour, emits a pageChange event and navigates to the url of the next page with a 'tourguide' parameter attached to it.
     * This is done in case there exists a tour-guide on that page so it starts automatically.
     */
    nextPage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = this.nextPageUrl.startsWith("/") ? this.nextPageUrl : "/" + this.nextPageUrl;
            this.endTour({ pageChanged: true });
            if (this.steps[this.currentStep].hasOwnProperty("onNext")) {
                this.steps[this.currentStep].onNext();
                yield _services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"].sleep(0);
            }
            this.pageChange.emit({
                page: "next",
                url
            });
            yield this.router.navigateByUrl(url + "?" + _interfaces_ITourGuide__WEBPACK_IMPORTED_MODULE_2__["TOUR_GUIDE_ATTR"] + '=true');
        });
    }
    /**
     * @description ends the current tour, emits a pageChange event and navigates to the url of the previous page with a 'tourguide' parameter attached to it.
     * This is done in case there exists a tour-guide on that page so it starts automatically.
     */
    prevPage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = this.prevPageUrl.startsWith("/") ? this.prevPageUrl : "/" + this.prevPageUrl;
            this.endTour({ pageChanged: true });
            if (this.steps[this.currentStep].hasOwnProperty("onPrev")) {
                this.steps[this.currentStep].onPrev();
                yield _services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"].sleep(0);
            }
            this.pageChange.emit({
                page: "previous",
                url
            });
            yield this.router.navigateByUrl(url + "?" + _interfaces_ITourGuide__WEBPACK_IMPORTED_MODULE_2__["TOUR_GUIDE_ATTR"] + '=true');
        });
    }
    /**
     * @description increments the step counter, runs onBefore() of the current step, onNext() of the previous step and then goes to the current step.
     */
    nextStep() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._changingStep = true;
            if (++this._currentStep >= this.steps.length) {
                this._currentStep = this.steps.length - 1;
            }
            if (this.steps[this.currentStep].hasOwnProperty("onBefore")) {
                this.steps[this.currentStep].onBefore();
            }
            const prevStep = this.steps[this._currentStep - 1];
            if (prevStep && prevStep.hasOwnProperty("onNext")) {
                this.steps[this._currentStep - 1].onNext();
            }
            this.cd.detectChanges();
            yield _services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"].sleep(0);
            this._goToStep(this.currentStep, "next");
        });
    }
    /**
     * @description decrements the step counter, runs onBefore() of the current step, onPrev() of the next step and then goes to the current step.
     */
    prevStep() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._changingStep = true;
            if (--this._currentStep < 0) {
                this._currentStep = 0;
            }
            if (this.steps[this.currentStep].hasOwnProperty("onBefore")) {
                this.steps[this.currentStep].onBefore();
            }
            const nextStep = this.steps[this._currentStep + 1];
            if (nextStep && nextStep.hasOwnProperty("onPrev")) {
                this.steps[this._currentStep + 1].onPrev();
            }
            this.cd.detectChanges();
            yield _services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"].sleep(0);
            this._goToStep(this.currentStep, "previous");
        });
    }
    /**
     * @description Sets the step counter to one more/less than the step indicated and then calls prevStep()/nextStep() respectively
     * @param {number} step - The step to go to
     */
    goToStepViaProgress(step) {
        if (step > this.currentStep && this.canSkipSteps) {
            this._currentStep = step - 1;
            this.nextStep();
        }
        else if (step < this.currentStep) {
            this._currentStep = step + 1;
            this.prevStep();
        }
    }
    /**
     * @description Sets the tour state to changingStep, scrolls to the current step's element if needed and manipulates
     * the DOM to highlight the current step
     * @param {number} step                     - The step to go to.
     * @param {"previous"|"next"} progress      - Concerns the animation of the progress bar
     * @private
     */
    _goToStep(step, progress) {
        if (!this.steps.length) {
            this.endTour();
            return;
        }
        this._changingStep = true;
        let stepElement = document.querySelector("[" + _interfaces_ITourGuide__WEBPACK_IMPORTED_MODULE_2__["TOUR_GUIDE_ATTR"] + "='" + this.steps[step].id + "']");
        this.toggleTooltip(false);
        if (stepElement) {
            const coords = stepElement.getBoundingClientRect();
            if (coords.top < 0 || coords.bottom > document.documentElement.offsetHeight) {
                this._scrolling = true;
                this._clearSteps();
                this.navigation.scrollToId(stepElement.id).subscribe(value => {
                }, error => {
                    console.warn(error);
                }, () => {
                    this._renderStep(step, stepElement, progress);
                    this._afterStepCalculations(step);
                });
            }
            else {
                setTimeout(() => {
                    this._clearSteps();
                    this._renderStep(step, stepElement, progress);
                    this._afterStepCalculations(step);
                }, 300);
            }
        }
        else {
            setTimeout(() => {
                this._clearSteps();
                this.toggleTooltip(true, false, progress);
                this.cd.detectChanges();
                _interfaces_ITourGuide__WEBPACK_IMPORTED_MODULE_2__["POSSIBLE_TOOLTIP_POSITIONS"].forEach(pos => {
                    this.renderer.removeStyle(this.tooltip.first.nativeElement, pos);
                });
                this._calcHighlightPosition(true);
                this._afterStepCalculations(step);
            }, 300);
        }
        this._setTooltipContent({
            title: this.steps[step].title,
            text: this.steps[step].text
        });
    }
    /**
     * @description Sets changingStep state to false and runs the current step's onAfter method if it exists
     * @param step  - The indicated step's index
     * @private
     */
    _afterStepCalculations(step) {
        this._changingStep = false;
        if (this.steps[step].hasOwnProperty("onAfter")) {
            this.steps[step].onAfter();
        }
    }
    // GETTERS
    get currentStep() {
        return this._currentStep;
    }
    get currentPage() {
        return this._currentPage;
    }
    get scrolling() {
        return this._scrolling;
    }
    get isOngoing() {
        return this._ongoing;
    }
    // DOM MANIPULATION
    /**
     * @description Adds the relevant tour-guide classes and events to the step and calculates the tooltip's position
     * @param {number} step                 - The indicated step's index
     * @param {Element} stepElement         - The step's corresponding DOM element
     * @param {"previous"|"next"} progress  - Concerns the progress bar animation
     * @private
     */
    _renderStep(step, stepElement, progress) {
        this._scrolling = false;
        this.toggleTooltip(true, false, progress);
        this._currentStepRect = stepElement.getBoundingClientRect();
        this._calcTooltipPosition(this.steps[step].tooltipPosition);
        this._calcHighlightPosition();
        stepElement.addEventListener("wheel", this._disableScrollEvent);
        this.renderer.addClass(stepElement, "tour-guide-highlighted");
        if (this.hasBackdrop && !(this.canEditSteps && !this.steps[step].disabledStep)) {
            this.renderer.addClass(stepElement, "tour-guide-disabled-step");
        }
    }
    /**
     * @description Clears all tour-guide classes and events from the steps' elements
     * @private
     */
    _clearSteps() {
        let stepElements = document.getElementsByClassName("tour-guide-highlighted");
        for (let i = 0; i < stepElements.length; i++) {
            let el = stepElements[i];
            this.renderer.removeClass(el, "tour-guide-highlighted");
            this.renderer.removeClass(el, "tour-guide-disabled-step");
            el.removeEventListener("wheel", this._disableScrollEvent);
        }
    }
    /**
     * @description Sets the tooltip visibility, reruns positioning calculations if needed and animates the progress bar fill
     * @param {boolean} val                 - Whether to set to visible or invisible
     * @param {boolean} recalc              - Whether to run calculations regarding the tooltip's position
     * @param {"previous"|"next"} progress  - Concerns the progress bar animation
     */
    toggleTooltip(val, recalc = false, progress) {
        this.visibleTooltip = val;
        this.visibleTooltipButton = false;
        if (recalc && this.steps[this.currentStep] && this.steps[this.currentStep].id) {
            this._calcTooltipPosition(this.steps[this._currentStep].tooltipPosition);
        }
        if (val && this.hasProgressBar) {
            this.cd.detectChanges();
            let progressBefore;
            let progressAfter = (this.steps.length ? ((this.currentStep + 1) / this.steps.length) * 100 : 0).toFixed(0);
            switch (progress) {
                case "previous":
                    progressBefore = (this.steps.length ? ((this.currentStep + 2) / this.steps.length) * 100 : 0).toFixed(0);
                    this.renderer.setStyle(this.progress.nativeElement, "width", progressBefore + "%");
                    setTimeout(() => {
                        this.renderer.setStyle(this.progress.nativeElement, "width", progressAfter + "%");
                    }, 0);
                    break;
                case "next":
                    progressBefore = (this.steps.length ? ((this.currentStep) / this.steps.length) * 100 : 0).toFixed(0);
                    this.renderer.setStyle(this.progress.nativeElement, "width", progressBefore + "%");
                    setTimeout(() => {
                        this.renderer.setStyle(this.progress.nativeElement, "width", progressAfter + "%");
                        if (this.currentStep === this.steps.length - 1) {
                            this.renderer.addClass(this.progress.nativeElement, "bg-success");
                        }
                    }, 0);
                    break;
                default:
                    this.renderer.setStyle(this.progress.nativeElement, "width", progressAfter + "%");
                    if (this.currentStep === this.steps.length - 1) {
                        this.renderer.addClass(this.progress.nativeElement, "bg-success");
                    }
                    break;
            }
        }
    }
    /**
     * @description Shows the button when tooltip is not visible and positions it correctly relevant to the step element
     */
    showTooltipButton() {
        this.visibleTooltipButton = true;
        this.cd.detectChanges();
        if (!(this.steps[this.currentStep] && this.steps[this.currentStep].id)) {
            this.renderer.removeStyle(this.tooltipShow.nativeElement, "top");
            this.renderer.removeStyle(this.tooltipShow.nativeElement, "right");
            return;
        }
        if (this._currentStepRect.top - this.tooltipShow.nativeElement.offsetHeight >= 0) {
            this.renderer.setStyle(this.tooltipShow.nativeElement, "top", this._currentStepRect.top - this.tooltipShow.nativeElement.offsetHeight + "px");
        }
        else {
            this.renderer.setStyle(this.tooltipShow.nativeElement, "top", this._currentStepRect.top + this._currentStepRect.height + "px");
        }
        if (document.documentElement.offsetWidth - this._currentStepRect.left >= 0) {
            this.renderer.setStyle(this.tooltipShow.nativeElement, "right", document.documentElement.offsetWidth - this._currentStepRect.left + "px");
        }
        else {
            this.renderer.setStyle(this.tooltipShow.nativeElement, "right", document.documentElement.offsetWidth - this._currentStepRect.right - this.tooltipShow.nativeElement.offsetWidth + "px");
        }
    }
    /**
     * @description Tries to set the tooltip to the specified position relative to the step element, provided it is fully visible without covering it.
     * If it fails it recursively tries to set the tooltip to the first cardinal position satisfying those requirements, clockwise starting from the top.
     * Finally if it fails again it forcefully sets the tooltip to the top position.
     * @param {string} pos      -   The tooltip position relative to the step element
     * @param {number} tryNo    -   Number of tries used for recursion purposes. You do not have to set this
     * @private
     */
    _calcTooltipPosition(pos, tryNo = -1) {
        if (!this._currentStepRect) {
            return;
        }
        this.cd.detectChanges();
        const el = this.tooltip.first.nativeElement;
        let newPos = 0;
        switch (pos) {
            case "top":
                newPos = this._currentStepRect.top - el.offsetHeight - _interfaces_ITourGuide__WEBPACK_IMPORTED_MODULE_2__["TOOLTIP_MARGIN"];
                if (newPos < 0) {
                    this._calcTooltipPosition(_interfaces_ITourGuide__WEBPACK_IMPORTED_MODULE_2__["POSSIBLE_TOOLTIP_POSITIONS"][++tryNo], tryNo);
                }
                else {
                    this.renderer.setStyle(el, "top", newPos + "px");
                    this.renderer.addClass(el, "triangle-bottom");
                    this._centerTooltip(false);
                }
                break;
            case "right":
                newPos = this._currentStepRect.right + el.offsetWidth + _interfaces_ITourGuide__WEBPACK_IMPORTED_MODULE_2__["TOOLTIP_MARGIN"];
                if (newPos > document.documentElement.offsetWidth) {
                    this._calcTooltipPosition(_interfaces_ITourGuide__WEBPACK_IMPORTED_MODULE_2__["POSSIBLE_TOOLTIP_POSITIONS"][++tryNo], tryNo);
                }
                else {
                    this.renderer.setStyle(el, "left", this._currentStepRect.right + _interfaces_ITourGuide__WEBPACK_IMPORTED_MODULE_2__["TOOLTIP_MARGIN"] + "px");
                    this.renderer.addClass(el, "triangle-left");
                    this._centerTooltip(true);
                }
                break;
            case "bottom":
                newPos = this._currentStepRect.bottom + el.offsetHeight + _interfaces_ITourGuide__WEBPACK_IMPORTED_MODULE_2__["TOOLTIP_MARGIN"];
                if (newPos > document.documentElement.offsetHeight) {
                    this._calcTooltipPosition(_interfaces_ITourGuide__WEBPACK_IMPORTED_MODULE_2__["POSSIBLE_TOOLTIP_POSITIONS"][++tryNo], tryNo);
                }
                else {
                    this.renderer.setStyle(el, "top", this._currentStepRect.bottom + _interfaces_ITourGuide__WEBPACK_IMPORTED_MODULE_2__["TOOLTIP_MARGIN"] + "px");
                    this.renderer.addClass(el, "triangle-top");
                    this._centerTooltip(false);
                }
                break;
            case "left":
                newPos = this._currentStepRect.left - el.offsetWidth - _interfaces_ITourGuide__WEBPACK_IMPORTED_MODULE_2__["TOOLTIP_MARGIN"];
                if (newPos < 0) {
                    this._calcTooltipPosition(_interfaces_ITourGuide__WEBPACK_IMPORTED_MODULE_2__["POSSIBLE_TOOLTIP_POSITIONS"][++tryNo], tryNo);
                }
                else {
                    this.renderer.setStyle(el, "left", newPos + "px");
                    this.renderer.addClass(el, "triangle-right");
                    this._centerTooltip(true);
                }
                break;
            default:
                if (tryNo < _interfaces_ITourGuide__WEBPACK_IMPORTED_MODULE_2__["POSSIBLE_TOOLTIP_POSITIONS"].length) {
                    this._calcTooltipPosition(_interfaces_ITourGuide__WEBPACK_IMPORTED_MODULE_2__["POSSIBLE_TOOLTIP_POSITIONS"][++tryNo], tryNo);
                }
                else {
                    this.renderer.setStyle(el, "top", 0);
                    this.renderer.addClass(el, "triangle-bottom");
                    this._centerTooltip(false);
                }
        }
    }
    /**
     * @description Sets the highlight background behind the current step element if it exists
     * @param {boolean} hide    - Whether the highlight background is visible
     * @private
     */
    _calcHighlightPosition(hide = false) {
        if (!this._currentStepRect || hide) {
            this.renderer.setStyle(this.highlighted.nativeElement, "display", "none");
            return;
        }
        this.renderer.removeStyle(this.highlighted.nativeElement, "display");
        this.renderer.setStyle(this.highlighted.nativeElement, "width", this._currentStepRect.width + 10 + "px");
        this.renderer.setStyle(this.highlighted.nativeElement, "height", this._currentStepRect.height + 10 + "px");
        this.renderer.setStyle(this.highlighted.nativeElement, "top", this._currentStepRect.top - 5 + "px");
        this.renderer.setStyle(this.highlighted.nativeElement, "left", this._currentStepRect.left - 5 + "px");
    }
    /**
     * @description Centers the tooltip relative to the step element and the edge of the screen. If it fits in the screen it is fully centered,
     * otherwise it is set to the edge of the screen. In the second case the tooltip arrow is moved to the top, center or bottom of the tooltip
     * depending on the position of the step element relative to it.
     * @param {boolean} vertical    - Whether to center the tooltip vertically or horizontally
     * @private
     */
    _centerTooltip(vertical = false) {
        const el = this.tooltip.first.nativeElement;
        if (!(el || this._currentStepRect)) {
            return;
        }
        let centeredPos;
        if (vertical) {
            centeredPos = this._currentStepRect.top + this._currentStepRect.height / 2 - el.offsetHeight / 2;
            if (centeredPos < 0) {
                centeredPos = 0;
                this.renderer.addClass(el, "edit-bottom");
            }
            else if (centeredPos + el.offsetHeight > document.documentElement.offsetHeight) {
                centeredPos = document.documentElement.offsetHeight - el.offsetHeight;
            }
            let arrowPos = (centeredPos + el.offsetHeight - this._currentStepRect.top - this._currentStepRect.height / 2) / el.offsetHeight;
            if (arrowPos <= 0.3) {
                this.renderer.addClass(el, "arrow-bottom");
            }
            else if (arrowPos >= 0.7) {
                this.renderer.addClass(el, "arrow-top");
            }
            this.renderer.setStyle(el, "top", centeredPos + "px");
        }
        else {
            centeredPos = this._currentStepRect.left + this._currentStepRect.width / 2 - el.offsetWidth / 2;
            if (centeredPos < 0) {
                centeredPos = 0;
                this.renderer.addClass(el, "edit-right");
            }
            else if (centeredPos + el.offsetWidth > document.documentElement.offsetWidth) {
                centeredPos = document.documentElement.offsetWidth - el.offsetWidth;
            }
            let arrowPos = (centeredPos + el.offsetWidth - this._currentStepRect.left - this._currentStepRect.width / 2) / el.offsetWidth;
            if (arrowPos <= 0.3) {
                this.renderer.addClass(el, "arrow-right");
            }
            else if (arrowPos >= 0.7) {
                this.renderer.addClass(el, "arrow-left");
            }
            this.renderer.setStyle(el, "left", centeredPos + "px");
        }
    }
    // EVENT HANDLING
    _disableScrollEvent(evt) {
        evt.stopPropagation();
        evt.preventDefault();
    }
    /**
     * @description Enables keyboard shortcuts for the tour navigation
     * @param evt   - The keyboard event
     * @private
     */
    _keyShortcuts(evt) {
        if (!this.isOngoing || this.openedEditor) {
            return;
        }
        if (evt.key === "Escape" && (this.canEndTour || this.currentStep >= this.steps.length - 1 || (evt.ctrlKey && evt.shiftKey))) {
            if (this.isOngoing) {
                evt.preventDefault();
                this.endTour({ escapeKey: true });
            }
        }
        else if (evt.key === "Tab") {
            evt.preventDefault();
            evt.stopPropagation();
            if (evt.shiftKey) {
                if (this.currentStep > 0 && !this._changingStep) {
                    this.prevStep();
                }
            }
            else if (this.currentStep < this.steps.length - 1 && !this._changingStep) {
                this.nextStep();
            }
        }
        else if (evt.ctrlKey) {
            evt.preventDefault();
            switch (evt.key) {
                case "ArrowRight":
                    if (this.currentStep < this.steps.length - 1 && !this._changingStep) {
                        this.nextStep();
                    }
                    break;
                case "ArrowLeft":
                    if (this.currentStep > 0 && !this._changingStep) {
                        this.prevStep();
                    }
                    break;
                case "q":
                    if (this.visibleTooltip) {
                        this.toggleTooltip(false);
                        this.showTooltipButton();
                    }
                    else {
                        this.toggleTooltip(true, true);
                    }
                    break;
                case "r":
                    this.startTour();
                    break;
            }
        }
    }
    // VERBALS
    /**
     * @description Helper method that sets the tooltip content while parsing html entities
     * @param {ITooltipContent} content - The content to be set
     * @private
     */
    _setTooltipContent(content) {
        this.tooltipContent.title = _services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"].decodeHtml(content.title);
        this.tooltipContent.text = _services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"].decodeHtml(content.text);
    }
    /**
     * @description Sets the title, text, and mongoId of the indicated step and recalculates tooltipPosition relative to it
     * @param {ITourGuideStep} step     - The step to set the content of
     * @param {ITooltipContent} content - The content to be set
     * @private
     */
    _updateStepVerbal(step, content) {
        step.title = _services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"].decodeHtml(content.title);
        step.text = _services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"].decodeHtml(content.text);
        step._mongoId = content._mongoId;
        this._setTooltipContent(content);
        if (this.visibleTooltip) {
            this.toggleTooltip(false);
            setTimeout(() => {
                this.toggleTooltip(true, true);
            });
        }
    }
}
TourGuideComponent.ɵfac = function TourGuideComponent_Factory(t) { return new (t || TourGuideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_8__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
TourGuideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TourGuideComponent, selectors: [["app-tour-guide"]], viewQuery: function TourGuideComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.highlighted = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.progress = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tooltipShow = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.shortcutModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tooltip = _t);
    } }, inputs: { steps: "steps", canEditSteps: "canEditSteps", hasBackdrop: "hasBackdrop", canSkipSteps: "canSkipSteps", canEndTour: "canEndTour", canEndFromBackdrop: "canEndFromBackdrop", hasProgressBar: "hasProgressBar", showDev: "showDev", prevPageUrl: "prevPageUrl", prevPageTitle: "prevPageTitle", nextPageUrl: "nextPageUrl", nextPageTitle: "nextPageTitle" }, outputs: { tourStarted: "tourStarted", tourEnded: "tourEnded", pageChange: "pageChange" }, decls: 41, vars: 3, consts: [[4, "ngIf"], ["class", "tour-guide-dev p-2 rounded", 4, "ngIf"], ["headerTitle", "Tour Guide shortcuts", 1, "tour-guide-shortcuts", 3, "hasFooter"], ["shortcutsModal", ""], ["body", ""], ["class", "tour-guide-backdrop", 3, "click", 4, "ngIf"], [1, "d-inline-block", "tour-guide-show-tooltip", "m-1"], ["tooltipShow", ""], ["action", "view", "displayName", "", "icon", "la-comment", "title", "Show instructions", 3, "btnClick", 4, "ngIf"], ["action", "view", "displayName", "", "icon", "la-keyboard", "title", "Shortcuts", 1, "tour-guide-shortcuts", 3, "btnClick"], [1, "tour-guide-highlight-bg", 3, "hidden"], ["highlighted", ""], ["class", "tour-guide-tooltip container-fluid", 3, "border", 4, "ngIf"], [1, "tour-guide-backdrop", 3, "click"], ["action", "view", "displayName", "", "icon", "la-comment", "title", "Show instructions", 3, "btnClick"], [1, "tour-guide-tooltip", "container-fluid"], ["tooltip", ""], [1, "row", "border-bottom", "py-3"], [1, "col-12"], [1, "font-weight-bold", "m-0"], [3, "innerHTML"], ["title", "Hide instructions", 1, "float-right", "la", "la-minus", "font-weight-bold", "cursor-pointer", 3, "click"], [1, "row"], [1, "col", "mx-2", "py-2", "tour-guide-text"], [1, "row", "text-center", "border-top", "pt-2"], [1, "col-1", "p-0", "pl-2"], ["class", "la la-chevron-left pointer font-weight-bold text-secondary page-nav", 3, "title", "click", 4, "ngIf"], [1, "col", "text-center"], [3, "class", "click", 4, "ngFor", "ngForOf"], [1, "col-1", "p-0", "pr-2"], ["class", "la la-chevron-right pointer font-weight-bold text-secondary page-nav", 3, "title", "click", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "col", "text-right", "p-2"], ["color", "success", "icon", "la-check", "displayName", "", "tooltip", "Finish tour", 3, "class", "btnClick", 4, "ngIf"], ["color", "primary", "icon", "la-sync", "displayName", "", "tooltip", "Restart tour", 3, "btnClick"], ["action", "prev", "displayName", "", 3, "title", "hidden", "btnClick"], ["action", "next", 3, "title", "hidden", "btnClick"], [1, "la", "la-chevron-left", "pointer", "font-weight-bold", "text-secondary", "page-nav", 3, "title", "click"], [3, "click"], [1, "la", "la-chevron-right", "pointer", "font-weight-bold", "text-secondary", "page-nav", 3, "title", "click"], [1, "col-1"], [1, "progress", "tour-guide-progress", "col", "p-0", "mt-2"], ["role", "progressbar", 1, "progress-bar", "progress-fill"], ["progress", ""], ["color", "success", "icon", "la-check", "displayName", "", "tooltip", "Finish tour", 3, "btnClick"], [1, "tour-guide-dev", "p-2", "rounded"], [1, "pointer", 3, "click"], [1, "la", 3, "ngClass"]], template: function TourGuideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TourGuideComponent_ng_container_0_Template, 9, 4, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TourGuideComponent_ul_1_Template, 19, 6, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-modal", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Tab / Ctrl + right arrow:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Next step");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Shift + Tab / Ctrl + left arrow:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Previous step");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Ctrl + q:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Hide / show step tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Ctrl + r:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Restart tour");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Escape:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "End tour (only if the green check button is visible)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOngoing);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOngoing && ctx.isDevMode && ctx.showDev);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hasFooter", false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_11__["ModalComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_12__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"]], styles: [".tour-guide-dev[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 10px;\n  z-index: 999;\n  color: white;\n  transition: all 200ms linear;\n}\n.tour-guide-dev[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover {\n  background: black;\n  color: white;\n}\n.tour-guide-dev[_ngcontent-%COMP%]:hover {\n  background: whitesmoke;\n  color: black;\n}\n.tour-guide-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 995;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  overflow-scrolling: auto;\n}\n.tour-guide-highlight-bg[_ngcontent-%COMP%] {\n  z-index: 995;\n  background: white;\n  position: fixed;\n  transition: all 300ms ease;\n  border-radius: 5px;\n  box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.2);\n}\n.tour-guide-shortcuts[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 999;\n  top: 10px;\n  right: 10px;\n}\n.tour-guide-shortcuts-modal[_ngcontent-%COMP%]  .app-modal-wrapper {\n  z-index: 999;\n}\n.tour-guide-show-tooltip[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 996;\n  top: 50%;\n  right: 50%;\n}\n.tour-guide-step[_ngcontent-%COMP%] {\n  background: #c1c1c1;\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background 200ms ease;\n}\n.tour-guide-step[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);\n}\n.tour-guide-step.no-skip[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.tour-guide-step.no-skip[_ngcontent-%COMP%]:hover {\n  box-shadow: none;\n}\n.tour-guide-tooltip[_ngcontent-%COMP%] {\n  z-index: 998;\n  min-width: 300px;\n  max-width: 500px;\n  background: white;\n  position: fixed;\n  top: calc(50% - 100px);\n  left: calc(50% - 300px);\n  border-radius: 5px;\n}\n.tour-guide-tooltip.border[_ngcontent-%COMP%] {\n  border: 1px solid #FF343A40;\n}\n.tour-guide-tooltip[_ngcontent-%COMP%]   .page-nav[_ngcontent-%COMP%] {\n  transition: all 100ms ease;\n}\n.tour-guide-tooltip[_ngcontent-%COMP%]   .page-nav[_ngcontent-%COMP%]:hover {\n  transform: scale(1.5);\n}\n.tour-guide-tooltip[_ngcontent-%COMP%]   .tour-guide-text[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  overflow-x: hidden;\n  white-space: pre-line;\n  min-height: 50px;\n  max-height: 200px;\n}\n.tour-guide-tooltip[_ngcontent-%COMP%]   .tour-guide-edit[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -15px;\n  left: -15px;\n  opacity: 0.5;\n  transition: opacity 100ms ease;\n}\n.tour-guide-tooltip[_ngcontent-%COMP%]   .tour-guide-edit[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.tour-guide-tooltip.edit-bottom[_ngcontent-%COMP%]   .tour-guide-edit[_ngcontent-%COMP%] {\n  top: calc(100% - 15px);\n}\n.tour-guide-tooltip.edit-right[_ngcontent-%COMP%]   .tour-guide-edit[_ngcontent-%COMP%] {\n  left: calc(100% - 15px);\n}\n.tour-guide-tooltip.triangle-bottom.border[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  border-left: 11px solid transparent;\n  border-right: 11px solid transparent;\n  border-top: 11px solid #FF343A40;\n  border-bottom: 11px solid transparent;\n  right: 50%;\n  bottom: -22px;\n}\n.tour-guide-tooltip.triangle-bottom[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  border-left: 11px solid transparent;\n  border-right: 11px solid transparent;\n  border-top: 11px solid white;\n  border-bottom: 11px solid transparent;\n  right: 50%;\n  bottom: -20px;\n}\n.tour-guide-tooltip.triangle-top.border[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  border-left: 11px solid transparent;\n  border-right: 11px solid transparent;\n  border-top: 11px solid transparent;\n  border-bottom: 11px solid #FF343A40;\n  right: 50%;\n  top: -22px;\n}\n.tour-guide-tooltip.triangle-top[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  border-left: 11px solid transparent;\n  border-right: 11px solid transparent;\n  border-top: 11px solid transparent;\n  border-bottom: 11px solid white;\n  right: 50%;\n  top: -20px;\n}\n.tour-guide-tooltip.triangle-right.border[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  border-left: 11px solid #FF343A40;\n  border-right: 11px solid transparent;\n  border-top: 11px solid transparent;\n  border-bottom: 11px solid transparent;\n  top: 50%;\n  right: -22px;\n}\n.tour-guide-tooltip.triangle-right[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  border-left: 11px solid white;\n  border-right: 11px solid transparent;\n  border-top: 11px solid transparent;\n  border-bottom: 11px solid transparent;\n  top: 50%;\n  right: -20px;\n}\n.tour-guide-tooltip.triangle-left.border[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  border-left: 11px solid transparent;\n  border-right: 11px solid #FF343A40;\n  border-top: 11px solid transparent;\n  border-bottom: 11px solid transparent;\n  top: 50%;\n  left: -22px;\n}\n.tour-guide-tooltip.triangle-left[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  border-left: 11px solid transparent;\n  border-right: 11px solid white;\n  border-top: 11px solid transparent;\n  border-bottom: 11px solid transparent;\n  top: 50%;\n  left: -20px;\n}\n.tour-guide-tooltip.arrow-top[_ngcontent-%COMP%]:before {\n  top: 20% !important;\n}\n.tour-guide-tooltip.arrow-top[_ngcontent-%COMP%]:after {\n  top: 20% !important;\n}\n.tour-guide-tooltip.arrow-bottom[_ngcontent-%COMP%]:before {\n  top: 80% !important;\n}\n.tour-guide-tooltip.arrow-bottom[_ngcontent-%COMP%]:after {\n  top: 80% !important;\n}\n.tour-guide-tooltip.arrow-left[_ngcontent-%COMP%]:before {\n  right: 80% !important;\n}\n.tour-guide-tooltip.arrow-left[_ngcontent-%COMP%]:after {\n  right: 80% !important;\n}\n.tour-guide-tooltip.arrow-right[_ngcontent-%COMP%]:before {\n  right: 20% !important;\n}\n.tour-guide-tooltip.arrow-right[_ngcontent-%COMP%]:after {\n  right: 20% !important;\n}\n.tour-guide-progress[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 80%;\n}\n.tour-guide-progress[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  transition: width 500ms ease, background-color 1s linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b3VyLWd1aWRlL3RvdXItZ3VpZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FBQUo7QUFFSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQUFSO0FBR0k7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QUFEUjtBQUtBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtBQUZKO0FBS0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBRko7QUFLQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFGSjtBQU1RO0VBQ0ksWUFBQTtBQUhaO0FBT0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBSko7QUFPQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBSko7QUFNSTtFQUNJLDBDQUFBO0FBSlI7QUFPSTtFQUNJLGVBQUE7QUFMUjtBQU9RO0VBQ0ksZ0JBQUE7QUFMWjtBQVVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFQSjtBQVNJO0VBQ0ksMkJBQUE7QUFQUjtBQVVJO0VBQ0ksMEJBQUE7QUFSUjtBQVNRO0VBQ0kscUJBQUE7QUFQWjtBQVdJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVRSO0FBWUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBVlI7QUFZUTtFQUNJLFVBQUE7QUFWWjtBQWVRO0VBQ0ksc0JBQUE7QUFiWjtBQWtCUTtFQUNJLHVCQUFBO0FBaEJaO0FBd0JZO0VBQ0ksV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQ0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBdEJoQjtBQTBCUTtFQUNJLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQXhCWjtBQThCWTtFQUNJLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQTVCaEI7QUFnQ1E7RUFDSSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUE5Qlo7QUFvQ1k7RUFDSSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFsQ2hCO0FBc0NRO0VBQ0ksV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQ0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBcENaO0FBMENZO0VBQ0ksV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQ0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBeENoQjtBQTRDUTtFQUNJLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQTFDWjtBQWlEUTtFQUNJLG1CQUFBO0FBL0NaO0FBa0RRO0VBQ0ksbUJBQUE7QUFoRFo7QUFxRFE7RUFDSSxtQkFBQTtBQW5EWjtBQXNEUTtFQUNJLG1CQUFBO0FBcERaO0FBeURRO0VBQ0kscUJBQUE7QUF2RFo7QUEwRFE7RUFDSSxxQkFBQTtBQXhEWjtBQTZEUTtFQUNJLHFCQUFBO0FBM0RaO0FBOERRO0VBQ0kscUJBQUE7QUE1RFo7QUFpRUE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQTlESjtBQWdFSTtFQUNJLHdEQUFBO0FBOURSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b3VyLWd1aWRlL3RvdXItZ3VpZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50b3VyLWd1aWRlLWRldiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMTBweDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XG5cbiAgICA+IGxpOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbn1cblxuLnRvdXItZ3VpZGUtYmFja2Ryb3Age1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiA5OTU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBvdmVyZmxvdy1zY3JvbGxpbmc6IGF1dG87XG59XG5cbi50b3VyLWd1aWRlLWhpZ2hsaWdodC1iZyB7XG4gICAgei1pbmRleDogOTk1O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDhweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpXG59XG5cbi50b3VyLWd1aWRlLXNob3J0Y3V0cyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG59XG5cbi50b3VyLWd1aWRlLXNob3J0Y3V0cy1tb2RhbCB7XG4gICAgICAgICY6Om5nLWRlZXAgLmFwcC1tb2RhbC13cmFwcGVyIHtcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgfVxufVxuXG4udG91ci1ndWlkZS1zaG93LXRvb2x0aXAge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTY7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDUwJTtcbn1cblxuLnRvdXItZ3VpZGUtc3RlcCB7XG4gICAgYmFja2dyb3VuZDogI2MxYzFjMTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAyMDBtcyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB9XG5cbiAgICAmLm5vLXNraXAge1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udG91ci1ndWlkZS10b29sdGlwIHtcbiAgICB6LWluZGV4OiA5OTg7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IGNhbGMoNTAlIC0gMTAwcHgpO1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMzAwcHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgICYuYm9yZGVyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGMzQzQTQwO1xuICAgIH1cblxuICAgICYgLnBhZ2UtbmF2IHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2U7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiAudG91ci1ndWlkZS10ZXh0IHtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIH1cblxuICAgICYgLnRvdXItZ3VpZGUtZWRpdCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtMTVweDtcbiAgICAgICAgbGVmdDogLTE1cHg7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMDBtcyBlYXNlO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuZWRpdC1ib3R0b20ge1xuICAgICAgICAmIC50b3VyLWd1aWRlLWVkaXQge1xuICAgICAgICAgICAgdG9wOiBjYWxjKDEwMCUgLSAxNXB4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuZWRpdC1yaWdodCB7XG4gICAgICAgICYgLnRvdXItZ3VpZGUtZWRpdCB7XG4gICAgICAgICAgICBsZWZ0OiBjYWxjKDEwMCUgLSAxNXB4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRyaWFuZ2xlIGFycm93IG9yaWVudGF0aW9uXG5cbiAgICAmLnRyaWFuZ2xlLWJvdHRvbSB7XG4gICAgICAgICYuYm9yZGVyIHtcbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDExcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDExcHggc29saWQgI0ZGMzQzQTQwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDExcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDUwJTtcbiAgICAgICAgICAgICAgICBib3R0b206IC0yMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMTFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMTFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDExcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgcmlnaHQ6IDUwJTtcbiAgICAgICAgICAgIGJvdHRvbTogLTIwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLnRyaWFuZ2xlLXRvcCB7XG4gICAgICAgICYuYm9yZGVyIHtcbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDExcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDExcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTFweCBzb2xpZCAjRkYzNDNBNDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDUwJTtcbiAgICAgICAgICAgICAgICB0b3A6IC0yMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMTFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMTFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDExcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDUwJTtcbiAgICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLnRyaWFuZ2xlLXJpZ2h0IHtcbiAgICAgICAgJi5ib3JkZXIge1xuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMTFweCBzb2xpZCAjRkYzNDNBNDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDExcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICByaWdodDogLTIycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMTFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDExcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHJpZ2h0OiAtMjBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYudHJpYW5nbGUtbGVmdCB7XG4gICAgICAgICYuYm9yZGVyIHtcbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDExcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxMXB4IHNvbGlkICNGRjM0M0E0MDtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDExcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgbGVmdDogLTIycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMTFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDExcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IC0yMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdHJpYW5nbGUgYXJyb3cgcG9zaXRpb25cblxuICAgICYuYXJyb3ctdG9wIHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgdG9wOiAyMCUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgdG9wOiAyMCUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuYXJyb3ctYm90dG9tIHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgdG9wOiA4MCUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgdG9wOiA4MCUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuYXJyb3ctbGVmdCB7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIHJpZ2h0OiA4MCUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgcmlnaHQ6IDgwJSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5hcnJvdy1yaWdodCB7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIHJpZ2h0OiAyMCUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgcmlnaHQ6IDIwJSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udG91ci1ndWlkZS1wcm9ncmVzcyB7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiA4MCU7XG5cbiAgICAmIC5wcm9ncmVzcy1maWxsIHtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggNTAwbXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAxcyBsaW5lYXI7XG4gICAgfVxufVxuIl19 */"], data: { animation: [
            _animations_enter_leave_animation__WEBPACK_IMPORTED_MODULE_3__["fade"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TourGuideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-tour-guide",
                templateUrl: "./tour-guide.component.html",
                animations: [
                    _animations_enter_leave_animation__WEBPACK_IMPORTED_MODULE_3__["fade"]
                ],
                styleUrls: ["./tour-guide.component.scss"]
            }]
    }], function () { return [{ type: _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_8__["NavigationService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }]; }, { steps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], canEditSteps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], canSkipSteps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], canEndTour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], canEndFromBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hasProgressBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showDev: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], prevPageUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], prevPageTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nextPageUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nextPageTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tourStarted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], tourEnded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], pageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: ["tooltip"]
        }], highlighted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["highlighted"]
        }], progress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["progress"]
        }], tooltipShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["tooltipShow"]
        }], shortcutModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["shortcutsModal"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/tour-guide/tour-guide.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/tour-guide/tour-guide.module.ts ***!
  \************************************************************/
/*! exports provided: TourGuideModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourGuideModule", function() { return TourGuideModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tour_guide_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tour-guide.component */ "./src/app/components/tour-guide/tour-guide.component.ts");
/* harmony import */ var _button_button_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/button.module */ "./src/app/components/button/button.module.ts");
/* harmony import */ var _directives_tour_guide_tour_guide_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/tour-guide/tour-guide.directive */ "./src/app/directives/tour-guide/tour-guide.directive.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal.module */ "./src/app/components/modal/modal.module.ts");







class TourGuideModule {
}
TourGuideModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TourGuideModule });
TourGuideModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TourGuideModule_Factory(t) { return new (t || TourGuideModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
            _modal_modal_module__WEBPACK_IMPORTED_MODULE_5__["ModalModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TourGuideModule, { declarations: [_tour_guide_component__WEBPACK_IMPORTED_MODULE_2__["TourGuideComponent"],
        _directives_tour_guide_tour_guide_directive__WEBPACK_IMPORTED_MODULE_4__["TourGuideDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
        _modal_modal_module__WEBPACK_IMPORTED_MODULE_5__["ModalModule"]], exports: [_tour_guide_component__WEBPACK_IMPORTED_MODULE_2__["TourGuideComponent"],
        _directives_tour_guide_tour_guide_directive__WEBPACK_IMPORTED_MODULE_4__["TourGuideDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TourGuideModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _tour_guide_component__WEBPACK_IMPORTED_MODULE_2__["TourGuideComponent"],
                    _directives_tour_guide_tour_guide_directive__WEBPACK_IMPORTED_MODULE_4__["TourGuideDirective"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
                    _modal_modal_module__WEBPACK_IMPORTED_MODULE_5__["ModalModule"],
                ],
                declarations: [
                    _tour_guide_component__WEBPACK_IMPORTED_MODULE_2__["TourGuideComponent"],
                    _directives_tour_guide_tour_guide_directive__WEBPACK_IMPORTED_MODULE_4__["TourGuideDirective"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/widgets/todo-list/todo-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/widgets/todo-list/todo-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var muuri__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! muuri */ "./node_modules/muuri/dist/muuri.js");
/* harmony import */ var muuri__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(muuri__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _animations_emerge_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../animations/emerge.animation */ "./src/app/animations/emerge.animation.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = ["todoList"];
function TodoListComponent_div_6_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_div_6_div_9_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const task_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.currentComment = task_r2.comment; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TodoListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "12:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TodoListComponent_div_6_div_9_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", task_r2.name.length > ctx_r1.NORMAL_LENGTH ? task_r2.name : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", task_r2.name.slice(0, ctx_r1.NORMAL_LENGTH), " ", task_r2.name.length > ctx_r1.NORMAL_LENGTH ? "..." : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r2.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("la la-2x la-", task_r2.action == null ? null : task_r2.action.icon, " text-", task_r2.action == null ? null : task_r2.action.color, "");
} }
class TodoListComponent {
    constructor() {
        this.NORMAL_LENGTH = 25;
        this.tasks = [
            {
                time: "12:00",
                name: "Reply to messages",
                comment: null,
                action: {
                    icon: "play",
                    color: "success"
                }
            },
            {
                time: "15:00",
                name: "Check orders",
                comment: "test comment",
                action: {
                    icon: "play",
                    color: "success"
                }
            },
            {
                time: "17:10",
                name: "Clean house",
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" +
                    " standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to" +
                    " make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting," +
                    " remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem" +
                    " Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem" +
                    " Ipsum.",
                action: {
                    icon: "pause",
                    color: "danger"
                }
            }
        ];
    }
    ngAfterViewInit() {
        this._todo = new muuri__WEBPACK_IMPORTED_MODULE_1__(this.todoList.nativeElement, {
            items: '.todo-item',
            layoutEasing: 'ease',
            dragEnabled: true,
            dragSortInterval: 0,
            dragReleaseEasing: 'ease'
        }).on('dragStart', (item) => {
            item.getElement().style.width = item.getWidth() + 'px';
            item.getElement().style.height = item.getHeight() + 'px';
        }).on('dragReleaseEnd', (item) => {
            item.getElement().style.width = '';
            item.getElement().style.height = '';
        });
    }
}
TodoListComponent.ɵfac = function TodoListComponent_Factory(t) { return new (t || TodoListComponent)(); };
TodoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoListComponent, selectors: [["app-todo-list"]], viewQuery: function TodoListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.todoList = _t.first);
    } }, decls: 18, vars: 3, consts: [[1, "todo-header", "text-white", "text-center", "bg-success", "w-100", "position-relative", "py-2"], [1, "la", "la-cogs", "pull-right", "la-2x", "mx-2"], [1, "d-inline"], [1, "todo-list", "w-100", "bg-light", "px-2"], ["todoList", ""], ["class", "todo-item", 4, "ngFor", "ngForOf"], [1, "bg-secondary", "h-100", "comment-bubble"], [1, "row", "p-0", "m-0"], [1, "col-10", "px-3", "py-1", "text-white"], [1, "col-2", "py-1", "text-white"], [1, "la", "la-times", "la-2x", "pointer", "pull-right", 3, "click"], [1, "row", "px-4"], [1, "col-12", "p-3", "m-1", "bg-light", "border-radius", "comment-body"], [1, "todo-item"], [1, "todo-item-content"], [1, "row"], [1, "col"], [3, "title"], [4, "ngIf"], [1, "col", "text-right", "font-weight-bold"], [1, "la", "la-comments", "pointer", 3, "click"]], template: function TodoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Today's Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TodoListComponent_div_6_Template, 12, 8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_Template_i_click_13_listener() { return ctx.currentComment = null; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideRight", (ctx.currentComment == null ? null : ctx.currentComment.length) ? "visible" : "invisible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentComment);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".todo-list[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-y: auto;\n  height: calc(100% - 50px) !important;\n  overflow-x: hidden;\n  border-radius: 0 0 5px 5px;\n}\n\n.todo-header[_ngcontent-%COMP%] {\n  height: 50px;\n  border-radius: 5px 5px 0 0;\n}\n\n.todo-item[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  margin: 2px 0;\n  padding: 3px;\n}\n\n.todo-item.muuri-item-dragging[_ngcontent-%COMP%] {\n  z-index: 3;\n}\n\n.todo-item.muuri-item-releasing[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n\n.todo-item.muuri-item-hidden[_ngcontent-%COMP%] {\n  z-index: 0;\n}\n\n.todo-item-content[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 4px;\n  cursor: move;\n  padding: 5px;\n  background-color: white;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);\n}\n\n.comment-bubble[_ngcontent-%COMP%] {\n  z-index: 10;\n  overflow: hidden;\n}\n\n.comment-bubble[_ngcontent-%COMP%]   .comment-body[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aWRnZXRzL3RvZG8tbGlzdC90b2RvLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsMEJBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREE7RUFDSSxVQUFBO0FBSUo7O0FBRkE7RUFDSSxVQUFBO0FBS0o7O0FBSEE7RUFDSSxVQUFBO0FBTUo7O0FBSkE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUVBLDBDQUFBO0FBT0o7O0FBSkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFPSjs7QUFOSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFRUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0cy90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZG8tbGlzdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KSFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xufVxuLnRvZG8taGVhZGVyIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG59XG4udG9kby1pdGVtIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAycHggMDtcbiAgICBwYWRkaW5nOiAzcHg7XG59XG4udG9kby1pdGVtLm11dXJpLWl0ZW0tZHJhZ2dpbmcge1xuICAgIHotaW5kZXg6IDM7XG59XG4udG9kby1pdGVtLm11dXJpLWl0ZW0tcmVsZWFzaW5nIHtcbiAgICB6LWluZGV4OiAyO1xufVxuLnRvZG8taXRlbS5tdXVyaS1pdGVtLWhpZGRlbiB7XG4gICAgei1pbmRleDogMDtcbn1cbi50b2RvLWl0ZW0tY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IG1vdmU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsMC4yKTtcbn1cblxuLmNvbW1lbnQtYnViYmxlIHtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICYgLmNvbW1lbnQtYm9keSB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIH1cbn1cbiJdfQ== */"], data: { animation: [
            _animations_emerge_animation__WEBPACK_IMPORTED_MODULE_2__["slideRight"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-list',
                templateUrl: './todo-list.component.html',
                styleUrls: ['./todo-list.component.scss'],
                animations: [
                    _animations_emerge_animation__WEBPACK_IMPORTED_MODULE_2__["slideRight"]
                ]
            }]
    }], function () { return []; }, { todoList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["todoList", { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/widgets/todo-list/todo-list.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/widgets/todo-list/todo-list.module.ts ***!
  \******************************************************************/
/*! exports provided: TodoListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListModule", function() { return TodoListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _todo_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-list.component */ "./src/app/components/widgets/todo-list/todo-list.component.ts");




class TodoListModule {
}
TodoListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TodoListModule });
TodoListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TodoListModule_Factory(t) { return new (t || TodoListModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TodoListModule, { declarations: [_todo_list_component__WEBPACK_IMPORTED_MODULE_2__["TodoListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_todo_list_component__WEBPACK_IMPORTED_MODULE_2__["TodoListComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/widgets/url-shortcut/url-shortcut.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/widgets/url-shortcut/url-shortcut.component.ts ***!
  \***************************************************************************/
/*! exports provided: UrlShortcutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlShortcutComponent", function() { return UrlShortcutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _interfaces_Generics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../interfaces/Generics */ "./src/app/interfaces/Generics.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../loader/loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../button/button.component */ "./src/app/components/button/button.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modal/modal.component */ "./src/app/components/modal/modal.component.ts");












const _c0 = ["editModal"];
function UrlShortcutComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("form-check-input bg-", color_r3.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", color_r3.value)("name", "color")("id", color_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](color_r3.label);
} }
function UrlShortcutComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const size_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", size_r4.value)("name", "size")("id", size_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](size_r4.label);
} }
const _c1 = function () { return { value: "widget-sm", label: "Small" }; };
const _c2 = function () { return { value: "", label: "Big" }; };
const _c3 = function (a0, a1) { return [a0, a1]; };
class UrlShortcutComponent {
    constructor(renderer, fb, router, location, cd, appComponent) {
        this.renderer = renderer;
        this.fb = fb;
        this.router = router;
        this.location = location;
        this.cd = cd;
        this.appComponent = appComponent;
        this.size = "";
        this.navigationUrl = "";
        this.modifyWidgetData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeUrl = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loading = false;
        this.ellipsisColor = null;
        this.radioColors = [] = _interfaces_Generics__WEBPACK_IMPORTED_MODULE_2__["RADIO_COLORS"];
        this.serializer = new CustomUrlSerializer();
    }
    ngOnInit() {
        this.ellipsisColor = this._setEllipsisColor(this.color);
        this.form = this.fb.group({
            displayName: this.displayName,
            icon: this.icon,
            size: this.size,
            color: this.color,
            navigationUrl: unescape(this.navigationUrl) === "undefined" ? null : unescape(this.navigationUrl)
        });
        this.cd.detectChanges();
    }
    ngAfterViewInit() {
        this.renderer.appendChild(document.body, this.editModal.nativeElement);
    }
    ngOnDestroy() {
        this.renderer.removeChild(document.body, this.editModal.nativeElement);
    }
    /**
     * @description Parses the navigationUrl and redirects to it
     * @param {boolean} newTab  - Whether to open the link in a new tab
     */
    navigate(newTab = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.navigationUrl) {
                let url = this.navigationUrl.split("/").filter(str => str.length);
                if ([escape("http:"), escape("https:")].includes(url[0])) {
                    url.splice(0, 2);
                }
                this.loading = true;
                this.changeUrl.emit(url.join("/"));
                let parsed = this.serializer.parse(url.join("/"));
                if (newTab) {
                    yield this.router.navigate([]).then(() => window.open(this.location.prepareExternalUrl(this.serializer.serialize(parsed)), "_blank"));
                }
                else {
                    yield this.router.navigateByUrl(parsed);
                }
                this.loading = false;
            }
        });
    }
    /**
     * @description Propagates the widget"s data and options to the main grid to save them to the DB
     */
    editSave() {
        let data = this.form.value;
        this.displayName = data.displayName || this.displayName;
        this.icon = data.icon || this.icon;
        this.color = data.color || this.color;
        this.size = data.size !== null ? data.size : this.size;
        this.navigationUrl = escape(data.navigationUrl || this.navigationUrl);
        this.modifyWidgetData.emit({
            overwrite: true,
            data: {
                displayName: this.displayName,
                icon: this.icon,
                color: this.color,
                size: this.size,
                navigationUrl: this.navigationUrl
            },
            options: {
                class: this.size
            }
        });
    }
    /**
     * @description Sets the text color of the ellipsis icon
     * @param {Colors} color    - The color to be set
     * @private
     */
    _setEllipsisColor(color) {
        switch (color) {
            case "danger":
            case "info":
            case "primary":
            case "success":
            case "dark":
            case "secondary":
                return "text-white";
            case "light":
            case "warning":
                return "text-black";
        }
    }
}
UrlShortcutComponent.ɵfac = function UrlShortcutComponent_Factory(t) { return new (t || UrlShortcutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"])); };
UrlShortcutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UrlShortcutComponent, selectors: [["app-url-shortcut"]], viewQuery: function UrlShortcutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.editModal = _t.first);
    } }, inputs: { displayName: "displayName", icon: "icon", size: "size", color: "color", navigationUrl: "navigationUrl" }, outputs: { modifyWidgetData: "modifyWidgetData", changeUrl: "changeUrl" }, decls: 41, vars: 17, consts: [[3, "click", "auxclick"], ["type", "square-loader", 3, "loading"], ["icon", "la-ellipsis-v", "displayName", "", 1, "edit-btn", 3, "ngClass", "btnClick"], ["headerTitle", "Edit Shortcut"], ["editModal", ""], ["body", "", 3, "formGroup"], [1, "row", "form-group"], [1, "col-sm-3"], ["for", "displayName", 1, "col-form-label"], [1, "col-sm-6", "input-group"], ["id", "displayName", "formControlName", "displayName", 1, "form-control"], [1, "row", "form-group", "pb-4", "border-bottom"], ["for", "navigationUrl", 1, "col-form-label"], ["id", "navigationUrl", "formControlName", "navigationUrl", "placeholder", "e.g.: http://localhost:4200/orders", 1, "form-control"], ["for", "icon", 1, "col-form-label"], ["id", "icon", "formControlName", "icon", "placeholder", "Line-awesome icon (e.g. 'la-eye')", 1, "form-control"], [1, "col-form-label"], [1, "col-sm"], ["class", "form-check form-check-inline mr-4", 4, "ngFor", "ngForOf"], ["footer", ""], [1, "col", "text-right"], ["action", "save", 3, "btnClick"], [1, "form-check", "form-check-inline", "mr-4"], ["type", "radio", "formControlName", "color", 3, "value", "name", "id"], [1, "form-check-label"], ["type", "radio", "formControlName", "size", 1, "form-check-input", 3, "value", "name", "id"]], template: function UrlShortcutComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UrlShortcutComponent_Template_button_click_0_listener($event) { return ctx.navigate($event.ctrlKey); })("auxclick", function UrlShortcutComponent_Template_button_auxclick_0_listener() { return ctx.navigate(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-loader", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("btnClick", function UrlShortcutComponent_Template_app_button_btnClick_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r0.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-modal", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Shortcut name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Shortcut url");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Shortcut icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Shortcut color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, UrlShortcutComponent_div_31_Template, 4, 7, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Shortcut size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, UrlShortcutComponent_div_37_Template, 4, 4, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](38, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "app-button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("btnClick", function UrlShortcutComponent_Template_app_button_btnClick_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); ctx.editSave(); return _r0.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("btn btn-block btn-", ctx.color || "light", " h-100");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("la ", ctx.icon || "la-keyboard", " mr-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.displayName || "Custom shortcut", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.ellipsisColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.radioColors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](14, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c2)));
    } }, directives: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_8__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"]], styles: [".edit-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0;\n}\n.edit-btn.text-white[_ngcontent-%COMP%]     i {\n  color: white;\n  font-weight: bold;\n}\n.edit-btn.text-black[_ngcontent-%COMP%]     i {\n  color: black;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aWRnZXRzL3VybC1zaG9ydGN1dC91cmwtc2hvcnRjdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUFKO0FBSVk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFGaEI7QUFTWTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQVBoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0cy91cmwtc2hvcnRjdXQvdXJsLXNob3J0Y3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZWRpdC1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZzogMDtcblxuICAgICYudGV4dC13aGl0ZSB7XG4gICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLnRleHQtYmxhY2sge1xuICAgICAgICA6Om5nLWRlZXAge1xuICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UrlShortcutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-url-shortcut",
                templateUrl: "./url-shortcut.component.html",
                styleUrls: ["./url-shortcut.component.scss"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] }]; }, { displayName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], navigationUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], modifyWidgetData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], changeUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], editModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["editModal", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]
        }] }); })();
class CustomUrlSerializer {
    parse(url) {
        const dus = new _angular_router__WEBPACK_IMPORTED_MODULE_3__["DefaultUrlSerializer"]();
        return dus.parse(unescape(url.toLowerCase()));
    }
    serialize(tree) {
        const dus = new _angular_router__WEBPACK_IMPORTED_MODULE_3__["DefaultUrlSerializer"]();
        return dus.serialize(tree);
    }
}


/***/ }),

/***/ "./src/app/components/widgets/url-shortcut/url-shortcut.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/widgets/url-shortcut/url-shortcut.module.ts ***!
  \************************************************************************/
/*! exports provided: UrlShortcutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlShortcutModule", function() { return UrlShortcutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _url_shortcut_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./url-shortcut.component */ "./src/app/components/widgets/url-shortcut/url-shortcut.component.ts");
/* harmony import */ var _button_button_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../button/button.module */ "./src/app/components/button/button.module.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modal/modal.module */ "./src/app/components/modal/modal.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _loader_loader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../loader/loader.module */ "./src/app/components/loader/loader.module.ts");








class UrlShortcutModule {
}
UrlShortcutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UrlShortcutModule });
UrlShortcutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UrlShortcutModule_Factory(t) { return new (t || UrlShortcutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
            _modal_modal_module__WEBPACK_IMPORTED_MODULE_4__["ModalModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UrlShortcutModule, { declarations: [_url_shortcut_component__WEBPACK_IMPORTED_MODULE_2__["UrlShortcutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
        _modal_modal_module__WEBPACK_IMPORTED_MODULE_4__["ModalModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"]], exports: [_url_shortcut_component__WEBPACK_IMPORTED_MODULE_2__["UrlShortcutComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UrlShortcutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_url_shortcut_component__WEBPACK_IMPORTED_MODULE_2__["UrlShortcutComponent"]],
                exports: [_url_shortcut_component__WEBPACK_IMPORTED_MODULE_2__["UrlShortcutComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
                    _modal_modal_module__WEBPACK_IMPORTED_MODULE_4__["ModalModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/directives/tour-guide/tour-guide.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/directives/tour-guide/tour-guide.directive.ts ***!
  \***************************************************************/
/*! exports provided: TourGuideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourGuideDirective", function() { return TourGuideDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _interfaces_ITourGuide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interfaces/ITourGuide */ "./src/app/interfaces/ITourGuide.ts");



class TourGuideDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngAfterViewInit() {
        let id = this.el.nativeElement.id || this.el.nativeElement["ng-reflect-id"];
        this.renderer.setAttribute(this.el.nativeElement, _interfaces_ITourGuide__WEBPACK_IMPORTED_MODULE_1__["TOUR_GUIDE_ATTR"], id);
    }
}
TourGuideDirective.ɵfac = function TourGuideDirective_Factory(t) { return new (t || TourGuideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
TourGuideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TourGuideDirective, selectors: [["", "tourGuide", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TourGuideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[tourGuide]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();


/***/ }),

/***/ "./src/app/interfaces/Generics.ts":
/*!****************************************!*\
  !*** ./src/app/interfaces/Generics.ts ***!
  \****************************************/
/*! exports provided: RADIO_COLORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RADIO_COLORS", function() { return RADIO_COLORS; });
const RADIO_COLORS = [
    { value: "secondary", label: "Gray" },
    { value: "danger", label: "Red" },
    { value: "success", label: "Green" },
    { value: "primary", label: "Blue" },
    { value: "warning", label: "Yellow" },
    { value: "info", label: "Cyan" },
];


/***/ }),

/***/ "./src/app/interfaces/ITourGuide.ts":
/*!******************************************!*\
  !*** ./src/app/interfaces/ITourGuide.ts ***!
  \******************************************/
/*! exports provided: TOUR_GUIDE_ATTR, TOUR_GUIDE_VERBAL_TYPE, TOOLTIP_MARGIN, TOOLTIP_DB_ERROR, POSSIBLE_TOOLTIP_POSITIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOUR_GUIDE_ATTR", function() { return TOUR_GUIDE_ATTR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOUR_GUIDE_VERBAL_TYPE", function() { return TOUR_GUIDE_VERBAL_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLTIP_MARGIN", function() { return TOOLTIP_MARGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLTIP_DB_ERROR", function() { return TOOLTIP_DB_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSSIBLE_TOOLTIP_POSITIONS", function() { return POSSIBLE_TOOLTIP_POSITIONS; });
const TOUR_GUIDE_ATTR = "tourguide";
const TOUR_GUIDE_VERBAL_TYPE = "tourGuide";
const TOOLTIP_MARGIN = 20;
const TOOLTIP_DB_ERROR = {
    title: "No step data.",
    text: "The 'dbId' of this step was not found in the Database. Maybe it was changed or not yet set? " +
        "If you had set this step's data before please notify a developer.",
    _mongoId: null
};
const POSSIBLE_TOOLTIP_POSITIONS = [
    "top",
    "right",
    "bottom",
    "left"
];


/***/ }),

/***/ "./src/app/pages/grid-view/grid-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/grid-view/grid-view.component.ts ***!
  \********************************************************/
/*! exports provided: GridViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridViewComponent", function() { return GridViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/grid/grid.component */ "./src/app/components/grid/grid.component.ts");
/* harmony import */ var _components_tour_guide_tour_guide_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/tour-guide/tour-guide.component */ "./src/app/components/tour-guide/tour-guide.component.ts");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/button/button.component */ "./src/app/components/button/button.component.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");






const _c0 = ["grid"];
const _c1 = ["guide"];
class GridViewComponent {
    constructor() {
        this.tourGuideSteps = [];
        this.canEditSteps = true;
    }
    startTour() {
        this.tourSteps();
        setTimeout(() => {
            this.guide.startTour();
        });
    }
    tourSteps() {
        this.tourGuideSteps = [
            {
                title: "Grid setup",
                text: "A step by step guide on how to use the grid and add widgets."
            },
            {
                id: "gear-button",
                title: "Show settings",
                text: "This button toggles the edit view of the grid, showing the relevant options and the drag area where widgets are placed. (The button is disabled while the tour is on. Please go to the next step)",
                disabledStep: true,
                onBefore: () => {
                    this.grid.editLayout(false, false);
                }
            },
            {
                id: "grid-add-widget",
                title: "Adding a widget",
                text: "Here exist all the available widgets one can add to the grid. Using those you can create a dynamic dashboard unique to you.",
                disabledStep: true,
                onBefore: () => {
                    this.grid.editLayout(true, false);
                }
            },
            {
                id: "grid-available-widgets",
                title: "Menu widget",
                text: "Try dragging some widgets to the drag area! After that you can continue to the next step",
                onPrev: () => {
                    this.grid.hideAvailable();
                },
                onNext: () => {
                    this.grid.hideAvailable();
                },
                onBefore: () => {
                    this.grid.showAvailable();
                }
            },
            {
                id: "grid-main-template",
                title: "Drag area",
                text: "Here you can change the widget's positions by dragging and dropping, or delete them. See the shortcuts after the tour to get the basic idea."
            },
            {
                id: "recycle-bin",
                title: "Delete a widget",
                text: "Here you can drag widgets to delete them. Otherwise you can just click on the small bin icon on each widget or press Delete after selecting some widgets. Don't worry they are not permanently deleted until you save your changes.",
                onBefore: () => {
                    this.grid.editLayout(true, false);
                }
            },
            {
                id: "save-button",
                title: "Save changes",
                text: "After you finish, you can save your changes permanently. Otherwise you can press cancel to revert them.",
                disabledStep: true
            }
        ];
    }
    tourEnd() {
        this.grid.resetLayout();
    }
}
GridViewComponent.ɵfac = function GridViewComponent_Factory(t) { return new (t || GridViewComponent)(); };
GridViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridViewComponent, selectors: [["app-grid-view"]], viewQuery: function GridViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.guide = _t.first);
    } }, decls: 46, vars: 9, consts: [["grid", ""], [3, "steps", "showDev", "canEndFromBackdrop", "canEditSteps", "canSkipSteps", "canEndTour", "tourEnded"], ["guide", ""], [1, "help-container"], ["action", "help", 3, "btnClick"], ["action", "shortcuts", 3, "btnClick"], ["headerTitle", "Grid shortcuts", 3, "hasFooter"], ["shortcutsModal", ""], ["body", ""]], template: function GridViewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-grid", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-tour-guide", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tourEnded", function GridViewComponent_Template_app_tour_guide_tourEnded_2_listener() { return ctx.tourEnd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnClick", function GridViewComponent_Template_app_button_btnClick_5_listener() { return ctx.startTour(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnClick", function GridViewComponent_Template_app_button_btnClick_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r2.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-modal", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Double click on a widget:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Select widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Ctrl / Shift + click on a widget:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Mass select widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Ctrl + \u0391:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Select all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Del:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Delete selected widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "click + drag cursor:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Mass select widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("steps", ctx.tourGuideSteps)("showDev", false)("canEndFromBackdrop", true)("canEditSteps", ctx.canEditSteps)("canSkipSteps", false)("canEndTour", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("ml-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasFooter", false);
    } }, directives: [_components_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], _components_tour_guide_tour_guide_component__WEBPACK_IMPORTED_MODULE_2__["TourGuideComponent"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"]], styles: [".help-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 100px;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3JpZC12aWV3L2dyaWQtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ3JpZC12aWV3L2dyaWQtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWxwLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMDBweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid-view',
                templateUrl: './grid-view.component.html',
                styleUrls: ['./grid-view.component.scss']
            }]
    }], function () { return []; }, { grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["grid"]
        }], guide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["guide"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/grid-view/grid-view.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/grid-view/grid-view.module.ts ***!
  \*****************************************************/
/*! exports provided: GridViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridViewModule", function() { return GridViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _grid_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid-view.component */ "./src/app/pages/grid-view/grid-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_grid_grid_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/grid/grid.module */ "./src/app/components/grid/grid.module.ts");
/* harmony import */ var _components_tour_guide_tour_guide_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/tour-guide/tour-guide.module */ "./src/app/components/tour-guide/tour-guide.module.ts");
/* harmony import */ var _components_button_button_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/button/button.module */ "./src/app/components/button/button.module.ts");
/* harmony import */ var _components_modal_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/modal/modal.module */ "./src/app/components/modal/modal.module.ts");










const routes = [
    {
        path: "",
        component: _grid_view_component__WEBPACK_IMPORTED_MODULE_2__["GridViewComponent"]
    }
];
class GridViewModule {
}
GridViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GridViewModule });
GridViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GridViewModule_Factory(t) { return new (t || GridViewModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _components_grid_grid_module__WEBPACK_IMPORTED_MODULE_4__["GridModule"],
            _components_tour_guide_tour_guide_module__WEBPACK_IMPORTED_MODULE_5__["TourGuideModule"],
            _components_button_button_module__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
            _components_modal_modal_module__WEBPACK_IMPORTED_MODULE_7__["ModalModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GridViewModule, { declarations: [_grid_view_component__WEBPACK_IMPORTED_MODULE_2__["GridViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_grid_grid_module__WEBPACK_IMPORTED_MODULE_4__["GridModule"],
        _components_tour_guide_tour_guide_module__WEBPACK_IMPORTED_MODULE_5__["TourGuideModule"],
        _components_button_button_module__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
        _components_modal_modal_module__WEBPACK_IMPORTED_MODULE_7__["ModalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_grid_view_component__WEBPACK_IMPORTED_MODULE_2__["GridViewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _components_grid_grid_module__WEBPACK_IMPORTED_MODULE_4__["GridModule"],
                    _components_tour_guide_tour_guide_module__WEBPACK_IMPORTED_MODULE_5__["TourGuideModule"],
                    _components_button_button_module__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                    _components_modal_modal_module__WEBPACK_IMPORTED_MODULE_7__["ModalModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _animations_enter_leave_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animations/enter-leave.animation */ "./src/app/animations/enter-leave.animation.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");




class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 16, vars: 0, consts: [[1, "container-fluid"], [1, "row", "shadow", "border-radius", "table-dark"], [1, "col-3", "align-self-start", "p-3"], ["src", "assets/portrait.jpeg", 1, "border", "border-radius", "border-primary"], [1, "col", "align-self-center", "p-3"], [1, "font-weight-bold"], [1, "col-12", "text-right", "p-3"], ["href", "https://github.com/johnnyneverwalked", "ngbTooltip", "My github account", "target", "_blank"], [1, "la", "la-github", "la-3x"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hello there! I'm John. Nice to meet you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "I am a Full-Stack web developer based Greece, with a passion for games and game development. I mainly do stuff using the MEAN Stack, so here are some Angular components I have created over the years.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "I hope you find them useful or at least fun!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "You can use the menu on the left to get to the corresponding features. Happy browsing!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltip"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [
            _animations_enter_leave_animation__WEBPACK_IMPORTED_MODULE_1__["pulsate"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
                animations: [
                    _animations_enter_leave_animation__WEBPACK_IMPORTED_MODULE_1__["pulsate"]
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/button/button.component */ "./src/app/components/button/button.component.ts");



class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 6, vars: 1, consts: [[1, "row", "my-5"], [1, "col", "text-center"], [1, "font-weight-bold"], [1, "la", "mx-1", "la-frown"], ["color", "primary", "icon", "la-torii-gate", "displayName", "Home", 3, "href"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Error 404 - This url is not valid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "/home");
    } }, directives: [_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/tour-guide-view/tour-guide-view.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/tour-guide-view/tour-guide-view.component.ts ***!
  \********************************************************************/
/*! exports provided: TourGuideViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourGuideViewComponent", function() { return TourGuideViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _directives_tour_guide_tour_guide_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/tour-guide/tour-guide.directive */ "./src/app/directives/tour-guide/tour-guide.directive.ts");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/button/button.component */ "./src/app/components/button/button.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_tour_guide_tour_guide_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/tour-guide/tour-guide.component */ "./src/app/components/tour-guide/tour-guide.component.ts");






function TourGuideViewComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This is the 5th step ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TourGuideViewComponent {
    constructor() {
        this.showStep5 = false;
        this.tourSteps = [
            {
                title: "Tour Guide Demo",
                text: "This is a demo for the TourGuide Component. In dev mode you can change the inputs on the fly from the menu" +
                    " on the bottom right of the screen."
            },
            {
                id: "step2",
                title: "Navigation",
                text: "You can use the keyboard for step navigation (see shortcuts on the top right). " +
                    "You can also end the tour with ctrl+shift+esc regardless of the truthiness of the canEndTour input. Keep this a secret, shhh.",
                tooltipPosition: "right"
            },
            {
                id: "step3",
                title: "Dynamic text support",
                text: "Although it is not present in this demo, querying messages by using the dbId property, you can easily setup dynamic step contents from a database/API",
                dbId: "demo-readme-step3",
                tooltipPosition: "left"
            },
            {
                id: "step4",
                title: "Highlighted Step edit",
                text: "By adding the disabledStep property you can disable only the current step regardless of the canEditSteps input.",
                disabledStep: true,
                tooltipPosition: "left"
            },
            {
                id: "step5",
                title: "onNext(), onPrev(), onBefore() and onAfter()",
                text: "You can use methods to manage stuff like ngIf before or after getting to a step.",
                onNext: () => {
                    this.showStep5 = false;
                },
                onPrev: () => {
                    this.showStep5 = false;
                },
                onBefore: () => {
                    this.showStep5 = true;
                },
            },
            {
                id: "step6",
                title: "Tooltip position",
                text: "You can position the tooltip relative to the highlighted element. If it doesn't fit it will automatically orient itself " +
                    "to the first cardinal position where it fits (clockwise starting from the top).",
                tooltipPosition: "right"
            },
            {
                title: "No id FeelsBadMan :'(",
                text: "This appears in the center of the screen since it is not tied to an element.",
            },
            {
                id: "step8",
                title: "Events",
                text: "When the tour starts, ends or the page is changed, an event is emitted with relevant information of the TourGuide's " +
                    "state at the time. Also by adding the 'tourguide=true' param in the url for a page that contains a TourGuide component, the tour will start automatically." +
                    " This is very useful if you wish to link TourGuides in different pages together to form a big tour."
            },
            {
                id: "step9",
                title: "Demo end",
                text: " \"<i>People want guidance, not rhetoric. They need to know what the plan of action is, and how it will be implemented. They want to be given responsibility to help solve the problem and authority to act on it.</i>\" \n \n ~ Howard Schultz"
            }
        ];
    }
    doStuffOnTourEnd(evt) {
        // When the tour ends it fires an event with some info regarding its state at the time
        // Use this event to add logic to the end of the tour.
        console.log(evt);
        this.showStep5 = false;
    }
}
TourGuideViewComponent.ɵfac = function TourGuideViewComponent_Factory(t) { return new (t || TourGuideViewComponent)(); };
TourGuideViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TourGuideViewComponent, selectors: [["app-tour-guide-view"]], decls: 28, vars: 4, consts: [[1, "row", "mt-5", "pt-5"], [1, "col-6", "offset-3", "my-3", "text-center"], ["tourGuide", "", "id", "step6", 1, "d-inline-block"], ["tourGuide", "", "id", "step2"], ["tourGuide", "", "id", "step3"], ["type", "text", 1, "form-control"], ["tourGuide", "", "id", "step4"], ["action", "warning", "displayName", "Test button"], ["tourGuide", "", "class", "font-weight-bold", "id", "step5", 4, "ngIf"], ["tourGuide", "", "id", "step9"], ["tourGuide", "", "id", "step8"], [1, "col", "text-right"], ["action", "help", "displayName", "Start Tour!", 3, "btnClick"], [3, "steps", "canEndFromBackdrop", "hasProgressBar", "tourEnded"], ["guide", ""], ["tourGuide", "", "id", "step5", 1, "font-weight-bold"]], template: function TourGuideViewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " This is the 6th step ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " This is the 2nd step ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " This is the 3rd step ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " This is the 4th step ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TourGuideViewComponent_div_17_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " This is the 9th step ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " This is the 8th step ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "app-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnClick", function TourGuideViewComponent_Template_app_button_btnClick_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); return _r1.startTour(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "app-tour-guide", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tourEnded", function TourGuideViewComponent_Template_app_tour_guide_tourEnded_26_listener($event) { return ctx.doStuffOnTourEnd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showStep5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("steps", ctx.tourSteps)("canEndFromBackdrop", true)("hasProgressBar", true);
    } }, directives: [_directives_tour_guide_tour_guide_directive__WEBPACK_IMPORTED_MODULE_1__["TourGuideDirective"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_tour_guide_tour_guide_component__WEBPACK_IMPORTED_MODULE_4__["TourGuideComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RvdXItZ3VpZGUtdmlldy90b3VyLWd1aWRlLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TourGuideViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tour-guide-view',
                templateUrl: './tour-guide-view.component.html',
                styleUrls: ['./tour-guide-view.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/tour-guide-view/tour-guide-view.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/tour-guide-view/tour-guide-view.module.ts ***!
  \*****************************************************************/
/*! exports provided: TourGuideViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourGuideViewModule", function() { return TourGuideViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tour_guide_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tour-guide-view.component */ "./src/app/pages/tour-guide-view/tour-guide-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_button_button_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/button/button.module */ "./src/app/components/button/button.module.ts");
/* harmony import */ var _components_tour_guide_tour_guide_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/tour-guide/tour-guide.module */ "./src/app/components/tour-guide/tour-guide.module.ts");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/__ivy_ngcc__/fesm2015/nicky-lenaers-ngx-scroll-to.js");









const routes = [
    {
        path: "",
        component: _tour_guide_view_component__WEBPACK_IMPORTED_MODULE_2__["TourGuideViewComponent"]
    }
];
class TourGuideViewModule {
}
TourGuideViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TourGuideViewModule });
TourGuideViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TourGuideViewModule_Factory(t) { return new (t || TourGuideViewModule)(); }, providers: [_nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__["ScrollToService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _components_tour_guide_tour_guide_module__WEBPACK_IMPORTED_MODULE_5__["TourGuideModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _components_button_button_module__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"]
        ], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TourGuideViewModule, { declarations: [_tour_guide_view_component__WEBPACK_IMPORTED_MODULE_2__["TourGuideViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _components_tour_guide_tour_guide_module__WEBPACK_IMPORTED_MODULE_5__["TourGuideModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_button_button_module__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TourGuideViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_tour_guide_view_component__WEBPACK_IMPORTED_MODULE_2__["TourGuideViewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _components_tour_guide_tour_guide_module__WEBPACK_IMPORTED_MODULE_5__["TourGuideModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _components_button_button_module__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"]
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
                providers: [_nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__["ScrollToService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/helper.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/helper.service.ts ***!
  \********************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HelperService {
    constructor() {
    }
    /**
     * @description Decodes an html formatted string and returns a clean string
     * @param {string} html - The string with html entities
     * @return the decoded html string
     */
    static decodeHtml(html) {
        let txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }
    /**
     * @description Use await to delay the script execution by ms millis
     * @param ms    - The delay in milliseconds
     * @return An empty promise to use await on
     */
    static sleep(ms = 0) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
HelperService.ɵfac = function HelperService_Factory(t) { return new (t || HelperService)(); };
HelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HelperService, factory: HelperService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/navigation/navigation.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/navigation/navigation.service.ts ***!
  \***********************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/__ivy_ngcc__/fesm2015/nicky-lenaers-ngx-scroll-to.js");




class NavigationService {
    constructor(_scrollToService) {
        this._scrollToService = _scrollToService;
        this._unsub$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnDestroy() {
        this._unsub$.next();
    }
    /**
     * @param target
     * @description scrolls to the element with the given id
     */
    scrollToId(target) {
        const config = {
            target,
            duration: 500
        };
        return this._scrollToService.scrollTo(config);
    }
    /**
     * @param offset
     * @description scrolls to the given offset position
     */
    scrollToOffset(offset = 0) {
        const config = {
            offset,
            duration: 500
        };
        return this._scrollToService.scrollTo(config);
    }
    /**
     * @param options
     * @description calls scrollTo with the given options
     */
    scrollTo(options = null) {
        if (options) {
            return this._scrollToService.scrollTo(options);
        }
    }
    /**
     * @param tabs
     * @param activeTab
     * @description Given an array of tabs returns the next tab of the active one
     */
    pillsNavNext(tabs = [], activeTab) {
        let active = activeTab;
        let tab = tabs.findIndex(t => t.name === active);
        if (tab < tabs.length - 1 && tab !== -1) {
            active = tabs[tab + 1].name;
        }
        return active;
    }
    /**
     * @param tabs
     * @param activeTab
     * @description Given an array of tabs returns the previous tab of the active one
     */
    pillsNavPrevious(tabs = [], activeTab = "") {
        let active = activeTab;
        let tab = tabs.findIndex(t => t.name === active);
        if (tab > 0) {
            active = tabs[tab - 1].name;
        }
        return active;
    }
}
NavigationService.ɵfac = function NavigationService_Factory(t) { return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToService"])); };
NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavigationService, factory: NavigationService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/Desktop/stuff/angularthings/angular-things/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_review_service__ = __webpack_require__("../../../../../src/app/services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_gmaps_service__ = __webpack_require__("../../../../../src/app/services/gmaps.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_menu_menu_component__ = __webpack_require__("../../../../../src/app/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_menu_customer_menu_customer_menu_component__ = __webpack_require__("../../../../../src/app/components/menu/customer-menu/customer-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_menu_owner_menu_owner_menu_component__ = __webpack_require__("../../../../../src/app/components/menu/owner-menu/owner-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_menu_admin_menu_admin_menu_component__ = __webpack_require__("../../../../../src/app/components/menu/admin-menu/admin-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_admin_user_user_component__ = __webpack_require__("../../../../../src/app/components/admin/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_admin_property_property_component__ = __webpack_require__("../../../../../src/app/components/admin/property/property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_admin_review_review_component__ = __webpack_require__("../../../../../src/app/components/admin/review/review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_admin_user_details_details_component__ = __webpack_require__("../../../../../src/app/components/admin/user/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_admin_property_details_details_component__ = __webpack_require__("../../../../../src/app/components/admin/property/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_owner_client_client_component__ = __webpack_require__("../../../../../src/app/components/owner/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_owner_property_property_component__ = __webpack_require__("../../../../../src/app/components/owner/property/property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_owner_review_review_component__ = __webpack_require__("../../../../../src/app/components/owner/review/review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_customer_search_search_component__ = __webpack_require__("../../../../../src/app/components/customer/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_customer_list_list_component__ = __webpack_require__("../../../../../src/app/components/customer/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_customer_rentals_rentals_component__ = __webpack_require__("../../../../../src/app/components/customer/rentals/rentals.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_menu_customer_menu_customer_menu_component__["a" /* CustomerMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_menu_owner_menu_owner_menu_component__["a" /* OwnerMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_menu_admin_menu_admin_menu_component__["a" /* AdminMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_admin_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_admin_property_property_component__["a" /* PropertyComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_admin_review_review_component__["a" /* ReviewComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_admin_user_details_details_component__["a" /* UserDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_admin_property_details_details_component__["a" /* PropertyDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_owner_client_client_component__["a" /* ClientComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_owner_property_property_component__["a" /* OwnerPropertyComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_owner_review_review_component__["a" /* OwnerReviewComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_customer_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_customer_list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_customer_rentals_rentals_component__["a" /* RentalsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBID0s0Lauq-vzzH-V17TCKGaIi3Vd7UCY'
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_6__services_property_service__["a" /* PropertyService */], __WEBPACK_IMPORTED_MODULE_7__services_review_service__["a" /* ReviewService */], __WEBPACK_IMPORTED_MODULE_8__services_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_9__services_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_11__services_gmaps_service__["a" /* GMapsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_menu_menu_component__ = __webpack_require__("../../../../../src/app/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_admin_user_user_component__ = __webpack_require__("../../../../../src/app/components/admin/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_admin_property_property_component__ = __webpack_require__("../../../../../src/app/components/admin/property/property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_admin_review_review_component__ = __webpack_require__("../../../../../src/app/components/admin/review/review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_admin_user_details_details_component__ = __webpack_require__("../../../../../src/app/components/admin/user/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_admin_property_details_details_component__ = __webpack_require__("../../../../../src/app/components/admin/property/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_owner_client_client_component__ = __webpack_require__("../../../../../src/app/components/owner/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_owner_property_property_component__ = __webpack_require__("../../../../../src/app/components/owner/property/property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_owner_review_review_component__ = __webpack_require__("../../../../../src/app/components/owner/review/review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_customer_search_search_component__ = __webpack_require__("../../../../../src/app/components/customer/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_customer_list_list_component__ = __webpack_require__("../../../../../src/app/components/customer/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_customer_rentals_rentals_component__ = __webpack_require__("../../../../../src/app/components/customer/rentals/rentals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");


















// Import all other components here
var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'profile/menu', component: __WEBPACK_IMPORTED_MODULE_5__components_menu_menu_component__["a" /* MenuComponent */] },
    { path: 'admin/user', component: __WEBPACK_IMPORTED_MODULE_6__components_admin_user_user_component__["a" /* UserComponent */] },
    { path: 'admin/property', component: __WEBPACK_IMPORTED_MODULE_7__components_admin_property_property_component__["a" /* PropertyComponent */] },
    { path: 'admin/review', component: __WEBPACK_IMPORTED_MODULE_8__components_admin_review_review_component__["a" /* ReviewComponent */] },
    { path: 'admin/user/:userId', component: __WEBPACK_IMPORTED_MODULE_9__components_admin_user_details_details_component__["a" /* UserDetailsComponent */] },
    { path: 'admin/property/:propertyId', component: __WEBPACK_IMPORTED_MODULE_10__components_admin_property_details_details_component__["a" /* PropertyDetailsComponent */] },
    { path: 'owner/client', component: __WEBPACK_IMPORTED_MODULE_11__components_owner_client_client_component__["a" /* ClientComponent */] },
    { path: 'owner/client/:clientId', component: __WEBPACK_IMPORTED_MODULE_11__components_owner_client_client_component__["a" /* ClientComponent */] },
    { path: 'owner/property', component: __WEBPACK_IMPORTED_MODULE_12__components_owner_property_property_component__["a" /* OwnerPropertyComponent */] },
    { path: 'owner/property/:propertyId', component: __WEBPACK_IMPORTED_MODULE_12__components_owner_property_property_component__["a" /* OwnerPropertyComponent */] },
    { path: 'owner/review', component: __WEBPACK_IMPORTED_MODULE_13__components_owner_review_review_component__["a" /* OwnerReviewComponent */] },
    { path: 'customer/search', component: __WEBPACK_IMPORTED_MODULE_14__components_customer_search_search_component__["a" /* SearchComponent */] },
    { path: 'customer/list', component: __WEBPACK_IMPORTED_MODULE_15__components_customer_list_list_component__["a" /* ListComponent */] },
    { path: 'customer/type/:type', component: __WEBPACK_IMPORTED_MODULE_15__components_customer_list_list_component__["a" /* ListComponent */] },
    { path: 'customer/rentals', component: __WEBPACK_IMPORTED_MODULE_16__components_customer_rentals_rentals_component__["a" /* RentalsComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/property/details/details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/property/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\t  \n  <a (click)=\"back()\" class=\"pull-left\" > <i class=\"glyphicon glyphicon-chevron-left\"></i> </a><br>\n  <i class=\"fa fa-user\"></i> <b>{{admin.username}}</b> | role :<b> Admin </b>.<br>\n      <div class=\"panel panel-primary\">\n\t  <div class=\"panel-heading\">\n\t    <h3 class=\"panel-title\">Property's Info</h3>\n\t  </div>\n\t  <div class=\"panel-body\" style=\"color:black\">\n\t    Type : <b>{{property.type}}</b> <br>\n\t    Description : <b>{{property.description}}</b><br>\n\t    Size : <b>{{property.size}} m²</b><br>\n\t    Price : <b>{{property.price}}$/month</b><br>\n\t    Location : <button class=\"btn btn-success\" *ngIf=\"!showLocationFlag\"  (click)=\"showLocationFlag=true\" >Show Location</button>\n\t    <button class=\"btn btn-primary\" *ngIf=\"showLocationFlag\" (click)=\"showLocationFlag=false\" >Hide Location</button><br>\n\t    <agm-map *ngIf=\"showLocationFlag\" [zoom]=\"16\"  [latitude]=\"property.latitude\" [longitude]=\"property.longitude\">\n\t    \t<agm-marker [latitude]=\"property.latitude\" [longitude]=\"property.longitude\"></agm-marker>\n\t\t</agm-map>\n\t    Available : <b>{{property.available}}</b><br>\n\t    Owner : <b>{{property.owner.username}}</b><br>\n\t    Customer : <b *ngIf=\"property.customer\">{{property.customer.username}}</b><br>\n\t    Valid : <b>{{property.valid}}</b><br>\n\t    Validated By : <b *ngIf=\"property.validatedBy\">{{property.validatedBy.username}}</b><br>\n\t    <button class=\"btn btn-danger\" (click)=\"deleteProperty(property._id)\" >Delete Property</button>\n\t  </div>\n\t</div>\n\n</div> <!-- /container -->\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/property/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PropertyDetailsComponent = (function () {
    function PropertyDetailsComponent(userService, propertyService, activatedRoute, router, _location, sharedService, titleService) {
        this.userService = userService;
        this.propertyService = propertyService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._location = _location;
        this.sharedService = sharedService;
        this.titleService = titleService;
    }
    PropertyDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Administration : Property Details");
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.propertyId = params['propertyId'];
            _this.admin = _this.sharedService.user;
            _this.adminId = _this.admin._id;
            _this.propertyService.findPropertyById(_this.propertyId)
                .subscribe(function (property) {
                _this.property = property;
            }, function (error) {
                console.log(error);
            });
        });
    };
    PropertyDetailsComponent.prototype.deleteProperty = function (propertyId) {
        var _this = this;
        this.propertyService.deleteProperty(this.propertyId)
            .subscribe(function (done) {
            _this.router.navigate(['..'], { relativeTo: _this.activatedRoute });
        }, function (error) {
            console.log(error);
        });
    };
    PropertyDetailsComponent.prototype.back = function () {
        this._location.back();
    };
    return PropertyDetailsComponent;
}());
PropertyDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-details',
        template: __webpack_require__("../../../../../src/app/components/admin/property/details/details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/property/details/details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* Title */]) === "function" && _g || Object])
], PropertyDetailsComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=details.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/property/property.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/property/property.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <a (click)=\"back()\" class=\"pull-left\" > <i class=\"glyphicon glyphicon-chevron-left\"></i> </a><br>\n  <i class=\"fa fa-user\"></i> <b>{{admin.username}}</b> | role :<b> Admin </b>.<br>\n      <div *ngIf=\"errorFlag\"\n        class=\"alert alert-danger\">\n        {{errorMsg}}\n      </div>\n      <div *ngIf=\"messageFlag\"\n        class=\"alert alert-success\">\n        {{message}}\n      </div>\n      <table class=\"table table-bordered\">\n          <tr>\n            <th>#</th>\n            <th>type</th>\n            <th>Owner</th>\n            <th>Available</th>\n            <th>Customer</th>\n            <th>actions</th>\n          </tr>\n          <tr *ngFor=\"let property of properties\">\n            <td>{{property._id}}</td>\n            <td>{{property.type}}</td>\n            <td><a [routerLink]=\"['../user',property.owner._id]\" >{{property.owner.username}}</a></td>\n            <td>{{property.available}}</td>\n            <td><a *ngIf=\"property.customer\" [routerLink]=\"['../user',property.customer._id]\" >{{property.customer.username}}</a></td>\n            <td><button (click)=\"details(property._id)\" class=\"btn btn-primary\" ><i class=\"glyphicon glyphicon-info-sign\" ></i></button> | <button (click)=\"activate(property)\" class=\"btn btn-success\" [disabled]=\"property.valid\" ><i class=\"glyphicon glyphicon-ok\" ></i></button>\n            | <button (click)=\"deactivate(property)\" class=\"btn btn-danger\" [disabled]=\"!property.valid\"  ><i class=\"glyphicon glyphicon-remove\" ></i></button></td>\n          </tr>\n      </table>\n\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/admin/property/property.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PropertyComponent = (function () {
    function PropertyComponent(userService, propertyService, activatedRoute, router, _location, sharedService, titleService) {
        this.userService = userService;
        this.propertyService = propertyService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._location = _location;
        this.sharedService = sharedService;
        this.titleService = titleService;
    }
    PropertyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Administration : Properties");
        this.admin = this.sharedService.user;
        this.adminId = this.admin._id;
        if (!this.admin.valid || this.admin.role != 'admin') {
            this.router.navigate(['profile/menu']);
        }
        this.propertyService.findAllProperties()
            .subscribe(function (properties) {
            _this.properties = properties;
        }, function (error) {
            console.log(error);
        });
    };
    PropertyComponent.prototype.details = function (propertyId) {
        this.router.navigate([propertyId], { relativeTo: this.activatedRoute });
    };
    PropertyComponent.prototype.activate = function (property) {
        var _this = this;
        property.valid = true;
        property.validatedBy = this.admin._id;
        this.propertyService.updateProperty(property._id, property)
            .subscribe(function (res) {
            _this.messageFlag = true;
            _this.message = 'property is validated';
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'cannot validate property';
        });
    };
    PropertyComponent.prototype.deactivate = function (property) {
        var _this = this;
        property.valid = false;
        property.validatedBy = {};
        this.propertyService.updateProperty(property._id, property)
            .subscribe(function (res) {
            _this.messageFlag = true;
            _this.message = 'property is deactivated';
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'cannot deactivate property';
        });
    };
    PropertyComponent.prototype.back = function () {
        this._location.back();
    };
    return PropertyComponent;
}());
PropertyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-property',
        template: __webpack_require__("../../../../../src/app/components/admin/property/property.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/property/property.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* Title */]) === "function" && _g || Object])
], PropertyComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=property.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/review/review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/review/review.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <a (click)=\"back()\" class=\"pull-left\" > <i class=\"glyphicon glyphicon-chevron-left\"></i> </a><br>\n  <i class=\"fa fa-user\"></i> <b>{{admin.username}}</b> | role :<b> Admin </b>.<br>\n\t\n      <table class=\"table table-bordered\">\n          <tr>\n            <th>#</th>\n            <th>Rate</th>\n            <th>Text</th>\n            <th>Property</th>\n            <th>Customer</th>\n            <th>actions</th>\n          </tr>\n          <tr *ngFor=\"let review of reviews\">\n            <td>{{review._id}}</td>\n            <td>{{review.rate}} stars</td>\n            <td>{{review.text}}</td>\n            <td><a [routerLink]=\"['../property',review.property._id]\" >{{review.property.type}}</a></td>\n            <td><a [routerLink]=\"['../user',review.customer._id]\" >{{review.customer.username}}</a></td>\n            <td> <button (click)=\"remove(review._id)\" class=\"btn btn-danger\" ><i class=\"glyphicon glyphicon-remove\" ></i></button></td>\n          </tr>\n      </table>\n\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/admin/review/review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_review_service__ = __webpack_require__("../../../../../src/app/services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReviewComponent = (function () {
    function ReviewComponent(userService, reviewService, activatedRoute, router, _location, sharedService, titleService) {
        this.userService = userService;
        this.reviewService = reviewService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._location = _location;
        this.sharedService = sharedService;
        this.titleService = titleService;
    }
    ReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Administration : Reviews");
        this.admin = this.sharedService.user;
        this.adminId = this.admin._id;
        if (!this.admin.valid || this.admin.role != 'admin') {
            this.router.navigate(['profile/menu']);
        }
        this.reviewService.findAllReviews()
            .subscribe(function (reviews) {
            _this.reviews = reviews;
        }, function (error) {
            console.log(error);
        });
    };
    ReviewComponent.prototype.remove = function (reviewId) {
        var _this = this;
        this.reviewService.deleteReview(reviewId)
            .subscribe(function (done) {
            _this.router.navigate(['.'], { relativeTo: _this.activatedRoute });
        }, function (error) {
            console.log(error);
        });
    };
    ReviewComponent.prototype.back = function () {
        this._location.back();
    };
    return ReviewComponent;
}());
ReviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-review',
        template: __webpack_require__("../../../../../src/app/components/admin/review/review.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/review/review.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_review_service__["a" /* ReviewService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* Title */]) === "function" && _g || Object])
], ReviewComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=review.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/user/details/details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/user/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<a (click)=\"back()\" class=\"pull-left\" > <i class=\"glyphicon glyphicon-chevron-left\"></i> </a><br>\n  <i class=\"fa fa-user\"></i> <b>{{admin.username}}</b> | role :<b> Admin </b>.<br>\n\t\t<div *ngIf=\"messageFlag\"\n        class=\"alert alert-success\">\n        {{message}}\n      </div>\n\t  \n      <div class=\"panel panel-primary\">\n\t  <div class=\"panel-heading\">\n\t    <h3 class=\"panel-title\">User's Info</h3>\n\t  </div>\n\t  <div class=\"panel-body\" style=\"color:black\">\n\t    Username : <b>{{user.username}}</b> <br>\n\t    Password : <b>{{user.password}}</b><br>\n\t    Role : <b>{{user.role}}</b><br>\n\t    First name : <b>{{user.firstName}}</b><br>\n\t    Last name : <b>{{user.lastName}}</b><br>\n\t    Email : <b>{{user.email}}</b><br>\n\t    Phone : <b>{{user.phone}}</b><br>\n\t    Date of birth : <b>{{user.dob}}</b><br>\n\t    Verified : <b>{{user.valid}}</b><br>\n\t    Validated By : <b *ngIf=\"user.validatedBy\">{{user.validatedBy.username}}</b><br>\n\t    <button class=\"btn btn-primary\" (click)=\"makeAdmin()\" >Make an admin</button>\n\t    <button class=\"btn btn-danger\" (click)=\"deleteUser(user._id)\" >Delete user</button>\n\t  </div>\n\t</div>\n\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/admin/user/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserDetailsComponent = (function () {
    function UserDetailsComponent(userService, activatedRoute, router, _location, sharedService, titleService) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._location = _location;
        this.sharedService = sharedService;
        this.titleService = titleService;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Administration : User Details");
        this.admin = this.sharedService.user;
        this.adminId = this.admin._id;
        if (!this.admin.valid || this.admin.role != 'admin') {
            this.router.navigate(['profile/menu']);
        }
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.userService.findUserById(_this.userId)
                .subscribe(function (user) {
                _this.user = user;
                console.log(_this.user);
            }, function (error) {
                console.log(error);
            });
        });
    };
    UserDetailsComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        this.userService.deleteUser(this.userId)
            .subscribe(function (done) {
            _this.router.navigate(['..'], { relativeTo: _this.activatedRoute });
        }, function (error) {
            console.log(error);
        });
    };
    UserDetailsComponent.prototype.makeAdmin = function () {
        var _this = this;
        this.user.role = 'admin';
        this.userService.updateUser(this.user._id, this.user)
            .subscribe(function (updated) {
            _this.messageFlag = true;
            _this.message = _this.user.username + ' is made an Admin';
        }, function (error) {
        });
    };
    UserDetailsComponent.prototype.back = function () {
        this._location.back();
    };
    return UserDetailsComponent;
}());
UserDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-details',
        template: __webpack_require__("../../../../../src/app/components/admin/user/details/details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/user/details/details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* Title */]) === "function" && _f || Object])
], UserDetailsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=details.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <a (click)=\"back()\" class=\"pull-left\" > <i class=\"glyphicon glyphicon-chevron-left\"></i> </a><br>\n  <i class=\"fa fa-user\"></i> <b>{{admin.username}}</b> | role :<b> Admin </b>.<br>\n      <div *ngIf=\"errorFlag\"\n        class=\"alert alert-danger\">\n        {{errorMsg}}\n      </div>\n      <div *ngIf=\"messageFlag\"\n        class=\"alert alert-success\">\n        {{message}}\n      </div>\n      <table class=\"table table-bordered\">\n          <tr>\n            <th>#</th>\n            <th>first name</th>\n            <th>last name</th>\n            <th>registered as</th>\n            <th>actions</th>\n          </tr>\n          <tr *ngFor=\"let user of users\">\n            <td>{{user._id}}</td>\n            <td>{{user.firstName}}</td>\n            <td>{{user.lastName}}</td>\n            <td>{{user.role}}</td>\n            <td><button (click)=\"details(user._id)\" class=\"btn btn-primary\" ><i class=\"glyphicon glyphicon-info-sign\" ></i></button> | <button (click)=\"activate(user)\" class=\"btn btn-success\" [disabled]=\"user.valid\" ><i class=\"glyphicon glyphicon-ok\" ></i></button>\n            | <button (click)=\"deactivate(user)\" class=\"btn btn-danger\" [disabled]=\"!user.valid\"  ><i class=\"glyphicon glyphicon-remove\" ></i></button></td>\n          </tr>\n      </table>\n\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/admin/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserComponent = (function () {
    function UserComponent(userService, activatedRoute, router, _location, sharedService, titleService) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._location = _location;
        this.sharedService = sharedService;
        this.titleService = titleService;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Administration : Users");
        this.admin = this.sharedService.user;
        this.adminId = this.admin._id;
        if (!this.admin.valid || this.admin.role != 'admin') {
            this.router.navigate(['profile/menu']);
        }
        this.userService.findAllUsers()
            .subscribe(function (users) {
            _this.users = users;
        }, function (error) {
            console.log(error);
        });
    };
    UserComponent.prototype.details = function (userId) {
        this.router.navigate([userId], { relativeTo: this.activatedRoute });
    };
    UserComponent.prototype.activate = function (user) {
        var _this = this;
        user.valid = true;
        user.validatedBy = this.admin._id;
        this.userService.updateUser(user._id, user)
            .subscribe(function (res) {
            _this.messageFlag = true;
            _this.message = user.username + '\'s account is validated';
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'cannot validate user';
        });
    };
    UserComponent.prototype.deactivate = function (user) {
        var _this = this;
        user.valid = false;
        this.userService.updateUser(user._id, user)
            .subscribe(function (res) {
            _this.messageFlag = true;
            _this.message = user.username + '\'s account is deactivated';
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'cannot validate user';
        });
    };
    UserComponent.prototype.back = function () {
        this._location.back();
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/components/admin/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* Title */]) === "function" && _f || Object])
], UserComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/customer/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/customer/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <a (click)=\"back()\" class=\"pull-left\" > <i class=\"glyphicon glyphicon-chevron-left\"></i> </a><br>\n  <i class=\"fa fa-user\"></i> <b>{{customer.username}}</b> | role :<b> Customer </b>.<br>\n      <div *ngIf=\"errorFlag\"\n        class=\"alert alert-danger\">\n        {{errorMsg}}\n      </div>\n      <div *ngIf=\"messageFlag\"\n        class=\"alert alert-success\">\n        {{message}}\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-6\">\n          <div *ngIf=\"property\" class=\"panel panel-primary\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title\">Property's Info</h3>\n            </div>\n            <div class=\"panel-body\" style=\"color:black\">\n              ID : <b>{{property._id}}</b> <br>\n              Type : <b>{{property.type}}</b> <br>\n              Description : <b>{{property.description}}</b><br>\n              Size : <b>{{property.size}} m²</b><br>\n              Price : <b>{{property.price}}$/month</b><br>\n              Location : <button class=\"btn btn-success\" *ngIf=\"!showLocationFlag\"  (click)=\"showLocationFlag=true\" >Show Location</button>\n              <button class=\"btn btn-primary\" *ngIf=\"showLocationFlag\" (click)=\"showLocationFlag=false\" >Hide Location</button><br>\n              <agm-map *ngIf=\"showLocationFlag\" [zoom]=\"16\"  [latitude]=\"property.latitude\" [longitude]=\"property.longitude\">\n                <agm-marker [latitude]=\"property.latitude\" [longitude]=\"property.longitude\"></agm-marker>\n              </agm-map>\n              Available : <b>{{property.available}}</b><br>\n              Owner : <b>{{property.owner.username}}</b><br>\n            <div class=\"row\">\n              <div class=\"col-sm-12\">\n                <div class=\"rating-block\">\n                  <h4>Average user rating</h4>\n                  <h2 class=\"bold padding-bottom-7\">{{property.avg}}<small>/ 5</small></h2>\n                  <button *ngFor=\"let i of Arr(Math.round(property.avg)).fill(1)\"  type=\"button\" class=\"btn btn-warning btn-sm\" aria-label=\"Left Align\">\n                    <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                  </button>\n                </div>\n              </div>\n            </div>\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <hr/>\n                  <div class=\"review-block\">\n                    <div *ngFor=\"let review of property.reviews\" class=\"row\">\n                      <div class=\"col-sm-3\">\n                        <img src=\"http://dummyimage.com/60x60/666/ffffff&text=No+Image\" class=\"img-rounded\">\n                        <div class=\"review-block-name\">{{review.customer.username}}</div>\n                        <div class=\"review-block-date\">{{review.dateCreated| date:\"MM/dd/yyyy 'at' h:mma\"}}</div>\n                      </div>\n                      <div class=\"col-sm-9\">\n                        <div class=\"review-block-rate\">\n                          <button *ngFor=\"let i of Arr(review.rate).fill(1)\" type=\"button\" class=\"btn btn-warning btn-xs\" aria-label=\"Left Align\">\n                            <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                          </button>\n                        </div>\n                        <div class=\"review-block-description\">{{review.text}}</div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\" style=\"margin-top:40px;\">\n                  <div class=\"well well-sm\">\n                        <div class=\"row\" id=\"post-review-box\" style=\"display:block;\">\n                            <div class=\"col-md-12\">\n                                <form accept-charset=\"UTF-8\" (submit)=\"addReview(property._id)\">\n                                    <textarea [(ngModel)]=\"review\" class=\"form-control animated\" cols=\"50\" id=\"new-review\" name=\"comment\" placeholder=\"Enter your review here...\" rows=\"5\"></textarea>\n                                    <div class=\"text-right\">\n                                        <input [(ngModel)]=\"rate\" type=\"radio\" name=\"rate\" value=\"5\"> 5 \n                                        <input [(ngModel)]=\"rate\" type=\"radio\" name=\"rate\" value=\"4\"> 4 \n                                        <input [(ngModel)]=\"rate\" type=\"radio\" name=\"rate\" value=\"3\"> 3 \n                                        <input [(ngModel)]=\"rate\" type=\"radio\" name=\"rate\" value=\"2\"> 2 \n                                        <input [(ngModel)]=\"rate\" type=\"radio\" name=\"rate\" value=\"1\"> 1 \n                                        <input [(ngModel)]=\"rate\" type=\"radio\" name=\"rate\" value=\"0\"> 0 \n                                        <button class=\"btn btn-success btn-lg\" type=\"submit\">Add</button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div> \n                  </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xs-6\">\n          <table class=\"table table-bordered\">\n          <tr>\n            <th>#</th>\n            <th>type</th>\n            <th>Owner</th>\n            <th>Available</th>\n            <th>actions</th>\n          </tr>\n          <tr *ngFor=\"let property of properties\">\n            <td>{{property._id}}</td>\n            <td>{{property.type}}</td>\n            <td><a [routerLink]=\"['../user',property.owner._id]\" >{{property.owner.username}}</a></td>\n            <td>{{property.available}}</td>\n            <td><button (click)=\"details(property)\" [disabled]=\"!property.valid\" class=\"btn btn-primary\" ><i class=\"glyphicon glyphicon-info-sign\" ></i></button> | <button *ngIf=\"property.valid\" (click)=\"rent(property)\" class=\"btn btn-success\" [disabled]=\"!property.available\" >Rent</button></td>\n          </tr>\n      </table>\n        </div>\n      </div>\n\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/customer/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_review_service__ = __webpack_require__("../../../../../src/app/services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListComponent = (function () {
    function ListComponent(userService, propertyService, reviewService, activatedRoute, router, _location, sharedService, titleService) {
        this.userService = userService;
        this.propertyService = propertyService;
        this.reviewService = reviewService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._location = _location;
        this.sharedService = sharedService;
        this.titleService = titleService;
        this.Arr = Array;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("List of Properties");
        this.Math = Math;
        this.customer = this.sharedService.user;
        this.customerId = this.customer._id;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.type = params['type'];
            _this.propertyService.findAllProperties()
                .subscribe(function (properties) {
                _this.properties = [];
                for (var i = 0; i < properties.length; i++) {
                    if (_this.type && properties[i].type == _this.type) {
                        _this.properties.push(properties[i]);
                    }
                    else if (_this.type == undefined) {
                        _this.properties.push(properties[i]);
                    }
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    ListComponent.prototype.details = function (property) {
        var _this = this;
        this.property = property;
        this.property.avg = 0;
        this.reviewService.findReviewsForProperty(property._id)
            .subscribe(function (reviews) {
            _this.property.reviews = reviews;
            var rate = 0;
            for (var i = 0; i < _this.property.reviews.length; i++) {
                if (_this.property.reviews[i].rate)
                    rate += _this.property.reviews[i].rate;
            }
            if (_this.property.reviews.length > 0)
                rate = rate / _this.property.reviews.length;
            _this.property.avg = rate;
        });
    };
    ListComponent.prototype.rent = function (property) {
        var _this = this;
        property.customer = this.customerId;
        property.available = false;
        this.propertyService.updateProperty(property._id, property)
            .subscribe(function (res) {
            _this.messageFlag = true;
            _this.message = 'You rented property with ID ' + property._id;
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'cannot rent property';
        });
    };
    ListComponent.prototype.back = function () {
        this._location.back();
    };
    ListComponent.prototype.addReview = function (propertyId) {
        var _this = this;
        var review = { rate: this.rate, text: this.review };
        this.reviewService.createReview(propertyId, this.customerId, review)
            .subscribe(function (review) {
            _this.messageFlag = true;
            _this.message = 'Review added successfully';
            _this.propertyService.findPropertyById(propertyId)
                .subscribe(function (property) {
                _this.details(property);
            });
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'cannot add review';
        });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-list',
        template: __webpack_require__("../../../../../src/app/components/customer/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/customer/list/list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_review_service__["a" /* ReviewService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common__["f" /* Location */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["b" /* Title */]) === "function" && _h || Object])
], ListComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/customer/rentals/rentals.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/customer/rentals/rentals.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <a (click)=\"back()\" class=\"pull-left\" > <i class=\"glyphicon glyphicon-chevron-left\"></i> </a><br>\n  <i class=\"fa fa-user\"></i> <b>{{customer.username}}</b> | role :<b> Customer </b>.<br>\n\t \n      <div *ngIf=\"errorFlag\"\n        class=\"alert alert-danger\">\n        {{errorMsg}}\n      </div>\n      <div *ngIf=\"messageFlag\"\n        class=\"alert alert-success\">\n        {{message}}\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-6\">\n          <div *ngIf=\"property\" class=\"panel panel-primary\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title\">Property's Info</h3>\n            </div>\n            <div class=\"panel-body\" style=\"color:black\">\n              ID : <b>{{property._id}}</b> <br>\n              Type : <b>{{property.type}}</b> <br>\n              Description : <b>{{property.description}}</b><br>\n              Size : <b>{{property.size}} m²</b><br>\n              Price : <b>{{property.price}}$/month</b><br>\n              Location : <button class=\"btn btn-success\" *ngIf=\"!showLocationFlag\"  (click)=\"showLocationFlag=true\" >Show Location</button>\n\t\t\t    <button class=\"btn btn-primary\" *ngIf=\"showLocationFlag\" (click)=\"showLocationFlag=false\" >Hide Location</button><br>\n\t\t\t    <agm-map *ngIf=\"showLocationFlag\" [zoom]=\"16\" [latitude]=\"property.latitude\" [longitude]=\"property.longitude\">\n\t\t\t    \t<agm-marker [latitude]=\"property.latitude\" [longitude]=\"property.longitude\"></agm-marker>\n\t\t\t\t</agm-map>\n              Available : <b>{{property.available}}</b><br>\n              Owner : <b>{{property.owner.username}}</b><br>\n              Reviews : <br>\n              <ul>\n                <li *ngFor=\"let review of property.reviews\">\n                  {{review.text}} - ({{review.rate}} stars)\n                </li>\n              </ul>\n              <div class=\"row\" style=\"margin-top:40px;\">\n                  <div class=\"well well-sm\">\n                        <div class=\"row\" id=\"post-review-box\" style=\"display:block;\">\n                            <div class=\"col-md-12\">\n                                <form accept-charset=\"UTF-8\" (submit)=\"addReview(property._id)\">\n                                    <textarea [(ngModel)]=\"review\" class=\"form-control animated\" cols=\"50\" id=\"new-review\" name=\"comment\" placeholder=\"Enter your review here...\" rows=\"5\"></textarea>\n                                    <div class=\"text-right\">\n                                        <input [(ngModel)]=\"rate\" type=\"radio\" name=\"rate\" value=\"5\"> 5 \n                                        <input [(ngModel)]=\"rate\" type=\"radio\" name=\"rate\" value=\"4\"> 4 \n                                        <input [(ngModel)]=\"rate\" type=\"radio\" name=\"rate\" value=\"3\"> 3 \n                                        <input [(ngModel)]=\"rate\" type=\"radio\" name=\"rate\" value=\"2\"> 2 \n                                        <input [(ngModel)]=\"rate\" type=\"radio\" name=\"rate\" value=\"1\"> 1 \n                                        <input [(ngModel)]=\"rate\" type=\"radio\" name=\"rate\" value=\"0\"> 0 \n                                        <button class=\"btn btn-success btn-lg\" type=\"submit\">Add</button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div> \n                  </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xs-6\">\n          <table class=\"table table-bordered\">\n          <tr>\n            <th>#</th>\n            <th>type</th>\n            <th>Owner</th>\n            <th>Available</th>\n            <th>actions</th>\n          </tr>\n          <tr *ngFor=\"let property of properties\">\n            <td>{{property._id}}</td>\n            <td>{{property.type}}</td>\n            <td>{{property.owner.username}}</td>\n            <td>{{property.available}}</td>\n            <td><button (click)=\"details(property)\" [disabled]=\"!property.valid\" class=\"btn btn-primary\" ><i class=\"glyphicon glyphicon-info-sign\" ></i></button> | <button *ngIf=\"property.valid\" (click)=\"cancel(property)\" class=\"btn btn-danger\" [disabled]=\"property.available\" >Leave</button></td>\n          </tr>\n      </table>\n        </div>\n      </div>\n\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/customer/rentals/rentals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_review_service__ = __webpack_require__("../../../../../src/app/services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RentalsComponent = (function () {
    function RentalsComponent(userService, propertyService, reviewService, activatedRoute, router, _location, sharedService, titleService) {
        this.userService = userService;
        this.propertyService = propertyService;
        this.reviewService = reviewService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._location = _location;
        this.sharedService = sharedService;
        this.titleService = titleService;
    }
    RentalsComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("My rentals");
        this.customer = this.sharedService.user;
        this.customerId = this.customer._id;
        this.loadMyRentals();
    };
    RentalsComponent.prototype.details = function (property) {
        var _this = this;
        this.property = property;
        this.reviewService.findReviewsForProperty(property._id)
            .subscribe(function (reviews) {
            _this.property.reviews = reviews;
        });
    };
    RentalsComponent.prototype.cancel = function (property) {
        var _this = this;
        if (this.property && property._id == this.property._id) {
            this.property = undefined;
        }
        property.customer = null;
        property.available = true;
        this.propertyService.updateProperty(property._id, property)
            .subscribe(function (res) {
            _this.messageFlag = true;
            _this.message = 'You left property with ID ' + property._id;
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'cannot leave property';
        });
        this.loadMyRentals();
    };
    RentalsComponent.prototype.loadMyRentals = function () {
        var _this = this;
        this.propertyService.findAllProperties()
            .subscribe(function (properties) {
            _this.properties = [];
            for (var i = 0; i < properties.length; i++) {
                if (properties[i].customer && properties[i].customer._id == _this.customerId) {
                    _this.properties.push(properties[i]);
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    RentalsComponent.prototype.back = function () {
        this._location.back();
    };
    RentalsComponent.prototype.addReview = function (propertyId) {
        var _this = this;
        var review = { rate: this.rate, text: this.review };
        this.reviewService.createReview(propertyId, this.customerId, review)
            .subscribe(function (review) {
            _this.messageFlag = true;
            _this.message = 'Review added successfully';
            _this.propertyService.findPropertyById(propertyId)
                .subscribe(function (property) {
                _this.details(property);
            });
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'cannot add review';
        });
    };
    return RentalsComponent;
}());
RentalsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-rentals',
        template: __webpack_require__("../../../../../src/app/components/customer/rentals/rentals.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/customer/rentals/rentals.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_review_service__["a" /* ReviewService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common__["f" /* Location */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["b" /* Title */]) === "function" && _h || Object])
], RentalsComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=rentals.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/customer/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/customer/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<a (click)=\"back()\" class=\"pull-left\" > <i class=\"glyphicon glyphicon-chevron-left\"></i> </a><br>\n  <i class=\"fa fa-user\"></i> <b>{{customer.username}}</b> | role :<b> Customer </b>.<br>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\"><h1>Search For Property By : </h1></div>\n\t</div>\n\t<div class=\"row\">\n\t  <div class=\"col-sm-4\">\n\t  \t<label for=\"type\" >Type</label>\n\t  </div>\n\t  <div class=\"col-sm-8\">\n\t  \t<div class=\"input-group\">\n\t      <select class=\"form-control\" name=\"type\" [(ngModel)]=\"type\" id=\"type\">\n\t      \t<option>appartment</option>\n\t      \t<option>garage</option>\n\t      \t<option>house</option>\n\t      \t<option>offices</option>\n\t      </select>\n\t      <span class=\"input-group-btn\">\n\t        <button class=\"btn btn-primary\" (click)=\"searchByType()\" type=\"button\">Search</button>\n\t      </span>\n\t    </div>\n\t  </div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/customer/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchComponent = (function () {
    function SearchComponent(router, activatedRoute, userService, _location, sharedService, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this._location = _location;
        this.sharedService = sharedService;
        this.titleService = titleService;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Search for property");
        this.customer = this.sharedService.user;
        this.customerId = this.customer._id;
    };
    SearchComponent.prototype.searchByType = function () {
        this.router.navigate(['../type', this.type], { relativeTo: this.activatedRoute });
    };
    SearchComponent.prototype.back = function () {
        this._location.back();
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/components/customer/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/customer/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* Title */]) === "function" && _f || Object])
], SearchComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n            <!-- *** HOMEPAGE CAROUSEL ***\n _________________________________________________________ -->\n\n            <div class=\"home-carousel\">\n\n                <div class=\"dark-mask\"></div>\n\n                <div class=\"container\">\n                    <div class=\"homepage owl-carousel\">\n                        <div class=\"item\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-12\">\n                                    <p>\n                                        <img src=\"assets/img/logo.png\" alt=\"\">\n                                    </p>\n                                    <h1>Most usefull website to find Properties to rent</h1>\n                                    <p>Create account and start looking for the best services</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"item\">\n                            <div class=\"row\">\n\n                                <div class=\"col-sm-12 text-center\">\n                                    <h2>Are you a property owner ?</h2>\n                                    <p>Our System gives you the opportunité to :</p>\n                                    <ul class=\"list-style-none\">\n                                        <li>Post your property's information</li>\n                                        <li>Contact with your customer</li>\n                                        <li>Get reviews to better manage your service</li>\n                                    </ul>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"item\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-12\">\n                                    <h1>Propert Management System</h1>\n                                    <ul class=\"list-style-none\">\n                                        <li>The best place that gathers customers and owners</li>\n                                        \n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- /.project owl-slider -->\n                </div>\n            </div>\n\n            <!-- *** HOMEPAGE CAROUSEL END *** -->\n        </section>\n\n        <section class=\"bar background-white\">\n            <div class=\"container\">\n                <div class=\"col-md-12\">\n\n\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <div class=\"box-simple\">\n                                <div class=\"icon\">\n                                    <i class=\"fa fa-user\"></i>\n                                </div>\n                                <h3>Easy to use</h3>\n                                <p>Our platform is user friendly. It provides a very simple inteface to post/rent properties. </p>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"box-simple\">\n                                <div class=\"icon\">\n                                    <i class=\"fa fa-globe\"></i>\n                                </div>\n                                <h3>Large Database</h3>\n                                <p>Our platform is used by a very important mass of people so it covers the most properties in the country.</p>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"box-simple\">\n                                <div class=\"icon\">\n                                    <i class=\"fa fa-lightbulb-o\"></i>\n                                </div>\n                                <h3>Frequent Updates</h3>\n                                <p>Our team is working day and night to update the platform and provide you the best features.</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(titleService) {
        this.titleService = titleService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Home Page");
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/menu/admin-menu/admin-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/menu/admin-menu/admin-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <i class=\"fa fa-user\"></i>  <b>{{user.username}}</b> | role :<b> Admin </b>.\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n            <div class=\"heading\">\n                <h2>Administration menu</h2>\n            </div>\n        </div>\n    </div>\n    <!-- /.row -->\n    <div class=\"row\">\n        <div class=\"col-md-4 col-sm-4\">\n            <div class=\"team-member\" >\n                <div class=\"image\">\n                    <a [routerLink]=\"['/admin/user']\">\n                        <img src=\"assets/img/users.jpg\" alt=\"\" class=\"img-responsive img-circle\">\n                    </a>\n                </div>\n                <h3><a [routerLink]=\"['/admin/user']\" >Users</a></h3>\n                <p class=\"role\">Users Management</p>\n                <div class=\"text\">\n                    <p>As an admin you can Validate new accounts and Delete users</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4 col-sm-4\">\n            <div class=\"team-member\" >\n                <div class=\"image\">\n                    <a [routerLink]=\"['/admin/property']\">\n                        <img src=\"assets/img/properties.jpg\" alt=\"\" class=\"img-responsive img-circle\">\n                    </a>\n                </div>\n                <h3><a [routerLink]=\"['/admin/property']\" >Properties</a></h3>\n                <p class=\"role\">Properties Management</p>\n                <div class=\"text\">\n                    <p>As an admin you can Validate new properties and Delete invalid ones</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4 col-sm-4\">\n            <div class=\"team-member\" >\n                <div class=\"image\">\n                    <a [routerLink]=\"['/admin/review']\">\n                        <img src=\"assets/img/reviews.jpg\" alt=\"\" class=\"img-responsive img-circle\">\n                    </a>\n                </div>\n                <h3><a [routerLink]=\"['/admin/review']\" >Reviews</a></h3>\n                <p class=\"role\">Reviews Management</p>\n                <div class=\"text\">\n                    <p>As an admin you can view and manage reviews of the properties posted in the website</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"see-more\">\n                <a [routerLink]=\"['/profile']\" class=\"btn btn-template-main\">Back to profile</a>\n            </div>\n        </div>\n    </div>\n</div>\n                <!-- /.container -->"

/***/ }),

/***/ "../../../../../src/app/components/menu/admin-menu/admin-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminMenuComponent = (function () {
    function AdminMenuComponent(userService, activatedRoute, router, sharedService, titleService) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.titleService = titleService;
    }
    AdminMenuComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Admin Menu");
        this.user = this.sharedService.user;
        this.userId = this.user._id;
    };
    return AdminMenuComponent;
}());
AdminMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin-menu',
        template: __webpack_require__("../../../../../src/app/components/menu/admin-menu/admin-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/menu/admin-menu/admin-menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */]) === "function" && _e || Object])
], AdminMenuComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=admin-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/menu/customer-menu/customer-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/menu/customer-menu/customer-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <i class=\"fa fa-user\"></i> <b>{{user.username}}</b> | role :<b> Customer </b>.\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n            <div class=\"heading\">\n                <h2>Customer menu</h2>\n            </div>\n        </div>\n    </div>\n    <!-- /.row -->\n    <div class=\"row\">\n        <div class=\"col-md-4 col-sm-4\">\n            <div class=\"team-member\" >\n                <div class=\"image\">\n                    <a [routerLink]=\"['/customer/search']\" >\n                        <img src=\"assets/img/search.jpg\" alt=\"\" class=\"img-responsive img-circle\">\n                    </a>\n                </div>\n                <h3><a [routerLink]=\"['/customer/search']\"  >Search</a></h3>\n                <p class=\"role\">Search for property</p>\n                <div class=\"text\">\n                    <p>As a customer you can search for properties by type</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4 col-sm-4\">\n            <div class=\"team-member\" >\n                <div class=\"image\">\n                    <a [routerLink]=\"['/customer/list']\" >\n                        <img src=\"assets/img/list.jpg\" alt=\"\" class=\"img-responsive img-circle\">\n                    </a>\n                </div>\n                <h3><a [routerLink]=\"['/customer/list']\" >List</a></h3>\n                <p class=\"role\">List of properties</p>\n                <div class=\"text\">\n                    <p>As a customer you can list all properties</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4 col-sm-4\">\n            <div class=\"team-member\" >\n                <div class=\"image\">\n                    <a [routerLink]=\"['/customer/rentals']\" >\n                        <img src=\"assets/img/rentals.jpg\" alt=\"\" class=\"img-responsive img-circle\">\n                    </a>\n                </div>\n                <h3><a [routerLink]=\"['/customer/rentals']\"  >My Rentals</a></h3>\n                <p class=\"role\">Rentals Management</p>\n                <div class=\"text\">\n                    <p>As a customer you can display all your rentals and cancel them if you want</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"see-more\">\n                <a [routerLink]=\"['/profile']\" class=\"btn btn-template-main\">Back to profile</a>\n            </div>\n        </div>\n    </div>\n</div>\n                <!-- /.container -->"

/***/ }),

/***/ "../../../../../src/app/components/menu/customer-menu/customer-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerMenuComponent = (function () {
    function CustomerMenuComponent(userService, activatedRoute, router, sharedService, titleService) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.titleService = titleService;
    }
    CustomerMenuComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Customer Menu");
        this.user = this.sharedService.user;
        this.userId = this.user._id;
    };
    return CustomerMenuComponent;
}());
CustomerMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-customer-menu',
        template: __webpack_require__("../../../../../src/app/components/menu/customer-menu/customer-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/menu/customer-menu/customer-menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */]) === "function" && _e || Object])
], CustomerMenuComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=customer-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"user.role\">\n\t<div *ngSwitchCase=\"'admin'\">\n\t\t<app-admin-menu></app-admin-menu>\n\t</div>\n\t<div *ngSwitchCase=\"'customer'\">\n\t\t<app-customer-menu></app-customer-menu>\n\t</div>\n\t<div *ngSwitchCase=\"'owner'\">\n\t\t<app-owner-menu></app-owner-menu>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuComponent = (function () {
    function MenuComponent(userService, activatedRoute, router, sharedService) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user;
        this.userId = this.user._id;
        if (!this.user.valid) {
            this.router.navigate(['profile']);
        }
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/components/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object])
], MenuComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/menu/owner-menu/owner-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/menu/owner-menu/owner-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <i class=\"fa fa-user\"></i>  <b>{{user.username}}</b> | role :<b> Owner </b>.\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n            <div class=\"heading\">\n                <h2>Owner menu</h2>\n            </div>\n        </div>\n    </div>\n    <!-- /.row -->\n    <div class=\"row\">\n        <div class=\"col-md-4 col-sm-4\">\n            <div class=\"team-member\" >\n                <div class=\"image\">\n                    <a [routerLink]=\"['/owner/client']\">\n                        <img src=\"assets/img/users.jpg\" alt=\"\" class=\"img-responsive img-circle\">\n                    </a>\n                </div>\n                <h3><a [routerLink]=\"['/owner/client']\" >My Clients</a></h3>\n                <p class=\"role\">Clients Management</p>\n                <div class=\"text\">\n                    <p>As an owner you can have you clients informations to contact them</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4 col-sm-4\">\n            <div class=\"team-member\" >\n                <div class=\"image\">\n                    <a [routerLink]=\"['/owner/property']\">\n                        <img src=\"assets/img/properties.jpg\" alt=\"\" class=\"img-responsive img-circle\">\n                    </a>\n                </div>\n                <h3><a [routerLink]=\"['/owner/property']\" >My Properties</a></h3>\n                <p class=\"role\">Properties Management</p>\n                <div class=\"text\">\n                    <p>As an owner you can add/update/delete you properties</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4 col-sm-4\">\n            <div class=\"team-member\" >\n                <div class=\"image\">\n                    <a [routerLink]=\"['/owner/review']\" >\n                        <img src=\"assets/img/reviews.jpg\" alt=\"\" class=\"img-responsive img-circle\">\n                    </a>\n                </div>\n                <h3><a [routerLink]=\"['/owner/review']\"  >My Reviews</a></h3>\n                <p class=\"role\">Reviews Management</p>\n                <div class=\"text\">\n                    <p>As an owner you can display all the reviews created about your properties</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"see-more\">\n                <a [routerLink]=\"['/profile']\" class=\"btn btn-template-main\">Back to profile</a>\n            </div>\n        </div>\n    </div>\n</div>\n                <!-- /.container -->"

/***/ }),

/***/ "../../../../../src/app/components/menu/owner-menu/owner-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnerMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OwnerMenuComponent = (function () {
    function OwnerMenuComponent(userService, activatedRoute, router, sharedService, titleService) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.titleService = titleService;
    }
    OwnerMenuComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Owner Menu");
        this.user = this.sharedService.user;
        this.userId = this.user._id;
    };
    return OwnerMenuComponent;
}());
OwnerMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-owner-menu',
        template: __webpack_require__("../../../../../src/app/components/menu/owner-menu/owner-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/menu/owner-menu/owner-menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */]) === "function" && _e || Object])
], OwnerMenuComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=owner-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/owner/client/client.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/owner/client/client.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<a (click)=\"back()\" class=\"pull-left\" > <i class=\"glyphicon glyphicon-chevron-left\"></i> </a><br>\n  <i class=\"fa fa-user\"></i> <b>{{owner.username}}</b> | role :<b> Owner </b>.<br>\n\t  \n\t  <div class=\"row\" >\n\t  \t<div class=\"col-xs-3\">\n\t  \t\t<div *ngIf=\"client\" class=\"panel panel-primary\">\n\t\t\t  <div class=\"panel-heading\">\n\t\t\t    <h3 class=\"panel-title\">User's Contact Info</h3>\n\t\t\t  </div>\n\t  \t\t<div class=\"panel-body\" style=\"color:black\">\n\t\t\t    First name : <b>{{client.firstName}}</b><br>\n\t\t\t    Last name : <b>{{client.lastName}}</b><br>\n\t\t\t    Email : <b>{{client.email}}</b><br>\n\t\t\t    Phone : <b>{{client.phone}}</b><br>\n\t\t\t    <a class=\"btn btn-primary\" href=\"mailto:{{client.email}}\"><i class=\"glyphicon glyphicon-envelope\"></i></a> | <a class=\"btn btn-warning\" href=\"tel:{{client.phone}}\"><i class=\"glyphicon glyphicon-earphone\"></i></a>\n\t\t\t  </div>\n\t\t\t</div>\n\t  \t</div>\n\t  \t<div class=\"col-xs-9\">\n\t\t  \t<table class=\"table table-bordered\">\n\t          <tr>\n\t            <th>#</th>\n\t            <th>first name</th>\n\t            <th>last name</th>\n\t            <th>Property</th>\n\t            <th>Contact</th>\n\t          </tr>\n\t          <tr *ngFor=\"let client of clients\">\n\t            <td>{{client._id}}</td>\n\t            <td>{{client.firstName}}</td>\n\t            <td>{{client.lastName}}</td>\n\t            <td><a [routerLink]=\"['../property',client.property._id]\" >{{client.property.type}}</a></td>\n\t            <td><button (click)=\"contact(client)\" class=\"btn btn-primary\" >Contact</button></td>\n\t          </tr>\n\t      </table>\n\n\t  \t</div>\n\t  </div>\n      \n\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/owner/client/client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClientComponent = (function () {
    function ClientComponent(userService, propertyService, activatedRoute, router, _location, sharedService, titleService) {
        this.userService = userService;
        this.propertyService = propertyService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._location = _location;
        this.sharedService = sharedService;
        this.titleService = titleService;
    }
    ClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("My clients");
        this.owner = this.sharedService.user;
        this.ownerId = this.owner._id;
        this.activatedRoute.params
            .subscribe(function (params) {
            if (params['clientId']) {
                _this.userService.findUserById(params['clientId'])
                    .subscribe(function (user) {
                    _this.contact(user);
                });
            }
        });
        this.propertyService.findPropertiesByOwner(this.ownerId)
            .subscribe(function (properties) {
            _this.clients = [];
            for (var i = 0; i < properties.length; i++) {
                if (!properties[i].available) {
                    var client = properties[i].customer;
                    client.property = properties[i];
                    _this.clients.push(client);
                }
            }
        });
    };
    ClientComponent.prototype.contact = function (client) {
        this.client = client;
    };
    ClientComponent.prototype.back = function () {
        this._location.back();
    };
    return ClientComponent;
}());
ClientComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-client',
        template: __webpack_require__("../../../../../src/app/components/owner/client/client.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/owner/client/client.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* Title */]) === "function" && _g || Object])
], ClientComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=client.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/owner/property/property.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loader {\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  width: 15px;\n  height: 15px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n\n@keyframes spin {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/owner/property/property.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t  <a (click)=\"back()\" class=\"pull-left\" > <i class=\"glyphicon glyphicon-chevron-left\"></i> </a><br>\n  <i class=\"fa fa-user\"></i> <b>{{owner.username}}</b> | role :<b> Owner </b>.<br>\n      <div *ngIf=\"errorFlag\"\n        class=\"alert alert-danger\">\n        {{errorMsg}}\n      </div>\n      <div *ngIf=\"messageFlag\"\n        class=\"alert alert-success\">\n        {{message}}\n      </div>\n      <div class=\"row\">\n      \t<div class=\"col-xs-4\">\n      \t\t<div class=\"panel panel-primary\">\n\t\t\t  <div class=\"panel-heading\">\n\t\t\t    <h3 class=\"panel-title\">Add/Update property</h3>\n\t\t\t  </div>\n\t  \t\t<div class=\"panel-body\" style=\"color:black\">\n\t\t\t    <form class=\"form-horizontal\" #f=\"ngForm\">\n\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t    <label for=\"propertyId\" class=\"control-label\">Id</label>\n\t\t\t\t      <input type=\"text\" class=\"form-control\" id=\"propertyId\" name=\"propertyId\" placeholder=\"id\" [(ngModel)]=\"propertyId\" >\n\t\t\t\t  </div>\n\t\t\t\t  \t<div class=\"form-group\">\n\n\t\t\t\t    <label for=\"type\" class=\"control-label\">Type</label>\n\t\t\t\t      <select class=\"form-control\" id=\"type\" name=\"type\" [(ngModel)]=\"type\">\n\t\t\t\t      \t<option value=\"appartment\">appartment</option>\n\t\t\t\t      \t<option value=\"garage\">garage</option>\n\t\t\t\t      \t<option value=\"house\">house</option>\n\t\t\t\t      \t<option value=\"offices\">offices</option>\n\t\t\t\t      </select>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t    <label for=\"description\" class=\"control-label\">Description</label>\n\t\t\t\t      <input type=\"text\" class=\"form-control\" id=\"description\" name=\"description\" placeholder=\"Description\" [(ngModel)]=\"description\">\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t    <label for=\"size\" class=\"control-label\">Size</label>\n\t\t\t\t      <input type=\"number\" class=\"form-control\" id=\"size\" name=\"size\" placeholder=\"Size in m²\" [(ngModel)]=\"size\">\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t    <label for=\"price\" class=\"control-label\">Price</label>\n\t\t\t\t      <input type=\"number\" class=\"form-control\" id=\"price\" name=\"price\" placeholder=\"Price in $ USD\" [(ngModel)]=\"price\">\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t    <label for=\"address\" class=\"control-label\">Address</label>\n\t\t\t\t      <input type=\"text\" class=\"form-control\" id=\"addres\" name=\"address\" placeholder=\"Address\" [(ngModel)]=\"address\">\n\t\t\t\t      <button class=\"btn btn-primary\" (click)=\"getLatLan()\" >Get Location<div *ngIf=\"loading\" class=\"loader\"></div></button>\n\t\t\t\t      <agm-map *ngIf=\"showLocationFlag\" [zoom]=\"10\"  [latitude]=\"latitude\" [longitude]=\"longitude\">\n\t\t\t\t    \t<agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n\t\t\t\t\t</agm-map>\n\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t    <label for=\"latitude\" class=\"control-label\">Latitude</label>\n\t\t\t\t      <input type=\"number\" class=\"form-control\" id=\"latitude\" name=\"latitude\" placeholder=\"latitude\" [(ngModel)]=\"latitude\">\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t    <label for=\"longitude\" class=\"control-label\">Longitude</label>\n\t\t\t\t      <input type=\"number\" class=\"form-control\" id=\"longitude\" name=\"longitude\" placeholder=\"longitude\" [(ngModel)]=\"longitude\">\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t    <div>\n\t\t\t\t      <button (click)=\"save()\" class=\"btn btn-success\">Add</button> <button (click)=\"update()\" class=\"btn btn-info\">Update</button>\n\t\t\t\t    </div>\n\t\t\t\t  </div>\n\t\t\t\t</form>\n\t\t\t  </div>\n\t\t\t</div>\n      \t</div>\n      \t<div class=\"col-xs-8\">\t\t\n      \t\t<table class=\"table table-bordered\">\n\t          <tr>\n\t            <th>#</th>\n\t            <th>type</th>\n\t            <th>Available</th>\n\t            <th>Customer</th>\n\t            <th>Verified</th>\n\t            <th>actions</th>\n\t          </tr>\n\t          <tr *ngFor=\"let property of properties\">\n\t            <td>{{property._id}}</td>\n\t            <td>{{property.type}}</td>\n\t            <td>{{property.available}}</td>\n\t            <td><a *ngIf=\"property.customer\" [routerLink]=\"['../client']\" >{{property.customer.username}}</a></td>\n\t            <td>{{property.valid}}</td>\n\t            <td><button (click)=\"edit(property)\" class=\"btn btn-primary\" ><i class=\"glyphicon glyphicon-check\n\" ></i></button> | <button (click)=\"delete(property._id)\" class=\"btn btn-danger\" ><i class=\"glyphicon glyphicon-remove\n\" ></i></button></td>\n\t          </tr>\n\t      </table>\n      \t</div>\n      </div>\n\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/owner/property/property.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnerPropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_gmaps_service__ = __webpack_require__("../../../../../src/app/services/gmaps.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OwnerPropertyComponent = (function () {
    function OwnerPropertyComponent(userService, propertyService, activatedRoute, router, _location, sharedService, gmaps, titleService) {
        this.userService = userService;
        this.propertyService = propertyService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._location = _location;
        this.sharedService = sharedService;
        this.gmaps = gmaps;
        this.titleService = titleService;
    }
    OwnerPropertyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("My properties");
        this.owner = this.sharedService.user;
        this.ownerId = this.owner._id;
        this.loadData();
        this.activatedRoute.params
            .subscribe(function (params) {
            if (params['propertyId']) {
                _this.propertyService.findPropertyById(params['propertyId'])
                    .subscribe(function (property) {
                    _this.edit(property);
                });
            }
        });
    };
    OwnerPropertyComponent.prototype.save = function () {
        var _this = this;
        var property = { type: this.type, description: this.description,
            valid: false, available: true, size: this.size, price: this.price,
            owner: this.owner._id, latitude: this.latitude, longitude: this.longitude };
        this.propertyService.createProperty(this.ownerId, property)
            .subscribe(function (res) {
            _this.messageFlag = true;
            _this.message = 'Property created Successfully';
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'cannot create property';
        });
        this.loadData();
    };
    OwnerPropertyComponent.prototype.update = function () {
        var _this = this;
        var property = { _id: this.propertyId, type: this.type, description: this.description,
            valid: this.valid, available: this.available, size: this.size, price: this.price,
            owner: this.ownerId,
            latitude: this.latitude, longitude: this.longitude, customer: null, validatedBy: null };
        if (this.customer) {
            property.customer = this.customer._id;
        }
        if (this.validatedBy) {
            property.validatedBy = this.validatedBy._id;
        }
        this.propertyService.updateProperty(property._id, property)
            .subscribe(function (res) {
            _this.messageFlag = true;
            _this.message = 'Property Updated Successfully';
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'cannot update property';
        });
        this.loadData();
    };
    OwnerPropertyComponent.prototype.edit = function (property) {
        this.propertyId = property._id;
        this.type = property.type;
        this.description = property.description;
        this.size = property.size;
        this.price = property.price;
        this.latitude = property.latitude;
        this.longitude = property.longitude;
        this.customer = property.customer;
        this.valid = property.valid;
        this.available = property.available;
        this.validatedBy = property.validatedBy;
        this.showLocationFlag = true;
    };
    OwnerPropertyComponent.prototype.delete = function (propertyId) {
        var _this = this;
        this.propertyService.deleteProperty(propertyId)
            .subscribe(function (deleted) {
            _this.messageFlag = true;
            _this.message = 'Property deleted Successfully';
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'cannot delete property';
        });
        this.loadData();
    };
    OwnerPropertyComponent.prototype.back = function () {
        this._location.back();
    };
    OwnerPropertyComponent.prototype.loadData = function () {
        var _this = this;
        this.errorFlag = false;
        this.propertyService.findPropertiesByOwner(this.ownerId)
            .subscribe(function (properties) {
            _this.properties = properties;
        }, function (error) {
            console.log(error);
        });
    };
    OwnerPropertyComponent.prototype.getLatLan = function () {
        var _this = this;
        this.loading = true;
        this.showLocationFlag = false;
        this.gmaps.getLatLan(this.address)
            .subscribe(function (location) {
            _this.loading = false;
            _this.showLocationFlag = true;
            _this.latitude = location.lat();
            _this.longitude = location.lng();
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'cannot find address, please try another one';
        });
    };
    return OwnerPropertyComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], OwnerPropertyComponent.prototype, "propertyForm", void 0);
OwnerPropertyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-property',
        template: __webpack_require__("../../../../../src/app/components/owner/property/property.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/owner/property/property.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_property_service__["a" /* PropertyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_common__["f" /* Location */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__services_gmaps_service__["a" /* GMapsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_gmaps_service__["a" /* GMapsService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["b" /* Title */]) === "function" && _j || Object])
], OwnerPropertyComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=property.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/owner/review/review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/owner/review/review.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t <a (click)=\"back()\" class=\"pull-left\" > <i class=\"glyphicon glyphicon-chevron-left\"></i> </a><br>\n  <i class=\"fa fa-user\"></i> <b>{{owner.username}}</b> | role :<b> Owner </b>.<br>\n      <table class=\"table table-bordered\">\n          <tr>\n            <th>#</th>\n            <th>Rate</th>\n            <th>Text</th>\n            <th>Property</th>\n            <th>Customer</th>\n          </tr>\n          <tr *ngFor=\"let review of reviews\">\n            <td>{{review._id}}</td>\n            <td>{{review.rate}} stars</td>\n            <td>{{review.text}}</td>\n            <td><a [routerLink]=\"['../property',review.property._id]\">{{review.property.type}}</a></td>\n            <td><a [routerLink]=\"['../client',review.customer._id]\">{{review.customer.username}}</a></td>\n          </tr>\n      </table>\n\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/owner/review/review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnerReviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_review_service__ = __webpack_require__("../../../../../src/app/services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OwnerReviewComponent = (function () {
    function OwnerReviewComponent(userService, reviewService, propertyService, activatedRoute, router, _location, sharedService, titleService) {
        this.userService = userService;
        this.reviewService = reviewService;
        this.propertyService = propertyService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._location = _location;
        this.sharedService = sharedService;
        this.titleService = titleService;
    }
    OwnerReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("My reviews");
        this.owner = this.sharedService.user;
        this.ownerId = this.owner._id;
        this.reviewService.findAllReviews()
            .subscribe(function (reviews) {
            _this.reviews = [];
            _this.propertyService.findPropertiesByOwner(_this.ownerId)
                .subscribe(function (properties) {
                for (var i = 0; i < reviews.length; i++) {
                    for (var j = 0; j < properties.length; j++) {
                        if (reviews[i].property._id == properties[j]._id) {
                            _this.reviews.push(reviews[i]);
                        }
                    }
                }
            });
        }, function (error) {
            console.log(error);
        });
    };
    OwnerReviewComponent.prototype.back = function () {
        this._location.back();
    };
    return OwnerReviewComponent;
}());
OwnerReviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-review',
        template: __webpack_require__("../../../../../src/app/components/owner/review/review.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/owner/review/review.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_review_service__["a" /* ReviewService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common__["f" /* Location */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["b" /* Title */]) === "function" && _h || Object])
], OwnerReviewComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=review.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div *ngIf=\"errorFlag\"\n    class=\"alert alert-danger\">\n    {{errorMsg}}\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n                        <div class=\"box\">\n                            <h2 class=\"text-uppercase\">Login</h2>\n\n                            <p class=\"lead\">Already our customer?</p>\n                            <p class=\"text-muted\">Please provide your username and password</p>\n\n                            <hr>\n\n                            <form (ngSubmit) = \"login()\" #f=\"ngForm\" class=\"form-signin\">\n                                <label for=\"username\" >Username</label>\n                                <input type=\"text\" id=\"username\" name=\"username\" ngModel #username=\"ngModel\" class=\"form-control\" placeholder=\"Username\"  required autofocus>\n                                <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n                                  Please enter username!\n                                </span>\n                                <label for=\"password\" >Password</label>\n                                <input type=\"password\" id=\"password\" name=\"password\" ngModel #password=\"ngModel\" class=\"form-control\" placeholder=\"Password\"  required>\n                                <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n                              Please enter password!\n                            </span>\n                                <button class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!f.valid\" type=\"submit\">Sign in</button>\n                                <a class=\"btn btn-lg btn-danger btn-block\" [routerLink]=\"['/register']\">Register</a>\n                              </form>\n                        </div>\n                    </div>\n    </div>\n\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(userService, route, router, sharedService, titleService) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.titleService = titleService;
        this.errorMsg = 'Invalid username or password !';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Login");
        if (this.userService.loggedIn()) {
            this.router.navigate(['/profile']);
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        // fetching data from loginForm
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        //validation
        if (this.username == '' || this.password == '') {
            this.errorFlag = true;
            this.errorMsg = 'username and password are mandatory';
        }
        else {
            this.errorFlag = false;
            // calling client side userservice to send login information
            this.userService.login(this.username, this.password)
                .subscribe(function (data) {
                _this.sharedService.user = data;
                _this.router.navigate(['/profile']);
            }, function (error) {
                _this.errorFlag = true;
                _this.errorMsg = 'Invalid username or password !';
                console.log(error);
            });
        }
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* Title */]) === "function" && _f || Object])
], LoginComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t  <div *ngIf=\"errorFlag\"\n\t    class=\"alert alert-danger\">\n\t    {{errorMsg}}\n\t  </div>\n\t  <div *ngIf=\"messageFlag\"\n\t    class=\"alert alert-success\">\n\t    {{message}}\n\t  </div>\n      <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"box\">\n                            <form class=\"form-signin\">\n                                <h2 class=\"form-signin-heading\">Profile Information \n                                    <span *ngIf=\"!valid\" class=\"label label-danger\">Unverified</span>\n                                    <span *ngIf=\"valid\" class=\"label label-success\">Verified</span>\n                                    </h2>\n                                <label for=\"firstName\" >First Name</label>\n                                <input type=\"text\" id=\"firstName\" [(ngModel)]=\"firstName\" name=\"firstName\" class=\"form-control\" placeholder=\"First Name\" required>\n                                <label for=\"lastName\" >Last Name</label>\n                                <input type=\"text\" id=\"lastName\" name=\"lastName\" [(ngModel)]=\"lastName\" class=\"form-control\" placeholder=\"Last Name\" required>\n                                <label for=\"email\" >Email</label>\n                                <input type=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"Email\" required>\n                                <label for=\"phone\" >Phone</label>\n                                <input type=\"text\" id=\"phone\" name=\"phone\" [(ngModel)]=\"phone\" class=\"form-control\" placeholder=\"Phone\" required>\n                                <label for=\"dob\" >Date Of Birth</label>\n                                <input type=\"string\" id=\"dob\" name=\"dob\" [(ngModel)]=\"dob\" class=\"form-control\" placeholder=\"dd/mm/yyyy\" required>\n                                <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"update()\">Save</button>\n                                <button class=\"btn btn-lg btn-info btn-block\" [disabled]=\"!valid\" (click)=\"goToMenu()\">Go to Menu</button>     \n                                <button class=\"btn btn-lg btn-danger btn-block\" (click)=\"logout()\">Logout</button>\n                              </form>\n                        </div>\n                    </div>\n    </div>\n\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(userService, activatedRoute, router, sharedService, titleService) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.titleService = titleService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user;
        this.titleService.setTitle("Your profile : " + this.user['username']);
        this.userId = this.user['_id'];
        this.username = this.user['username'];
        this.email = this.user['email'];
        this.firstName = this.user['firstName'];
        this.lastName = this.user['lastName'];
        this.valid = this.user['valid'];
        this.phone = this.user['phone'];
        var fdate = this.user['dob'].split("-");
        var day = fdate[2].split("T")[0];
        var month = fdate[1];
        var year = fdate[0];
        var formattedDate = day + '/' + month + '/' + year;
        this.dob = formattedDate;
    };
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.errorFlag = false;
        this.messageFlag = false;
        this.user['email'] = this.email;
        this.user['firstName'] = this.firstName;
        this.user['lastName'] = this.lastName;
        this.user['phone'] = this.phone;
        this.user['dob'] = this.dob;
        this.userService.updateUser(this.userId, this.user)
            .subscribe(function (res) {
            _this.messageFlag = true;
            _this.message = 'informations are updated';
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'cannot update informations';
        });
    };
    ProfileComponent.prototype.goToMenu = function () {
        //redirect to menu
        this.router.navigate(['menu'], { relativeTo: this.activatedRoute });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */]) === "function" && _e || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\t  <div *ngIf=\"errorFlag\"\n\t    class=\"alert alert-danger\">\n\t    {{errorMsg}}\n\t  </div>\n      <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"box\">\n                            <h2 class=\"text-uppercase\">New account</h2>\n\n                            <p class=\"lead\">Not our registered customer yet?</p>\n                            <p>With registration with us you will have access to our services via the menu! The whole process will not take you more than a minute!</p>\n                            <p class=\"text-muted\">If you have any questions, please feel free to <a href=\"/contact\">contact us</a>, our customer service center is working for you 24/7.</p>\n\n                            <hr>\n\n                            <form class=\"form-signin\" (ngSubmit) = \"register()\" #f=\"ngForm\">\n                                <h2 class=\"form-signin-heading\">Register as new user</h2>\n                                <label for=\"username\" >Username</label>\n                                <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Username\" ngModel #username=\"ngModel\" required autofocus>\n                                <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n                                  Please enter username!\n                                </span>\n                                <label for=\"inputPassword\" >Password</label>\n                                <input type=\"password\" id=\"inputPassword\" name=\"password\" class=\"form-control\" placeholder=\"Password\" ngModel #password=\"ngModel\" required>\n                                <span class=\"help-block\" *ngIf=\"!password.valid && username.touched\">\n                                  Please enter password!\n                                </span>\n                                <label for=\"inputPassword2\" >Password confirmation</label>\n                                <input type=\"password\" id=\"inputPassword2\" name=\"pwdconfirmation\" class=\"form-control\" placeholder=\"Password confirmation\" ngModel #pwdconfirmation=\"ngModel\" required>\n                                <span class=\"help-block\" *ngIf=\"!pwdconfirmation.valid && pwdconfirmation.touched\">\n                                  Please enter password confirmation!\n                              </span>\n                                <label for=\"registerAs\" >Register As</label>\n                                <select id=\"registerAs\" class=\"form-control\" name=\"registerAs\" ngModel #registerAs=\"ngModel\" required >\n                                    <option value=\"owner\" >Owner</option>\n                                    <option value=\"customer\">Customer</option>\n                                </select>\n                                <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Next</button>        \n                                <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"cancel()\">Cancel</button>\n                              </form>\n                        </div>\n                    </div>\n    </div>\n      \n\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(userService, route, router, titleService) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.titleService = titleService;
        this.errorMsg = 'Invalid username!';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Register");
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        //hide error msg if already there
        this.errorFlag = false;
        // fetching data from registerForm
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.pwdconfirmation = this.registerForm.value.pwdconfirmation;
        this.registerAs = this.registerForm.value.registerAs;
        if (this.username == '' || this.password == '' || this.pwdconfirmation == '' || this.registerAs == '') {
            this.errorFlag = true;
            this.errorMsg = 'all fields are mandatory';
        }
        else {
            if (this.password == this.pwdconfirmation) {
                this.userService.register(this.username, this.password, this.registerAs)
                    .subscribe(function (data) {
                    _this.router.navigate(['/profile']);
                }, function (error) {
                    _this.errorMsg = error._body;
                });
            }
            else {
                this.errorFlag = true;
                this.errorMsg = "password and password confirmation are not the same";
            }
        }
    };
    RegisterComponent.prototype.cancel = function () {
        this.router.navigate(['/login']);
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registerForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */]) === "function" && _e || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/gmaps.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GMapsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GMapsService = (function (_super) {
    __extends(GMapsService, _super);
    function GMapsService(__loader, __zone) {
        var _this = _super.call(this, __loader, __zone) || this;
        _this.__loader = __loader;
        _this.__zone = __zone;
        return _this;
    }
    GMapsService.prototype.getLatLan = function (address) {
        console.log('Getting Address - ', address);
        var geocoder = new google.maps.Geocoder();
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    observer.next(results[0].geometry.location);
                    observer.complete();
                }
                else {
                    console.log('Error - ', results, ' & Status - ', status);
                    observer.next({});
                    observer.complete();
                }
            });
        });
    };
    return GMapsService;
}(__WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* GoogleMapsAPIWrapper */]));
GMapsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__agm_core__["c" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__agm_core__["c" /* MapsAPILoader */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _b || Object])
], GMapsService);

var _a, _b;
//# sourceMappingURL=gmaps.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/property.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PropertyService = (function () {
    function PropertyService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    PropertyService.prototype.createProperty = function (ownerId, property) {
        return this._http.post(this.baseUrl + '/api/property/owner/' + ownerId, { property: property })
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PropertyService.prototype.findPropertiesByOwner = function (ownerId) {
        return this._http.get(this.baseUrl + '/api/property/owner/' + ownerId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PropertyService.prototype.findAllProperties = function () {
        return this._http.get(this.baseUrl + '/api/property')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PropertyService.prototype.findPropertyById = function (propertyId) {
        return this._http.get(this.baseUrl + '/api/property/' + propertyId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PropertyService.prototype.updateProperty = function (propertyId, property) {
        return this._http.put(this.baseUrl + '/api/property/' + propertyId, { property: property })
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PropertyService.prototype.deleteProperty = function (propertyId) {
        return this._http.delete(this.baseUrl + '/api/property/' + propertyId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return PropertyService;
}());
PropertyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PropertyService);

var _a;
//# sourceMappingURL=property.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/review.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewService = (function () {
    function ReviewService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    ReviewService.prototype.createReview = function (propertyId, customerId, review) {
        review.customer = customerId;
        review.property = propertyId;
        return this._http.post(this.baseUrl + '/api/review', { review: review })
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ReviewService.prototype.findReviewsForProperty = function (propertyId) {
        return this._http.get(this.baseUrl + '/api/review/property/' + propertyId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ReviewService.prototype.findAllReviews = function () {
        return this._http.get(this.baseUrl + '/api/review')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ReviewService.prototype.findReviewById = function (reviewId) {
        return this._http.get(this.baseUrl + '/api/review/' + reviewId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ReviewService.prototype.updateReview = function (reviewId, review) {
        return this._http.put(this.baseUrl + '/api/review/' + reviewId, { review: review })
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ReviewService.prototype.deleteReview = function (reviewId) {
        return this._http.delete(this.baseUrl + '/api/review/' + reviewId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return ReviewService;
}());
ReviewService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ReviewService);

var _a;
//# sourceMappingURL=review.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedService = (function () {
    function SharedService() {
        this.user = '';
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SharedService);

//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// injecting service into module
var UserService = (function () {
    function UserService(_http, sharedService, router) {
        this._http = _http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
    }
    UserService.prototype.login = function (username, password) {
        this.options.withCredentials = true; // jga
        var body = {
            username: username,
            password: password
        };
        return this._http.post(this.baseUrl + '/api/login', body, this.options)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/logout', '', this.options)
            .map(function (res) {
            var data = res;
        });
    };
    UserService.prototype.register = function (username, password, role) {
        this.options.withCredentials = true;
        var user = {
            username: username,
            password: password,
            role: role
        };
        return this._http.post(this.baseUrl + '/api/register', user, this.options)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user; // setting user so as to share with all components 
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.createUser = function (user) {
        return this._http.post(this.baseUrl + '/api/user', { user: user })
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findAllUsers = function () {
        return this._http.get(this.baseUrl + '/api/users')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this._http.get(this.baseUrl + '/api/user?username=' + username)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this._http.get(this.baseUrl + '/api/user?username=' + username + "&password=" + password)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this._http.put(this.baseUrl + '/api/user/' + userId, { user: user });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this._http.delete(this.baseUrl + '/api/user/' + userId).map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3100'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
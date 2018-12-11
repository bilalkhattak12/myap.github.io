(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <ng-flash-message></ng-flash-message>\n  \n  <router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: appRoutes, firebaseConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/clients/clients.component */ "./src/app/components/clients/clients.component.ts");
/* harmony import */ var _components_client_details_client_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/client-details/client-details.component */ "./src/app/components/client-details/client-details.component.ts");
/* harmony import */ var _components_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/add-client/add-client.component */ "./src/app/components/add-client/add-client.component.ts");
/* harmony import */ var _components_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/edit-client/edit-client.component */ "./src/app/components/edit-client/edit-client.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");






//angularFire Imports



//Components Imports












//Service Imports



var appRoutes = [
    { path: '', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"] },
    { path: 'add-client', component: _components_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_13__["AddClientComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'client/:id', component: _components_client_details_client_details_component__WEBPACK_IMPORTED_MODULE_12__["ClientDetailsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'edit-client/:id', component: _components_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_14__["EditClientComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'settings', component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_19__["SettingsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__["PageNotFoundComponent"] },
];
var firebaseConfig = {
    apiKey: "AIzaSyBpjgEbTRrexx74teMg54hDYHXkIPNidUs",
    authDomain: "clientpanel-8da7f.firebaseapp.com",
    databaseURL: "https://clientpanel-8da7f.firebaseio.com",
    storageBucket: "clientpanel-8da7f.appspot.com",
    messagingSenderId: "611836031015"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_11__["ClientsComponent"],
                _components_client_details_client_details_component__WEBPACK_IMPORTED_MODULE_12__["ClientDetailsComponent"],
                _components_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_13__["AddClientComponent"],
                _components_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_14__["EditClientComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SidebarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
                _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_19__["SettingsComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__["PageNotFoundComponent"],
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { enableTracing: true }),
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessagesModule"].forRoot(),
                angularfire2__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(firebaseConfig)
            ],
            providers: [
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"],
                _services_client_service__WEBPACK_IMPORTED_MODULE_21__["ClientService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-client/add-client.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/add-client/add-client.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWNsaWVudC9hZGQtY2xpZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/add-client/add-client.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-client/add-client.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"> \n  <div class=\"col-md-6\">\n   <a routerLink=\"/\" href=\"#\" class=\"btn btn-Link\" ><i class=\"fa fa-arrow-circle-o-left\"></i>Back To Dashboard</a>\n  </div>\n   <div class=\"col-md-6\">\n     \n   </div>\n</div>\n\n<div class=\"card\">\n   <div class=\"card-header\">\n     add Client\n    </div>\n    <div class=\"card-block\">\n   \n            <form novalidate #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n         \n          <div class=\"form-group\">\n         \n            <label for=\"firstName\">firstName</label>\n             <input \n                type=\"text\" \n                class=\"form-control\"\n                [(ngModel)] =\"client.firstName\"\n                name=\"firstName\"\n                #clientFirstName=\"ngModel\"\n                minlength=\"2\"\n                required\n             >\n             <div *ngIf=\"clientFirstName.errors?.required && clientFirstName.touched\"\n              class=\"alert alert-danger\">\n               FirstName is required\n             </div>\n             <div *ngIf=\"clientFirstName.errors?.minlength && clientFirstName.touched\"\n              class=\"alert alert-danger\">\n               Must be at least  2 characters\n             </div>\n          </div>\n\n          <div class=\"form-group\">\n              <label for=\"lastName\">lastName</label>\n               <input \n                  type=\"text\" \n                  class=\"form-control\"\n                  [(ngModel)] =\"client.lastName\"\n                  name=\"lastName\"\n                  #clientLastName=\"ngModel\"\n                  minlength=\"2\"\n                  required\n               >\n               <div *ngIf=\"clientLastName.errors?.required && clientLastName.touched\"\n                class=\"alert alert-danger\">\n                 LastName is required\n               </div>\n               <div *ngIf=\"clientLastName.errors?.minlength && clientLastName.touched\"\n                class=\"alert alert-danger\">\n                 Must be at least  2 characters\n               </div>\n               </div>\n                <div class=\"form-group\">\n                  <label for=\"email\">Email</label>\n                   <input \n                      type=\"text\" \n                      class=\"form-control\"\n                      [(ngModel)] =\"client.email\"\n                      name=\"email\"\n                      #clientEmail=\"ngModel\"\n                      minlength=\"2\"\n                      required\n                   >\n                   <div *ngIf=\"clientEmail.errors?.required && clientEmail.touched\"\n                    class=\"alert alert-danger\">\n                     Email is required\n                   </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"phone\">Phone</label>\n                    <input \n                      type=\"text\"\n                      class=\"form-control\"\n                      [(ngModel)]=\"client.phone\"\n                      name=\"phone\"\n                      #clientPhone=\"ngModel\"\n                      minlength=\"10\"\n                      required\n                    >\n                      \n                       <div *ngIf=\"clientPhone.errors?.minlength && clientPhone.touched\" class=\"alert alert-danger\">\n                          Add a valid phone number\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"balance\">Balance</label>\n                         <input \n                            type=\"number\" \n                            class=\"form-control\"\n                            [(ngModel)] =\"client.balance\"\n                            name=\"balance\"\n                            #clientPhone=\"ngModel\"\n                            [disabled]=\"disableBalanceOnAdd\"\n                         >\n                   </div>\n             <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Submit\">\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/add-client/add-client.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/add-client/add-client.component.ts ***!
  \***************************************************************/
/*! exports provided: AddClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClientComponent", function() { return AddClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");






var AddClientComponent = /** @class */ (function () {
    function AddClientComponent(ngFlashMessageService, router, clientService, settingsService) {
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
        this.clientService = clientService;
        this.settingsService = settingsService;
        this.client = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            balance: 0
        };
        this.disableBalanceOnAdd = false;
    }
    AddClientComponent.prototype.ngOnInit = function () {
        // this.disableBalanceOnAdd = this.settingsService.getSettings().disableBalanceOnAdd;
    };
    AddClientComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (this.disableBalanceOnAdd) {
            value.balance = 0;
        }
        if (!valid) {
            this.ngFlashMessageService.showFlashMessage({
                // Array of messages each will be displayed in new line
                messages: ["please fill in all fields"],
                timeout: 4000,
                type: 'danger',
            });
            this.router.navigate(['add-client']);
        }
        else {
            //Add new client
            this.clientService.newClient(value);
            // console.log(value)
            this.ngFlashMessageService.showFlashMessage({
                // Array of messages each will be displayed in new line
                messages: ["New Client  added"],
                // Whether the flash can be dismissed by the user defaults to false
                dismissible: true,
                // Time after which the flash disappears defaults to 2000ms
                timeout: 4000,
                // Type of flash message, it defaults to info and success, warning, danger types can also be used
                type: 'success',
            });
            this.router.navigate(['/']);
        }
    };
    AddClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-client',
            template: __webpack_require__(/*! ./add-client.component.html */ "./src/app/components/add-client/add-client.component.html"),
            styles: [__webpack_require__(/*! ./add-client.component.css */ "./src/app/components/add-client/add-client.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]])
    ], AddClientComponent);
    return AddClientComponent;
}());



/***/ }),

/***/ "./src/app/components/client-details/client-details.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/client-details/client-details.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50LWRldGFpbHMvY2xpZW50LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/client-details/client-details.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/client-details/client-details.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n   <div class=\"col-md-6\">\n     <a routerLink=\"/\" class=\"btn btn-link\"><i class=\"fa fa-arrow-circle-o-left\"></i>Back To Dashboard</a>\n   </div>\n    <div class=\"col-md-6\">\n        <div class=\"btn-group pull-right\">\n           <a [routerLink]=\"['/edit-client/'+id]\" class=\"btn btn-secondary\" >Edit</a>\n           <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDeleteClick()\">Delete</button>\n        </div>\n    </div>\n</div>\n<hr>\n\n<div *ngIf=\"client\" class=\"card\">\n  <h3 class=\"card-header\">{{client.firstName}} {{client.lastName}}</h3>\n  <div class=\"card-block\">\n      <div class=\"row\">\n          <div class=\"col-md-8\">\n             <h4>Client ID:{{id}}</h4>\n          </div>\n           <div class=\"col-md-4\"> \n             <!---Balance goes here---->\n             <h3 class=\"pull-right\">\n                 Balance:\n                 <span\n                  [class.text-danger]=\"hasBalance\"\n                  [class.text-success]=\"!hasBalance\"\n                 >\n                 {{client.balance | currency:\"USD\":true}}\n                 </span>\n                <small>\n                    <a (click)=\"showBalanceUpdateInput =!showBalanceUpdateInput\"><i class=\"fa fa-pencil\"></i></a>\n                </small>\n             </h3>\n             <div class=\"clearfix\">\n                <form *ngIf=\"showBalanceUpdateInput\" (submit)=\"updateBalance(id)\" class=\"form-inline pull-right\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" [(ngModel)]=\"client.balance\" name=\"balance\" class=\"form-control\">\n                  </div>\n                  <button type=\"submit\" class=\"btn btn-primary\">Update</button>\n                </form>\n              </div>\n           </div> \n      </div>\n        <hr>\n       <ul class=\"list-group\">\n           <li class=\"list-group-item\">Contact Email:{{client.email}}</li>\n           <li class=\"list-group-item\">Contact Phone:{{client.phone}}</li>\n       </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/client-details/client-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/client-details/client-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: ClientDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailsComponent", function() { return ClientDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



//import {FlashMessagesService} from 'angular2-flash-messages';


var ClientDetailsComponent = /** @class */ (function () {
    function ClientDetailsComponent(clientService, router, route, ngFlashMessageService
    // public flashMessagesService:FlashMessagesService
    ) {
        this.clientService = clientService;
        this.router = router;
        this.route = route;
        this.ngFlashMessageService = ngFlashMessageService;
        this.hasBalance = false;
        this.showBalanceUpdateInput = false;
    }
    ClientDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get ID
        this.id = this.route.snapshot.params['id'];
        // console.log(this.id);
        //Get client
        this.clientService.getClient(this.id).valueChanges().subscribe(function (client) {
            if (client.balance > 0) {
                _this.hasBalance = true;
            }
            _this.client = client;
        });
        //   console.log(this.client);
    };
    //updateBalance
    ClientDetailsComponent.prototype.updateBalance = function (id) {
        this.clientService.updateClient(this.id, this.client);
        this.ngFlashMessageService.showFlashMessage({
            messages: ["Balance updated"], timeout: 4000, type: 'success',
        });
        this.router.navigate(['/client/' + this.id]);
        console.log(this.client);
    };
    //Delete client
    ClientDetailsComponent.prototype.onDeleteClick = function () {
        if (confirm("Are You sure to delete?")) {
            this.clientService.deleteClient(this.id);
            this.ngFlashMessageService.showFlashMessage({
                messages: ["Client Deleted"], timeout: 4000, type: 'success',
            });
            this.router.navigate(['/']);
        }
    };
    ClientDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-details',
            template: __webpack_require__(/*! ./client-details.component.html */ "./src/app/components/client-details/client-details.component.html"),
            styles: [__webpack_require__(/*! ./client-details.component.css */ "./src/app/components/client-details/client-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]
            // public flashMessagesService:FlashMessagesService
        ])
    ], ClientDetailsComponent);
    return ClientDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/clients/clients.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/clients/clients.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/clients/clients.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/clients/clients.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n     <h2><i class=\"fa fa-users\"></i>Clients</h2>\n  </div>\n  <div class=\"col-md-6\">\n     <h5 class=\"pull-right text-muted\">total Owed:{{totalOwed | currency:\"USD\":true}}</h5>\n  </div>\n</div>\n\n<table *ngIf=\"clients?.length > 0;else noClients\" class=\"table table-striped\">\n<thead class=\"thead-inverse\">\n  <tr>\n<th>ID</th>\n<th>Name</th>\n<th>LastName</th>\n<th>Email</th>\n<th>Balance</th>\n<th></th>\n  </tr>\n</thead>\n<tbody>\n  <tr *ngFor=\"let client of clients\">\n   <td>{{client.id}}</td>\n   <td>{{client.firstName}}</td>\n   <td>{{client.lastName}}</td>\n   <td>{{client.email}}</td>\n   <td>{{client.balance | currency:\"USD\":true}}</td>\n   <td><a [routerLink] =\"['/client/'+client.id]\" href=\"\" class=\"btn btn-secondary btn-sm\"><i class=\"fa fa-arrow-circle-o-right\"></i> Details</a></td>\n   \n  </tr>\n</tbody>\n</table>\n\n<ng-template #noClients>\n  <hr>\n  <h5>there are no clients in the system</h5>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/clients/clients.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/clients/clients.component.ts ***!
  \*********************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");



var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(clientService) {
        this.clientService = clientService;
    }
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.getClients(function (clients) {
            _this.clients = clients;
            for (var i = 0; i < _this.clients.length; i++) {
                console.log(_this.clients[i]);
            }
            _this.gettotalOwed();
        });
    };
    ClientsComponent.prototype.gettotalOwed = function () {
        var total = 0;
        for (var i = 0; i < this.clients.length; i++) {
            total += parseFloat(this.clients[i].balance);
        }
        this.totalOwed = total;
        console.log(this.totalOwed);
    };
    ClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/components/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.css */ "./src/app/components/clients/clients.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-10\">\r\n    <app-clients></app-clients>   \r\n  </div>\r\n   <div class=\"col-md-2\">\r\n    <app-sidebar></app-sidebar>\r\n   </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var x = 8;
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-client/edit-client.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/edit-client/edit-client.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1jbGllbnQvZWRpdC1jbGllbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/edit-client/edit-client.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-client/edit-client.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"> \n  <div class=\"col-md-6\">\n   <a [routerLink]=\"['/client/'+id]\" href=\"#\" class=\"btn btn-Link\" ><i class=\"fa fa-arrow-circle-o-left\"></i>Back To Details</a>\n  </div>\n   <div class=\"col-md-6\">\n     \n   </div>\n</div>\n\n<div class=\"card\">\n   <div class=\"card-header\">\n     Edit  Client\n    </div>\n    <div class=\"card-block\">\n        <!-- <form novalidate #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\"> -->\n            <form novalidate #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n         \n          <div class=\"form-group\">\n            <label for=\"firstName\">firstName</label>\n             <input \n                type=\"text\" \n                class=\"form-control\"\n                [(ngModel)] =\"client.firstName\"\n                name=\"firstName\"\n                #clientFirstName=\"ngModel\"\n                minlength=\"2\"\n                required\n             >\n             <div *ngIf=\"clientFirstName.errors?.required && clientFirstName.touched\"\n              class=\"alert alert-danger\">\n               FirstName is required\n             </div>\n             <div *ngIf=\"clientFirstName.errors?.minlength && clientFirstName.touched\"\n              class=\"alert alert-danger\">\n               Must be at least  2 characters\n             </div>\n          </div>\n\n          <div class=\"form-group\">\n              <label for=\"lastName\">lastName</label>\n               <input \n                  type=\"text\" \n                  class=\"form-control\"\n                  [(ngModel)] =\"client.lastName\"\n                  name=\"lastName\"\n                  #clientLastName=\"ngModel\"\n                  minlength=\"2\"\n                  required\n               >\n               <div *ngIf=\"clientLastName.errors?.required && clientLastName.touched\"\n                class=\"alert alert-danger\">\n                 LastName is required\n               </div>\n               <div *ngIf=\"clientLastName.errors?.minlength && clientLastName.touched\"\n                class=\"alert alert-danger\">\n                 Must be at least  2 characters\n               </div>\n               </div>\n                <div class=\"form-group\">\n                  <label for=\"email\">Email</label>\n                   <input \n                      type=\"text\" \n                      class=\"form-control\"\n                      [(ngModel)] =\"client.email\"\n                      name=\"email\"\n                      #clientEmail=\"ngModel\"\n                      minlength=\"2\"\n                      required\n                   >\n                   <div *ngIf=\"clientEmail.errors?.required && clientEmail.touched\"\n                    class=\"alert alert-danger\">\n                     Email is required\n                   </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"phone\">Phone</label>\n                    <input \n                      type=\"text\"\n                      class=\"form-control\"\n                      [(ngModel)]=\"client.phone\"\n                      name=\"phone\"\n                      #clientPhone=\"ngModel\"\n                      minlength=\"10\"\n                      required\n                    >\n                      \n                       <div *ngIf=\"clientPhone.errors?.minlength && clientPhone.touched\" class=\"alert alert-danger\">\n                          Add a valid phone number\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"balance\">Balance</label>\n                         <input \n                            type=\"number\" \n                            class=\"form-control\"\n                            [(ngModel)] =\"client.balance\"\n                            name=\"balance\"\n                            #clientPhone=\"ngModel\"\n                            [disabled]=\"disableBalanceOnEdit\"\n                         >\n                   </div>\n             <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Submit\">\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/edit-client/edit-client.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/edit-client/edit-client.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditClientComponent", function() { return EditClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var EditClientComponent = /** @class */ (function () {
    function EditClientComponent(ngFlashMessageService, router, clientService, route) {
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
        this.clientService = clientService;
        this.route = route;
        this.client = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            balance: 0
        };
        this.disableBalanceOnEdit = true;
    }
    EditClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.clientService.getClient(this.id).valueChanges().subscribe(function (client) {
            if (client.balance > 0)
                _this.client = client;
            console.log(client);
        });
    };
    EditClientComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            this.ngFlashMessageService.showFlashMessage({
                messages: ["please fill in all fields"],
                timeout: 4000,
                type: 'danger',
            });
            this.router.navigate(['edit-client/' + this.id]);
        }
        //Update the client
        else {
            this.clientService.updateClient(this.id, value);
            this.ngFlashMessageService.showFlashMessage({
                messages: ["Client updated"],
                dismissible: true,
                timeout: 4000,
                type: 'success',
            });
            this.router.navigate(['/client/' + this.id]);
        }
    };
    EditClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-client',
            template: __webpack_require__(/*! ./edit-client.component.html */ "./src/app/components/edit-client/edit-client.component.html"),
            styles: [__webpack_require__(/*! ./edit-client.component.css */ "./src/app/components/edit-client/edit-client.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EditClientComponent);
    return EditClientComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 offset-md-3\">\n     <div class=\"card\">\n         <div class=\"card-block\">\n           <img class=\"max-auto d-block\" src=\"/assets/img/logo.png\" alt=\"\">\n             <h1 class=\"text-center\">Login</h1>\n              <form (submit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                  <label for=\"email\">Email</label>\n                  <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" required>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">Password</label>\n                    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" required>\n                  </div>\n                   <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Submit\">\n              </form>\n         </div>\n     </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, ngFlashMessageService) {
        this.authService = authService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.login(this.email, this.password)
            .then(function (res) {
            _this.ngFlashMessageService.showFlashMessage({
                // Array of messages each will be displayed in new line
                messages: ["you are logged in"], timeout: 4000, type: 'success',
            });
            _this.router.navigate(['/']);
        })
            .catch(function (err) {
            _this.ngFlashMessageService.showFlashMessage({
                // Array of messages each will be displayed in new line
                messages: [err.message], timeout: 4000, type: 'danger',
            });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n  <div class=\"container\">\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">ClientPanel</a>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li *ngIf =\"isLoggedIn\" class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/\">Dashboard</a>\n          </li> \n        </ul>    \n\n        <ul class=\"navbar-nav ml-auto\">\n          <li *ngIf=\"!isLoggedIn && showRegister\" class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/register\">Register</a>\n          </li> \n          <li *ngIf=\"!isLoggedIn && showRegister\" class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/login\">Login</a>\n          </li> \n          <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">{{loggedInUser}}</a>\n          </li> \n          <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/settings\">Register</a>\n          </li>\n        \n          <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" (click)=\"onLogoutClick()\">Logout</a>\n          </li> \n        </ul>   \n      </div>\n      </div>\n    </nav>\n    <br><br> "

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");





//import 'rxjs/add/operator/map';

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, ngflashMessagesService, settingsService) {
        this.authService = authService;
        this.router = router;
        this.ngflashMessagesService = ngflashMessagesService;
        this.settingsService = settingsService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth(function (auth) {
            if (auth) {
                _this.isLoggedIn = true;
                _this.loggedInUser = auth.email;
            }
            else {
                _this.isLoggedIn = false;
            }
            _this.showRegister = _this.settingsService.getSettings().allowRegistration;
        });
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        {
            this.ngflashMessagesService.showFlashMessage({
                // Array of messages each will be displayed in new line
                messages: ["you are logged  out"], timeout: 4000, type: 'success',
            });
            this.router.navigate(['/login']);
        }
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  page-not-found \n</h1>\n"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 offset-md-3\">\n     <div class=\"card\">\n         <div class=\"card-block\">\n           <img class=\"max-auto d-block\" src=\"/assets/img/logo.png\" alt=\"\">\n             <h1 class=\"text-center\">Redister</h1>\n              <form (submit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                  <label for=\"email\">Email</label>\n                  <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" required>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">Password</label>\n                    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" required>\n                  </div>\n                   <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Submit\">\n              </form>\n         </div>\n     </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, ngFlashMessageService) {
        this.authService = authService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.register(this.email, this.password)
            .then(function (res) {
            _this.ngFlashMessageService.showFlashMessage({
                // Array of messages each will be displayed in new line
                messages: ["New user registered"], timeout: 4000, type: 'success',
            });
            _this.router.navigate(['/']);
        })
            .catch(function (err) {
            _this.ngFlashMessageService.showFlashMessage({
                // Array of messages each will be displayed in new line
                messages: [err.message], timeout: 4000, type: 'danger',
            });
            _this.router.navigate(['/register']);
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/settings/settings.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/settings/settings.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n   <div class=\"col-md-6 \" >\n     <a routerLink=\"/\" class=\"btn btn-link\"><i class=\" fa fa-arrow-circle-o-left\"></i>Back To Dashboard</a>\n   </div>\n   <div class=\"col-md-6 \" >\n\n  </div>\n</div>\n\n<div class=\"card\">\n   <h3 class=\"card-header\">\n       Edit Settings\n   </h3> \n    <div class=\"card-block\">\n       <form (submit)=\"onSubmit()\">\n          <div class=\"form-group\">\n             <label>Allow Registration</label>\n             <input type=\"checkbox\" [checked]=\"settings.allowRegistration\" (change)=\"settings.allowRegistration = !settings.allowRegistration\" name=\"allowRegistration\">\n          </div>\n          <div class=\"form-group\">\n            <label>Disable Balance On Add</label>\n            <input type=\"checkbox\" [checked]=\"settings.disableBalanceOnAdd\" (change)=\"settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd\" name=\"disableBalanceOnAdd\">\n          </div>\n          <div class=\"form-group\">\n            <label>Disable Balance On Edit</label>\n            <input type=\"checkbox\" [checked]=\"settings.disableBalanceOnEdit\" (change)=\"settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit\" name=\"disableBalanceOnEdit\">\n          </div>\n          <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Submit\">\n       </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(SettingsService, router, ngFlashMessageService) {
        this.SettingsService = SettingsService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.settings = this.SettingsService.getSettings();
    };
    SettingsComponent.prototype.onSubmit = function () {
        this.SettingsService.changeSettings(this.settings);
        this.ngFlashMessageService.showFlashMessage({
            messages: ['Settings saved'], timeout: 4000, type: 'success',
        });
        this.router.navigate(['/settings']);
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/components/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/add-client\" href=\"#\" class=\" btn btn-success btn-block\">\n  <i class=\"fa fa-plus\"></i>Add New Client</a>"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



//import 'rxjs/ad/operator/map';



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, afAuth, authService) {
        this.router = router;
        this.afAuth = afAuth;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.afAuth.authState.subscribe(function (auth) {
            if (!auth) {
                subject.next(false);
                _this.router.navigate(['/login']);
            }
            else {
                subject.next(true);
            }
        });
        return subject.asObservable();
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);



var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    //check user status
    AuthService.prototype.getAuth = function (callback) {
        this.afAuth.authState.subscribe(function (auth) {
            callback(auth);
        });
    };
    //register
    AuthService.prototype.register = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    //sign out
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/client.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/client.service.ts ***!
  \********************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);



var ClientService = /** @class */ (function () {
    function ClientService(af) {
        this.af = af;
        this.clients = [];
    }
    ClientService.prototype.getClients = function (callback) {
        this.af.list('/clients').valueChanges().subscribe(function (clients) {
            callback(clients);
        });
    };
    ClientService.prototype.newClient = function (client) {
        var pushId = this.af.createPushId();
        var item = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, client, { id: pushId });
        this.af.list('/clients').set(item.id, item);
        console.log(client);
    };
    ClientService.prototype.getClient = function (id) {
        this.client = this.af.object('/clients/' + id);
        return this.client;
    };
    ClientService.prototype.updateClient = function (id, client) {
        // return this.clients.update(id,client);
        this.af.list('/clients').update(id, client);
    };
    ClientService.prototype.deleteClient = function (id) {
        //  return this.clients.splice(
        this.af.list('clients').remove(id);
    };
    ClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/services/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsService = /** @class */ (function () {
    function SettingsService() {
        this.settings = {
            allowRegistration: true,
            disableBalanceOnAdd: true,
            isableBalanceOnEdit: true
        };
        if (localStorage.getItem('settings') != null) {
            this.settings = JSON.parse(localStorage.getItem('settings'));
        }
    }
    SettingsService.prototype.getSettings = function () {
        return this.settings;
    };
    SettingsService.prototype.changeSettings = function (settings) {
        localStorage.setItem('settings', JSON.stringify(settings));
    };
    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bilal\Desktop\project\clientpanel\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-home-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-login/form-login.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-login/form-login.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form autocomplete=\"off\" novalidate [formGroup]=\"form\" (submit)=\"submitForm()\">\n    <input type=\"email\" name=\"email-login\" id=\"email-login\" required minlength=\"5\" formControlName = \"email\" placeholder=\"Votre email\">\n  \n    <input type=\"password\" name=\"password-login\" id=\"password-login\" required minlength=\"5\" formControlName = \"password\" placeholder=\"Votre mot de passe\">\n  \n    <button type=\"submit\" [disabled]='!form.valid'>OK</button>\n  </form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-media/form-media.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-media/form-media.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\" (submit)=\"submitForm()\" id=\"mediaFormUploader\">\n    <input type=\"file\" id=\"source\" (change)=\"onFileChange($event)\" #fileInput >\n    <button type=\"submit\" class=\"addMedia\" [disabled]=\"base64image === null\">Télécharger</button>\n</form>\n\n<img *ngIf=\"base64image !== null\" [src]=\"base64image\" alt=\"Nouvelle image\">");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/home-page/home-page.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/home-page/home-page.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-form-login></app-form-login>\n<app-form-media></app-form-media>");

/***/ }),

/***/ "./src/app/components/form-login/form-login.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/form-login/form-login.component.ts ***!
  \***************************************************************/
/*! exports provided: FormLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoginComponent", function() { return FormLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/crud/crud.service */ "./src/app/services/crud/crud.service.ts");

/*
Imports & definition
*/
// Imports


// Inner

// Definition
let FormLoginComponent = 
//
/* Export */
class FormLoginComponent {
    // Instanciation
    constructor(FormBuilder, CrudService) {
        this.FormBuilder = FormBuilder;
        this.CrudService = CrudService;
        this.passwordError = false;
        this.formError = false;
        this.errorMessage = '';
        //
        /*
        Methods
        */
        // Reset form
        this.resetForm = () => {
            // Set validator
            this.form = this.FormBuilder.group({
                email: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                password: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
        };
        // Submit form
        this.submitForm = () => {
            // Use the service to connect user
            this.CrudService.createItem('login', this.form.value)
                .then(user => console.log(user))
                .catch(err => console.log(err));
        };
    }
    ;
    //
    /*
    Hooks
    */
    ngOnInit() {
        this.resetForm();
    }
    ;
    ngOnChanges(changes) {
    }
    ;
};
FormLoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] }
];
FormLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-login/form-login.component.html")).default
    })
    //
    /* Export */
], FormLoginComponent);

;
//


/***/ }),

/***/ "./src/app/components/form-login/module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/form-login/module.ts ***!
  \*************************************************/
/*! exports provided: FormLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoginModule", function() { return FormLoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _form_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-login.component */ "./src/app/components/form-login/form-login.component.ts");

/*
Imports
*/
// Angular




// Inner

// 
/*
Definition & export
*/
let FormLoginModule = class FormLoginModule {
};
FormLoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_form_login_component__WEBPACK_IMPORTED_MODULE_5__["FormLoginComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        exports: [_form_login_component__WEBPACK_IMPORTED_MODULE_5__["FormLoginComponent"]]
    })
], FormLoginModule);

;
//


/***/ }),

/***/ "./src/app/components/form-media/form-media.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/form-media/form-media.component.ts ***!
  \***************************************************************/
/*! exports provided: FormMediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormMediaComponent", function() { return FormMediaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/crud/crud.service */ "./src/app/services/crud/crud.service.ts");
/* harmony import */ var _services_content_content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/content/content.service */ "./src/app/services/content/content.service.ts");

/*
Imports & definition
*/
// Imports


// Inner


// Definition
let FormMediaComponent = 
//
/* Export */
class FormMediaComponent {
    // Instanciation
    constructor(FormBuilder, CrudService, ContentService) {
        this.FormBuilder = FormBuilder;
        this.CrudService = CrudService;
        this.ContentService = ContentService;
        this.base64image = null;
        //
        /*
        Methods
        */
        // Reset form
        this.resetForm = () => {
            // Set validator
            this.form = this.FormBuilder.group({
                source: null
            });
            this.base64image = null;
        };
        // Get form change
        this.onFileChange = (event) => {
            // Geet event data
            let reader = new FileReader();
            if (event.target.files && event.target.files.length > 0) {
                // Set data to extract
                let file = event.target.files[0];
                reader.readAsDataURL(file);
                reader.onload = (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    // Set image to display
                    this.base64image = reader.result;
                    // Set image data to save
                    this.formData = {
                        filename: file.name,
                        filetype: file.type,
                        total: data.total,
                        value: yield this.ContentService.resizeImage(reader.result, 800, 800)
                    };
                });
            }
        };
        // Submit form
        this.submitForm = () => {
            // Use the service to upload image
            this.CrudService.createItem('media', this.formData)
                .then(spaceResponse => {
                console.log(spaceResponse);
                this.resetForm();
            })
                .catch(spaceError => {
                console.log(spaceError);
            });
        };
    }
    ;
    //
    /*
    Hooks
    */
    ngOnInit() {
        this.resetForm();
    }
    ;
};
FormMediaComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] },
    { type: _services_content_content_service__WEBPACK_IMPORTED_MODULE_4__["ContentService"] }
];
FormMediaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-media',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-media.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-media/form-media.component.html")).default,
    })
    //
    /* Export */
], FormMediaComponent);

;
//


/***/ }),

/***/ "./src/app/components/form-media/module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/form-media/module.ts ***!
  \*************************************************/
/*! exports provided: FormMediaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormMediaModule", function() { return FormMediaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _form_media_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-media.component */ "./src/app/components/form-media/form-media.component.ts");

/*
Imports
*/
// Angular




// Inner

// 
/*
Definition & export
*/
let FormMediaModule = class FormMediaModule {
};
FormMediaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_form_media_component__WEBPACK_IMPORTED_MODULE_5__["FormMediaComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        exports: [_form_media_component__WEBPACK_IMPORTED_MODULE_5__["FormMediaComponent"]]
    })
], FormMediaModule);

;
//


/***/ }),

/***/ "./src/app/routes/home-page/home-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/home-page/home-page.component.ts ***!
  \*********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePageComponent = class HomePageComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/home-page/home-page.component.html")).default
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/routes/home-page/module.ts":
/*!********************************************!*\
  !*** ./src/app/routes/home-page/module.ts ***!
  \********************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./src/app/routes/home-page/router.ts");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page.component */ "./src/app/routes/home-page/home-page.component.ts");
/* harmony import */ var _components_form_login_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/form-login/module */ "./src/app/components/form-login/module.ts");
/* harmony import */ var _components_form_media_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/form-media/module */ "./src/app/components/form-media/module.ts");

/*
Imports
*/
// Angular


// Inner




//
/*
Definition
*/
let Module = 
//
/*
Export
*/
class Module {
};
Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _router__WEBPACK_IMPORTED_MODULE_3__["Routing"],
            _components_form_login_module__WEBPACK_IMPORTED_MODULE_5__["FormLoginModule"],
            _components_form_media_module__WEBPACK_IMPORTED_MODULE_6__["FormMediaModule"]
        ]
    })
    //
    /*
    Export
    */
], Module);

;
//


/***/ }),

/***/ "./src/app/routes/home-page/router.ts":
/*!********************************************!*\
  !*** ./src/app/routes/home-page/router.ts ***!
  \********************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page.component */ "./src/app/routes/home-page/home-page.component.ts");



//
/*
Definition
*/
const route = [
    {
        path: '',
        component: _home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]
    }
];
//
/*
Export
*/
const Routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route);
//


/***/ })

}]);
//# sourceMappingURL=routes-home-page-module.js.map
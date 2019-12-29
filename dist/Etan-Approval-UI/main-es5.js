(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! E:\Javascript_Framework\Angular\myapp123\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "BcYF":
    /*!************************************************!*\
      !*** ./src/app/inc/header/header.component.ts ***!
      \************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function BcYF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function HeaderComponent_a_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_8_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var quiz_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.go_page(quiz_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var quiz_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](quiz_r2);
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(router) {
          _classCallCheck(this, HeaderComponent);

          this.router = router;
          this.QUIZES = ['Java', 'C', 'Javascript'];
        }

        _createClass(HeaderComponent, [{
          key: "go_page",
          value: function go_page(to) {
            this.router.navigate(['/' + to + '/quiz/0']);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 9,
        vars: 2,
        consts: [["aria-label", "Top Toolbar", 1, "docs-navbar-header"], ["mat-button", "", "routerLink", "/", 1, "docs-button", "top-items"], [1, "flex-spacer"], ["mat-button", "", 3, "matMenuTriggerFor"], ["selectquiz", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quiz Application");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-menu", null, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_a_8_Template, 2, 1, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.QUIZES);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"]],
        styles: [".pr-1[_ngcontent-%COMP%] {\n  padding-right: 1rem !important;\n}\n\n.pl-1[_ngcontent-%COMP%] {\n  padding-left: 1rem !important;\n}\n\n.pr-2[_ngcontent-%COMP%] {\n  padding-right: 2rem !important;\n}\n\n.pl-2[_ngcontent-%COMP%] {\n  padding-left: 2rem !important;\n}\n\n.pr-3[_ngcontent-%COMP%] {\n  padding-right: 3rem !important;\n}\n\n.pl-3[_ngcontent-%COMP%] {\n  padding-left: 3rem !important;\n}\n\n.pr-4[_ngcontent-%COMP%] {\n  padding-right: 4rem !important;\n}\n\n.pl-4[_ngcontent-%COMP%] {\n  padding-left: 4rem !important;\n}\n\n.pr-5[_ngcontent-%COMP%] {\n  padding-right: 5rem !important;\n}\n\n.pl-5[_ngcontent-%COMP%] {\n  padding-left: 5rem !important;\n}\n\n.docs-navbar-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 8px 16px;\n  box-shadow: #00000030 0px 3px 6px;\n  height: 66px;\n}\n\n.docs-navbar-header[_ngcontent-%COMP%]    > .mat-button[_ngcontent-%COMP%]:last-child {\n  margin-left: auto;\n}\n\n.flex-spacer[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.docs-angular-logo[_ngcontent-%COMP%] {\n  height: 26px;\n  margin: 0 4px 3px 0;\n  vertical-align: middle;\n}\n\n.docs-github-logo[_ngcontent-%COMP%] {\n  height: 21px;\n  margin: 0 7px 2px 0;\n  vertical-align: middle;\n}\n\n.docs-navbar-link[_ngcontent-%COMP%] {\n  text-decoration: inherit;\n  flex: 1;\n}\n\n.docs-navbar[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.docs-navbar-show-small[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.skip-link-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 5px;\n}\n\n\n\n@media (max-width: 720px) {\n  .docs-navbar-show-small[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .docs-navbar[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  .docs-navbar--github-logo[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  div.burger[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n\n#view-code[_ngcontent-%COMP%] {\n  font-size: 13px;\n  text-transform: uppercase;\n  font-weight: 700;\n  text-decoration: none;\n  position: absolute;\n  top: 640px;\n  left: 50%;\n  margin-left: -35px;\n}\n\ndiv.screen[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  top: 100px;\n  left: 0;\n}\n\n.list[_ngcontent-%COMP%] {\n  margin-top: 36px;\n  text-align: left;\n}\n\n.item[_ngcontent-%COMP%] {\n  height: 115px;\n  margin-top: 30px 0;\n  padding-left: 115px;\n  clear: both;\n}\n\n.item[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-radius: 3px;\n}\n\n.item[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  float: left;\n  width: 71px;\n  height: 71px;\n  margin-left: -93px;\n}\n\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  height: 11px;\n  width: 180px;\n  margin-bottom: 19px;\n  float: left;\n}\n\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(3) {\n  width: 75px;\n  margin-botom: 0;\n}\n\ndiv.burger[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 40px;\n  position: absolute;\n  top: 25px;\n  right: 21px;\n  cursor: pointer;\n  display: none;\n}\n\ndiv.x[_ngcontent-%COMP%], div.y[_ngcontent-%COMP%], div.z[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: auto;\n  top: 0px;\n  bottom: 0px;\n  background: #000;\n  border-radius: 2px;\n  transition: all 200ms ease-out;\n}\n\ndiv.x[_ngcontent-%COMP%], div.y[_ngcontent-%COMP%], div.z[_ngcontent-%COMP%] {\n  height: 3px;\n  width: 26px;\n}\n\ndiv.y[_ngcontent-%COMP%] {\n  top: 18px;\n}\n\ndiv.z[_ngcontent-%COMP%] {\n  top: 37px;\n}\n\ndiv.collapse[_ngcontent-%COMP%] {\n  top: 20px;\n  transition: all 70ms ease-out;\n}\n\ndiv.rotate30[_ngcontent-%COMP%] {\n  transform: rotate(30deg);\n  transition: all 50ms ease-out;\n}\n\ndiv.rotate150[_ngcontent-%COMP%] {\n  transform: rotate(150deg);\n  transition: all 50ms ease-out;\n}\n\ndiv.rotate45[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n  transition: all 100ms ease-out;\n}\n\ndiv.rotate135[_ngcontent-%COMP%] {\n  transform: rotate(135deg);\n  transition: all 100ms ease-out;\n}\n\ndiv.navbar[_ngcontent-%COMP%] {\n  height: 73px;\n}\n\ndiv.circle[_ngcontent-%COMP%] {\n  border-radius: 0%;\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  top: 0;\n  right: 36px;\n  background: #fff;\n  opacity: 1;\n  transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);\n}\n\ndiv.circle.expand[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  transition: all 400ms cubic-bezier(0, 0.995, 0.99, 1);\n}\n\ndiv.menu[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n}\n\ndiv.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  position: absolute;\n  top: 50px;\n  left: 0;\n  opacity: 0;\n  width: 100%;\n  text-align: center;\n  font-size: 0px;\n  transition: all 70ms cubic-bezier(0, 0.995, 0.99, 1);\n}\n\ndiv.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n  text-decoration: none;\n  font-size: 25px;\n  opacity: 1;\n}\n\ndiv.screen[_ngcontent-%COMP%]   div.menu[_ngcontent-%COMP%]   li.animate[_ngcontent-%COMP%] {\n  font-size: 21px;\n  z-index: 2;\n  opacity: 1;\n  transition: all 150ms cubic-bezier(0, 0.995, 0.99, 1);\n}\n\ndiv.menu[_ngcontent-%COMP%]   li.animate[_ngcontent-%COMP%]:nth-of-type(1) {\n  top: 120px;\n  transition-delay: 0s;\n}\n\ndiv.menu[_ngcontent-%COMP%]   li.animate[_ngcontent-%COMP%]:nth-of-type(2) {\n  top: 190px;\n  transition-delay: 0.03s;\n}\n\ndiv.menu[_ngcontent-%COMP%]   li.animate[_ngcontent-%COMP%]:nth-of-type(3) {\n  top: 260px;\n  transition-delay: 0.06s;\n}\n\ndiv.menu[_ngcontent-%COMP%]   li.animate[_ngcontent-%COMP%]:nth-of-type(4) {\n  top: 330px;\n  transition-delay: 0.09s;\n}\n\ndiv.menu[_ngcontent-%COMP%]   li.animate[_ngcontent-%COMP%]:nth-of-type(5) {\n  top: 400px;\n  transition-delay: 0.12s;\n}\n\ndiv.menu[_ngcontent-%COMP%]   li.animate[_ngcontent-%COMP%]:nth-of-type(6) {\n  top: 470px;\n  transition-delay: 0.15s;\n}\n\n.top-items[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtBQUNGOztBQUNBO0VBQ0UsNkJBQUE7QUFFRjs7QUFBQTtFQUNFLDhCQUFBO0FBR0Y7O0FBREE7RUFDRSw2QkFBQTtBQUlGOztBQUZBO0VBQ0UsOEJBQUE7QUFLRjs7QUFIQTtFQUNFLDZCQUFBO0FBTUY7O0FBSkE7RUFDRSw4QkFBQTtBQU9GOztBQUxBO0VBQ0UsNkJBQUE7QUFRRjs7QUFOQTtFQUNFLDhCQUFBO0FBU0Y7O0FBUEE7RUFDRSw2QkFBQTtBQVVGOztBQVJBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0FBV0Y7O0FBUkk7RUFDRSxpQkFBQTtBQVVOOztBQUxBO0VBQ0UsWUFBQTtBQVFGOztBQUxBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFRRjs7QUFMQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBUUY7O0FBTEE7RUFDRSx3QkFBQTtFQUNBLE9BQUE7QUFRRjs7QUFMQTtFQUNFLGFBQUE7QUFRRjs7QUFMQTtFQUNFLGFBQUE7QUFRRjs7QUFMQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBUUY7O0FBTEE7OztHQUFBOztBQUlBO0VBRUU7SUFDRSxjQUFBO0VBT0Y7O0VBSkE7SUFDRSxhQUFBO0VBT0Y7O0VBSkE7SUFDRSxTQUFBO0VBT0Y7O0VBTEE7SUFDRSx5QkFBQTtFQVFGO0FBQ0Y7O0FBREE7RUFFRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFBa0IsVUFBQTtFQUFXLFNBQUE7RUFBUyxrQkFBQTtBQUt4Qzs7QUFIQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0FBTUQ7O0FBQUE7RUFBTSxnQkFBQTtFQUFpQixnQkFBQTtBQUt2Qjs7QUFKQTtFQUNDLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQU9EOztBQUxBO0VBRUUsa0JBQUE7QUFPRjs7QUFMQTtFQUFXLFdBQUE7RUFBWSxXQUFBO0VBQVksWUFBQTtFQUFhLGtCQUFBO0FBWWhEOztBQVhBO0VBQVcsWUFBQTtFQUFhLFlBQUE7RUFBYSxtQkFBQTtFQUFvQixXQUFBO0FBa0J6RDs7QUFqQkE7RUFBMEIsV0FBQTtFQUFZLGVBQUE7QUFzQnRDOztBQXBCQTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNDLGVBQUE7RUFDQSxhQUFBO0FBdUJGOztBQXJCQzs7O0VBR0Msa0JBQUE7RUFBb0IsWUFBQTtFQUNwQixRQUFBO0VBQVUsV0FBQTtFQUNWLGdCQUFBO0VBQ0Esa0JBQUE7RUFLUSw4QkFBQTtBQTBCVjs7QUF4QkM7RUFBc0IsV0FBQTtFQUFhLFdBQUE7QUE2QnBDOztBQTVCQztFQUFNLFNBQUE7QUFnQ1A7O0FBL0JDO0VBQU0sU0FBQTtBQW1DUDs7QUFsQ0M7RUFDQyxTQUFBO0VBTVEsNkJBQUE7QUFvQ1Y7O0FBaENDO0VBR0ksd0JBQUE7RUFLSyw2QkFBQTtBQW1DVjs7QUFqQ0M7RUFHSSx5QkFBQTtFQUtLLDZCQUFBO0FBb0NWOztBQWpDQztFQUdJLHdCQUFBO0VBS0ssOEJBQUE7QUFvQ1Y7O0FBbENDO0VBR0kseUJBQUE7RUFLSyw4QkFBQTtBQXFDVjs7QUFsQ0E7RUFDRSxZQUFBO0FBcUNGOztBQWpDQTtFQUNDLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBS1EscURBQUE7QUFvQ1Q7O0FBbENBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0MsT0FBQTtFQUNBLFVBQUE7RUFLTyxxREFBQTtBQXFDVDs7QUFsQ0E7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0MsUUFBQTtFQUFVLFNBQUE7QUFzQ1o7O0FBcENBO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFLUSxvREFBQTtBQXVDVDs7QUFyQ0E7RUFDQyxXQUFBO0VBRUEscUJBQUE7RUFFQyxlQUFBO0VBQ0EsVUFBQTtBQXNDRjs7QUFuQ0E7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNELFVBQUE7RUFLUSxxREFBQTtBQXNDVDs7QUFwQ0E7RUFDQyxVQUFBO0VBQ0Esb0JBQUE7QUF1Q0Q7O0FBckNBO0VBQ0MsVUFBQTtFQUNBLHVCQUFBO0FBd0NEOztBQXJDQTtFQUNDLFVBQUE7RUFDQSx1QkFBQTtBQXdDRDs7QUFyQ0E7RUFDQyxVQUFBO0VBQ0EsdUJBQUE7QUF3Q0Q7O0FBckNBO0VBQ0MsVUFBQTtFQUNBLHVCQUFBO0FBd0NEOztBQXJDQTtFQUNDLFVBQUE7RUFDQSx1QkFBQTtBQXdDRDs7QUFyQ0E7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7QUF3Q0QiLCJmaWxlIjoic3JjL2FwcC9pbmMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wci0xIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBsLTEge1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5wci0yIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAycmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBsLTIge1xyXG4gIHBhZGRpbmctbGVmdDogMnJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5wci0zIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBsLTMge1xyXG4gIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5wci00IHtcclxuICBwYWRkaW5nLXJpZ2h0OiA0cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBsLTQge1xyXG4gIHBhZGRpbmctbGVmdDogNHJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5wci01IHtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBsLTUge1xyXG4gIHBhZGRpbmctbGVmdDogNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5kb2NzLW5hdmJhci1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgYm94LXNoYWRvdzogIzAwMDAwMDMwIDBweCAzcHggNnB4O1xyXG4gIGhlaWdodDogNjZweDtcclxuXHJcbiAgPiAubWF0LWJ1dHRvbiB7XHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mbGV4LXNwYWNlciB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uZG9jcy1hbmd1bGFyLWxvZ28ge1xyXG4gIGhlaWdodDogMjZweDtcclxuICBtYXJnaW46IDAgNHB4IDNweCAwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5kb2NzLWdpdGh1Yi1sb2dvIHtcclxuICBoZWlnaHQ6IDIxcHg7XHJcbiAgbWFyZ2luOiAwIDdweCAycHggMDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZG9jcy1uYXZiYXItbGluayB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5kb2NzLW5hdmJhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmRvY3MtbmF2YmFyLXNob3ctc21hbGwge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5za2lwLWxpbmstd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLyoqXHJcbiAgKiBSdWxlcyBmb3Igd2hlbiB0aGUgZGV2aWNlIGlzIGRldGVjdGVkIHRvIGJlIGEgc21hbGwgc2NyZWVuLlxyXG4gICogTW92ZXMgY29udGVudCB0d28gcm93cyBpbnN0ZWFkIG9mIG9uZS5cclxuICAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgLmRvY3MtbmF2YmFyLXNob3ctc21hbGwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuZG9jcy1uYXZiYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gIC5kb2NzLW5hdmJhci0tZ2l0aHViLWxvZ28ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBkaXYuYnVyZ2VyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiN2aWV3LWNvZGV7XHJcbiAgLy8gY29sb3I6IzQxODNkNztcclxuICBmb250LXNpemU6MTNweDtcclxuICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO3RvcDo2NDBweDsgbGVmdDo1MCU7bWFyZ2luLWxlZnQ6LTM1cHg7XHJcbn1cclxuZGl2LnNjcmVlbntcclxuXHR3aWR0aDoxMDAlO1xyXG5cdGhlaWdodDoxMDAlO1x0XHJcblx0b3ZlcmZsb3c6aGlkZGVuO1xyXG5cdHBvc2l0aW9uOmFic29sdXRlOyBcclxuXHR0b3A6MTAwcHg7IFxyXG5cdGxlZnQ6MDtcclxuICAvLyBtYXJnaW4tbGVmdDotMTYwcHg7XHJcbiAgLy8gYmFja2dyb3VuZDojMzE1NThhO1xyXG4gIC8vIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5saXN0e21hcmdpbi10b3A6MzZweDsgdGV4dC1hbGlnbjpsZWZ0O31cclxuLml0ZW17XHJcblx0aGVpZ2h0OjExNXB4O1xyXG5cdG1hcmdpbi10b3A6MzBweCAwO1xyXG5cdHBhZGRpbmctbGVmdDoxMTVweDtcclxuXHRjbGVhcjpib3RoO1xyXG59XHJcbi5pdGVtIC5pbWcsIC5pdGVtIHNwYW57XHJcbiAgLy8gYmFja2dyb3VuZDojMjE0MjczO1xyXG4gIGJvcmRlci1yYWRpdXM6M3B4O1xyXG59XHJcbi5pdGVtIC5pbWd7ZmxvYXQ6bGVmdDsgd2lkdGg6NzFweDsgaGVpZ2h0OjcxcHg7IG1hcmdpbi1sZWZ0Oi05M3B4O31cclxuLml0ZW0gc3BhbntoZWlnaHQ6MTFweDsgd2lkdGg6MTgwcHg7IG1hcmdpbi1ib3R0b206MTlweDsgZmxvYXQ6bGVmdDt9XHJcbi5pdGVtIHNwYW46bnRoLW9mLXR5cGUoMyl7d2lkdGg6NzVweDsgbWFyZ2luLWJvdG9tOjA7fVxyXG5cclxuZGl2LmJ1cmdlciB7XHJcblx0aGVpZ2h0OiAzMHB4OyBcclxuXHR3aWR0aDogNDBweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAyNXB4OyBcclxuXHRyaWdodDogMjFweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cdGRpdi54LFxyXG5cdGRpdi55LFxyXG5cdGRpdi56IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTsgbWFyZ2luOiBhdXRvO1xyXG5cdFx0dG9wOiAwcHg7IGJvdHRvbTogMHB4O1x0XHRcclxuXHRcdGJhY2tncm91bmQ6ICMwMDA7XHJcblx0XHRib3JkZXItcmFkaXVzOjJweDtcclxuXHRcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2Utb3V0O1xyXG5cdFx0ICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XHJcblx0XHQgICAgLW1zLXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcclxuXHRcdCAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2Utb3V0O1xyXG5cdFx0ICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XHJcblx0fVx0XHRcclxuXHRkaXYueCwgZGl2LnksIGRpdi56IHsgaGVpZ2h0OiAzcHg7IHdpZHRoOiAyNnB4OyB9XHJcblx0ZGl2Lnl7dG9wOiAxOHB4O31cclxuXHRkaXYuent0b3A6IDM3cHg7fVxyXG5cdGRpdi5jb2xsYXBzZXtcclxuXHRcdHRvcDogMjBweDtcclxuXHRcdC8vIGJhY2tncm91bmQ6IzRhODlkYztcclxuXHRcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDcwbXMgZWFzZS1vdXQ7XHJcblx0XHQgICAtbW96LXRyYW5zaXRpb246IGFsbCA3MG1zIGVhc2Utb3V0O1xyXG5cdFx0ICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgNzBtcyBlYXNlLW91dDtcclxuXHRcdCAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDcwbXMgZWFzZS1vdXQ7XHJcblx0XHQgICAgICAgIHRyYW5zaXRpb246IGFsbCA3MG1zIGVhc2Utb3V0O1xyXG5cdH1cclxuXHQgXHJcblx0XHJcblx0ZGl2LnJvdGF0ZTMwe1xyXG5cdFx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTsgXHJcbiAgICBcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpOyBcclxuXHQgICAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1x0XHJcblx0XHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MG1zIGVhc2Utb3V0O1xyXG5cdFx0ICAgLW1vei10cmFuc2l0aW9uOiBhbGwgNTBtcyBlYXNlLW91dDtcclxuXHRcdCAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDUwbXMgZWFzZS1vdXQ7XHJcblx0XHQgICAgIC1vLXRyYW5zaXRpb246IGFsbCA1MG1zIGVhc2Utb3V0O1xyXG5cdFx0ICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNTBtcyBlYXNlLW91dDtcdFx0XHRcdFx0XHJcblx0fVxyXG5cdGRpdi5yb3RhdGUxNTB7XHJcblx0XHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTsgXHJcbiAgICBcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTsgXHJcblx0ICAgIHRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XHRcclxuXHRcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDUwbXMgZWFzZS1vdXQ7XHJcblx0XHQgICAtbW96LXRyYW5zaXRpb246IGFsbCA1MG1zIGVhc2Utb3V0O1xyXG5cdFx0ICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgNTBtcyBlYXNlLW91dDtcclxuXHRcdCAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDUwbXMgZWFzZS1vdXQ7XHJcblx0XHQgICAgICAgIHRyYW5zaXRpb246IGFsbCA1MG1zIGVhc2Utb3V0O1x0XHRcdFx0XHRcclxuXHR9XHJcblx0XHJcblx0ZGl2LnJvdGF0ZTQ1e1xyXG5cdFx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgXHJcbiAgICBcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyBcclxuXHQgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1x0XHJcblx0XHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLW91dDtcclxuXHRcdCAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2Utb3V0O1xyXG5cdFx0ICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1vdXQ7XHJcblx0XHQgICAgIC1vLXRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLW91dDtcclxuXHRcdCAgICAgICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2Utb3V0O1x0XHRcdFx0XHRcclxuXHR9XHJcblx0ZGl2LnJvdGF0ZTEzNXtcclxuXHRcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpOyBcclxuICAgIFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpOyBcclxuXHQgICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcdFxyXG5cdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1vdXQ7XHJcblx0XHQgICAtbW96LXRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLW91dDtcclxuXHRcdCAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2Utb3V0O1xyXG5cdFx0ICAgICAtby10cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1vdXQ7XHJcblx0XHQgICAgICAgIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLW91dDtcdFx0XHRcdFx0XHJcblx0fVxyXG5cclxuZGl2Lm5hdmJhcntcclxuICBoZWlnaHQ6NzNweDtcclxuICAvLyBiYWNrZ3JvdW5kOiMzODVlOTc7XHJcbn1cclxuXHJcbmRpdi5jaXJjbGV7XHRcclxuXHRib3JkZXItcmFkaXVzOiAwJTtcclxuXHR3aWR0aDogMHB4O1xyXG5cdGhlaWdodDogMHB4OyBcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0cmlnaHQ6IDM2cHg7XHJcblx0YmFja2dyb3VuZDojZmZmO1xyXG5cdG9wYWNpdHk6MTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4wMDAsIDAuOTk1LCAwLjk5MCwgMS4wMDApO1xyXG5cdCAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjAwMCwgMC45OTUsIDAuOTkwLCAxLjAwMCk7XHJcblx0ICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMDAwLCAwLjk5NSwgMC45OTAsIDEuMDAwKTtcclxuXHQgICAgIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4wMDAsIDAuOTk1LCAwLjk5MCwgMS4wMDApO1xyXG5cdCAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjAwMCwgMC45OTUsIDAuOTkwLCAxLjAwMCk7XHRcclxufVxyXG5kaXYuY2lyY2xlLmV4cGFuZHtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdGhlaWdodDoxMDAlO1xyXG5cdHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMDAwLCAwLjk5NSwgMC45OTAsIDEuMDAwKTtcclxuXHQgICAtbW96LXRyYW5zaXRpb246IGFsbCA0MDBtcyBjdWJpYy1iZXppZXIoMC4wMDAsIDAuOTk1LCAwLjk5MCwgMS4wMDApO1xyXG5cdCAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDQwMG1zIGN1YmljLWJlemllcigwLjAwMCwgMC45OTUsIDAuOTkwLCAxLjAwMCk7XHJcblx0ICAgICAtby10cmFuc2l0aW9uOiBhbGwgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMDAwLCAwLjk5NSwgMC45OTAsIDEuMDAwKTtcclxuXHQgICAgICAgIHRyYW5zaXRpb246IGFsbCA0MDBtcyBjdWJpYy1iZXppZXIoMC4wMDAsIDAuOTk1LCAwLjk5MCwgMS4wMDApO1x0XHRcdFx0XHRcclxuXHRcclxufVxyXG5kaXYubWVudSB7XHJcblx0aGVpZ2h0OiAxMDAlOyBcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7IGxlZnQ6IDBweDtcclxufVxyXG5kaXYubWVudSB1bCBsaSB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHR0b3A6NTBweDs7XHJcblx0bGVmdDowO1xyXG5cdG9wYWNpdHk6MDtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdGZvbnQtc2l6ZTowcHg7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNzBtcyBjdWJpYy1iZXppZXIoMC4wMDAsIDAuOTk1LCAwLjk5MCwgMS4wMDApO1xyXG5cdCAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDcwbXMgY3ViaWMtYmV6aWVyKDAuMDAwLCAwLjk5NSwgMC45OTAsIDEuMDAwKTtcclxuXHQgICAgLW1zLXRyYW5zaXRpb246IGFsbCA3MG1zIGN1YmljLWJlemllcigwLjAwMCwgMC45OTUsIDAuOTkwLCAxLjAwMCk7XHJcblx0ICAgICAtby10cmFuc2l0aW9uOiBhbGwgNzBtcyBjdWJpYy1iZXppZXIoMC4wMDAsIDAuOTk1LCAwLjk5MCwgMS4wMDApO1xyXG5cdCAgICAgICAgdHJhbnNpdGlvbjogYWxsIDcwbXMgY3ViaWMtYmV6aWVyKDAuMDAwLCAwLjk5NSwgMC45OTAsIDEuMDAwKTtcclxufVxyXG5kaXYubWVudSB1bCBsaSBhIHtcclxuXHRjb2xvcjojMDAwO1xyXG5cdC8vIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuXHR0ZXh0LWRlY29yYXRpb246bm9uZTtcdFxyXG4gIC8vIGxldHRlci1zcGFjaW5nOjNweDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuZGl2LnNjcmVlbiBkaXYubWVudSBsaS5hbmltYXRle1xyXG4gIGZvbnQtc2l6ZToyMXB4O1xyXG4gIHotaW5kZXg6IDI7XHJcblx0b3BhY2l0eToxO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigwLjAwMCwgMC45OTUsIDAuOTkwLCAxLjAwMCk7XHJcblx0ICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDAuMDAwLCAwLjk5NSwgMC45OTAsIDEuMDAwKTtcclxuXHQgICAgLW1zLXRyYW5zaXRpb246IGFsbCAxNTBtcyBjdWJpYy1iZXppZXIoMC4wMDAsIDAuOTk1LCAwLjk5MCwgMS4wMDApO1xyXG5cdCAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigwLjAwMCwgMC45OTUsIDAuOTkwLCAxLjAwMCk7XHJcblx0ICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDAuMDAwLCAwLjk5NSwgMC45OTAsIDEuMDAwKTtcclxufVxyXG5kaXYubWVudSBsaS5hbmltYXRlOm50aC1vZi10eXBlKDEpe1x0XHJcblx0dG9wOjEyMHB4O1xyXG5cdHRyYW5zaXRpb24tZGVsYXk6IDAuMHM7XHRcclxufVxyXG5kaXYubWVudSBsaS5hbmltYXRlOm50aC1vZi10eXBlKDIpe1xyXG5cdHRvcDoxOTBweDtcclxuXHR0cmFuc2l0aW9uLWRlbGF5OiAwLjAzcztcdFxyXG5cdFx0XHRcclxufVxyXG5kaXYubWVudSBsaS5hbmltYXRlOm50aC1vZi10eXBlKDMpe1xyXG5cdHRvcDoyNjBweDtcclxuXHR0cmFuc2l0aW9uLWRlbGF5OiAwLjA2cztcdFx0XHJcblx0XHJcbn1cclxuZGl2Lm1lbnUgbGkuYW5pbWF0ZTpudGgtb2YtdHlwZSg0KXtcclxuXHR0b3A6MzMwcHg7XHJcblx0dHJhbnNpdGlvbi1kZWxheTogMC4wOXM7XHRcdFxyXG5cdFxyXG59XHJcbmRpdi5tZW51IGxpLmFuaW1hdGU6bnRoLW9mLXR5cGUoNSl7XHJcblx0dG9wOjQwMHB4O1xyXG5cdHRyYW5zaXRpb24tZGVsYXk6IDAuMTJzO1x0XHRcclxuXHRcclxufVxyXG5kaXYubWVudSBsaS5hbmltYXRlOm50aC1vZi10eXBlKDYpe1xyXG5cdHRvcDo0NzBweDtcclxuXHR0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcdFxyXG5cdFx0XHRcclxufVxyXG4udG9wLWl0ZW1ze1xyXG5cdGZvbnQtc2l6ZTogMTlweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "QKFx":
    /*!*************************************************!*\
      !*** ./src/app/quiz/result/result.component.ts ***!
      \*************************************************/

    /*! exports provided: ResultComponent */

    /***/
    function QKFx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResultComponent", function () {
        return ResultComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _inc_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../inc/header/header.component */
      "BcYF");

      var ResultComponent = /*#__PURE__*/function () {
        function ResultComponent(router, active_router) {
          var _this = this;

          _classCallCheck(this, ResultComponent);

          this.router = router;
          this.score = 0;
          active_router.params.subscribe(function (params) {
            _this.score = params['score'];
          });
        }

        _createClass(ResultComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ResultComponent;
      }();

      ResultComponent.ɵfac = function ResultComponent_Factory(t) {
        return new (t || ResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
      };

      ResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ResultComponent,
        selectors: [["app-result"]],
        decls: 3,
        vars: 1,
        consts: [["ng-init", "score = ", 2, "text-align", "center", "padding-top", "100px"]],
        template: function ResultComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.score);
          }
        },
        directives: [_inc_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aXovcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-result',
            templateUrl: './result.component.html',
            styleUrls: ['./result.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sewk":
    /*!****************************************!*\
      !*** ./src/app/quiz/quiz.component.ts ***!
      \****************************************/

    /*! exports provided: QuizComponent */

    /***/
    function Sewk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuizComponent", function () {
        return QuizComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var QuizComponent = /*#__PURE__*/function () {
        function QuizComponent(router, active_router) {
          var _this2 = this;

          _classCallCheck(this, QuizComponent);

          this.router = router;
          this.score = 0;
          active_router.params.subscribe(function (params) {
            _this2.score = params['score'];
          });
          this.router.navigate(['/result/0']);
        }

        _createClass(QuizComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return QuizComponent;
      }();

      QuizComponent.ɵfac = function QuizComponent_Factory(t) {
        return new (t || QuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
      };

      QuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: QuizComponent,
        selectors: [["app-quiz"]],
        decls: 2,
        vars: 0,
        template: function QuizComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "quiz works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aXovcXVpei5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-quiz',
            templateUrl: './quiz.component.html',
            styleUrls: ['./quiz.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Etan-Approval-UI';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "WW6G":
    /*!*****************************************************!*\
      !*** ./src/app/quiz/question/question.component.ts ***!
      \*****************************************************/

    /*! exports provided: QuestionComponent */

    /***/
    function WW6G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionComponent", function () {
        return QuestionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");

      function QuestionComponent_a_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionComponent_a_8_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var quiz_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.go_page(quiz_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var quiz_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](quiz_r3);
        }
      }

      function QuestionComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-radio-button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var qn_r6 = ctx.$implicit;
          var i_r7 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", qn_r6, " ");
        }
      }

      var QuestionComponent = /*#__PURE__*/function () {
        function QuestionComponent(active_router, router, _snackBar) {
          var _this3 = this;

          _classCallCheck(this, QuestionComponent);

          this.router = router;
          this._snackBar = _snackBar;
          this.QUIZES = ['Java', 'C', 'Javascript'];
          this.all_question = {
            C: [{
              text: 'In Solid priciewrweple , O stands for:',
              answer: 0,
              chklist: ['Object ansafasfd Variables', 'Open Closed Priciple']
            }, {
              text: 'In Solid pricewrweriple , O stands for:',
              answer: 1,
              chklist: ['Open Closed Priciple', 'Object anasfasfasd Variables']
            }],
            Java: [{
              text: 'In Solid priciewrewple , O stands for:',
              answer: 2,
              chklist: ['ansafsafasd Variables', 'Open Closed Priciple', 'dsfsfdsf']
            }, {
              text: 'In Solid priciewrweple , O stands for:',
              answer: 0,
              chklist: ['Object ansafasfd Variables', 'Open Closed Priciple']
            }],
            Javascript: [{
              text: 'In Solid pricewrweriple , O stands for:',
              answer: 1,
              chklist: ['Open Closed Priciple', 'Object anasfasfasd Variables']
            }, {
              text: 'In Solid priciewrewple , O stands for:',
              answer: 2,
              chklist: ['ansafsafasd Variables', 'Open Closed Priciple', 'dsfsfdsf']
            }]
          };
          this.crnt_quiz = '';
          this.questions = this.all_question.C;
          this.total_score = 0;
          this.total_quiz = 0;
          active_router.params.subscribe(function (params) {
            _this3.crnt_quiz = params['quiz'];
            _this3.crnt_qid = params['id'];
          });
          this.crnt_question = this.questions[this.crnt_qid];
          console.log(this.crnt_question);
        }

        _createClass(QuestionComponent, [{
          key: "go_page",
          value: function go_page(to) {
            this.questions = this.all_question[to]; // this.crnt_qid = 0;

            this.crnt_question = this.questions[0];
            this.router.navigate(['/' + to + '/quiz/0']);
          }
        }, {
          key: "go_question",
          value: function go_question(to) {
            if (this.crnt_score === null && (to === 'prev' || to === 'next')) {
              this._snackBar.open('You have to select anything', 'X', {
                duration: 2000
              });

              return;
            }

            switch (to) {
              case 'frist':
                this.crnt_qid = 0;
                this.total_quiz = 0;
                this.total_score = 0;
                break;

              case 'last':
                this.crnt_qid = this.questions.length - 1;
                break;

              case 'next':
                this.crnt_qid++;
                break;

              case 'prev':
                if (!this.crnt_qid--) {
                  this.crnt_qid++;
                }

                break;
            }

            if (this.crnt_score !== null && to === 'next') {
              if (this.crnt_question.answer === this.crnt_score) {
                this.total_score += 10;

                this._snackBar.open('Right', 'X', {
                  duration: 2000
                });
              } else {
                this._snackBar.open('Wrong', 'X', {
                  duration: 2000
                });
              }
            } // this._snackBar.open(this.crnt_score, 'X', {duration: 2000,});


            this.crnt_question = this.questions[this.crnt_qid];
            this.crnt_score = null; //finish quiz

            if (this.crnt_qid === this.questions.length) {
              this.router.navigate(['/result/' + this.total_score / this.questions.length]);
              return;
            }

            this.router.navigate([this.crnt_quiz + '/quiz/' + this.crnt_qid]);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return QuestionComponent;
      }();

      QuestionComponent.ɵfac = function QuestionComponent_Factory(t) {
        return new (t || QuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]));
      };

      QuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: QuestionComponent,
        selectors: [["app-question"]],
        decls: 30,
        vars: 8,
        consts: [["aria-label", "Top Toolbar", 1, "docs-navbar-header"], ["mat-button", "", "routerLink", "/", 1, "docs-button", "top-items"], [1, "flex-spacer"], ["mat-button", "", 3, "matMenuTriggerFor"], ["selectquiz", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "container"], ["ng-init", "crnt_quiz = ''", 2, "font-size", "24px", "font-weight", "bold", "padding", "15px", "text-align", "center"], ["ng-init", "crnt_quiz = ''"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelChange"], [1, "row"], ["class", "col-xs-6 p-1", 4, "ngFor", "ngForOf"], [1, "col", 2, "text-align", "center"], ["name", "fontStyle", "aria-label", "Font Style"], [2, "width", "15vw", 3, "click"], ["mat-menu-item", "", 3, "click"], [1, "col-xs-6", "p-1"], [1, "example-radio-button", 3, "value"]],
        template: function QuestionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quiz Application");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-menu", null, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuestionComponent_a_8_Template, 2, 1, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-radio-group", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuestionComponent_Template_mat_radio_group_ngModelChange_17_listener($event) {
              return ctx.crnt_score = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, QuestionComponent_div_19_Template, 3, 2, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-button-toggle-group", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-button-toggle", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionComponent_Template_mat_button_toggle_click_24_listener() {
              return ctx.go_question("frist");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-button-toggle", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionComponent_Template_mat_button_toggle_click_26_listener() {
              return ctx.go_question("next");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-button-toggle", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionComponent_Template_mat_button_toggle_click_28_listener() {
              return ctx.go_question("last");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.QUIZES);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.crnt_quiz);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Question ", ctx.crnt_qid * 1 + 1, " of ", ctx.questions.length, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.crnt_question.text);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.crnt_score);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.crnt_question.chklist);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggle"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioButton"]],
        styles: [".p-1[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n\noptgroup[_ngcontent-%COMP%] {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n  font-weight: bold;\n}\n\nselect[_ngcontent-%COMP%] {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n  overflow: auto;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\ninput[type=reset][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\n\ninput[type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\n\nbutton[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 4px 0 0;\n  margin-top: 1px \\9 ;\n  line-height: normal;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\ninput[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 4px 0 0;\n  margin-top: 1px \\9 ;\n  line-height: normal;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  height: auto;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto;\n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  box-sizing: content-box;\n  -webkit-appearance: textfield;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  padding: 0.35em 0.625em 0.75em;\n  margin: 0 2px;\n  border: 1px solid #c0c0c0;\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nlegend[_ngcontent-%COMP%] {\n  padding: 0;\n  border: 0;\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-spacing: 0;\n  border-collapse: collapse;\n  background-color: transparent;\n}\n\ntable[_ngcontent-%COMP%]   col[class*=col-][_ngcontent-%COMP%] {\n  position: static;\n  display: table-column;\n  float: none;\n}\n\ntable[_ngcontent-%COMP%]   td[class*=col-][_ngcontent-%COMP%] {\n  position: static;\n  display: table-cell;\n  float: none;\n}\n\ntable[_ngcontent-%COMP%]   th[class*=col-][_ngcontent-%COMP%] {\n  position: static;\n  display: table-cell;\n  float: none;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\nth[_ngcontent-%COMP%] {\n  padding: 0;\n  text-align: left;\n}\n\n.glyphicon[_ngcontent-%COMP%] {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: \"Glyphicons Halflings\";\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n*[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n\n*[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\n\n.img-responsive[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n.thumbnail[_ngcontent-%COMP%] {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  transition: border 0.2s ease-in-out;\n}\n\n.thumbnail[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n  height: auto;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.thumbnail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n  height: auto;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.thumbnail[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n  padding: 9px;\n  color: #333;\n}\n\n.carousel-inner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n\n.carousel-inner[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%] {\n  position: relative;\n  display: none;\n  transition: 0.6s ease-in-out left;\n}\n\n.carousel-inner[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n  height: auto;\n  line-height: 1;\n}\n\n.carousel-inner[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n  height: auto;\n  line-height: 1;\n}\n\n.carousel-inner[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%] {\n  display: block;\n  left: 0;\n}\n\n.carousel-inner[_ngcontent-%COMP%]    > .next[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  left: 100%;\n}\n\n.carousel-inner[_ngcontent-%COMP%]    > .prev[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  left: -100%;\n}\n\n.carousel-inner[_ngcontent-%COMP%]    > .next.left[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.carousel-inner[_ngcontent-%COMP%]    > .prev.right[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.carousel-inner[_ngcontent-%COMP%]    > .active.left[_ngcontent-%COMP%] {\n  left: -100%;\n}\n\n.carousel-inner[_ngcontent-%COMP%]    > .active.right[_ngcontent-%COMP%] {\n  left: 100%;\n}\n\n.img-rounded[_ngcontent-%COMP%] {\n  border-radius: 6px;\n}\n\n.img-thumbnail[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n  padding: 4px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  transition: all 0.2s ease-in-out;\n}\n\n.img-circle[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.sr-only[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n\n.sr-only-focusable[_ngcontent-%COMP%]:active {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n\n.sr-only-focusable[_ngcontent-%COMP%]:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n\n[role=button][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 30px;\n}\n\nh2[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n  font-size: 65%;\n}\n\nh2[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n  font-size: 65%;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 24px;\n}\n\nh3[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n  font-size: 65%;\n}\n\nh3[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n  font-size: 65%;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-size: 18px;\n}\n\nh4[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n  font-size: 75%;\n}\n\nh4[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n  font-size: 75%;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-size: 14px;\n}\n\nh5[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n  font-size: 75%;\n}\n\nh5[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n  font-size: 75%;\n}\n\nh6[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-size: 12px;\n}\n\nh6[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n  font-size: 75%;\n}\n\nh6[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n  font-size: 75%;\n}\n\n.h1[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 36px;\n}\n\n.h1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n  font-size: 65%;\n}\n\n.h1[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n  font-size: 65%;\n}\n\n.h2[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 30px;\n}\n\n.h2[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n  font-size: 65%;\n}\n\n.h2[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n  font-size: 65%;\n}\n\n.h3[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 24px;\n}\n\n.h3[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n  font-size: 65%;\n}\n\n.h3[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n  font-size: 65%;\n}\n\n.h4[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-size: 18px;\n}\n\n.h4[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n  font-size: 75%;\n}\n\n.h4[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n  font-size: 75%;\n}\n\n.h5[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-size: 14px;\n}\n\n.h5[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n  font-size: 75%;\n}\n\n.h5[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n  font-size: 75%;\n}\n\n.h6[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-size: 12px;\n}\n\n.h6[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n  font-size: 75%;\n}\n\n.h6[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n  font-size: 75%;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n}\n\n.lead[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n\n.small[_ngcontent-%COMP%] {\n  font-size: 85%;\n}\n\n.mark[_ngcontent-%COMP%] {\n  padding: 0.2em;\n  background-color: #fcf8e3;\n}\n\n.text-left[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.text-justify[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.text-nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n.text-lowercase[_ngcontent-%COMP%] {\n  text-transform: lowercase;\n}\n\n.text-uppercase[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\n.text-capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  color: #777;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: #337ab7;\n}\n\na.text-primary[_ngcontent-%COMP%]:hover {\n  color: #286090;\n}\n\na.text-primary[_ngcontent-%COMP%]:focus {\n  color: #286090;\n}\n\n.text-success[_ngcontent-%COMP%] {\n  color: #3c763d;\n}\n\na.text-success[_ngcontent-%COMP%]:hover {\n  color: #2b542c;\n}\n\na.text-success[_ngcontent-%COMP%]:focus {\n  color: #2b542c;\n}\n\n.text-info[_ngcontent-%COMP%] {\n  color: #31708f;\n}\n\na.text-info[_ngcontent-%COMP%]:hover {\n  color: #245269;\n}\n\na.text-info[_ngcontent-%COMP%]:focus {\n  color: #245269;\n}\n\n.text-warning[_ngcontent-%COMP%] {\n  color: #8a6d3b;\n}\n\na.text-warning[_ngcontent-%COMP%]:hover {\n  color: #66512c;\n}\n\na.text-warning[_ngcontent-%COMP%]:focus {\n  color: #66512c;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  color: #a94442;\n}\n\na.text-danger[_ngcontent-%COMP%]:hover {\n  color: #843534;\n}\n\na.text-danger[_ngcontent-%COMP%]:focus {\n  color: #843534;\n}\n\n.bg-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #337ab7;\n}\n\na.bg-primary[_ngcontent-%COMP%]:hover {\n  background-color: #286090;\n}\n\na.bg-primary[_ngcontent-%COMP%]:focus {\n  background-color: #286090;\n}\n\n.bg-success[_ngcontent-%COMP%] {\n  background-color: #dff0d8;\n}\n\na.bg-success[_ngcontent-%COMP%]:hover {\n  background-color: #c1e2b3;\n}\n\na.bg-success[_ngcontent-%COMP%]:focus {\n  background-color: #c1e2b3;\n}\n\n.bg-info[_ngcontent-%COMP%] {\n  background-color: #d9edf7;\n}\n\na.bg-info[_ngcontent-%COMP%]:hover {\n  background-color: #afd9ee;\n}\n\na.bg-info[_ngcontent-%COMP%]:focus {\n  background-color: #afd9ee;\n}\n\n.bg-warning[_ngcontent-%COMP%] {\n  background-color: #fcf8e3;\n}\n\na.bg-warning[_ngcontent-%COMP%]:hover {\n  background-color: #f7ecb5;\n}\n\na.bg-warning[_ngcontent-%COMP%]:focus {\n  background-color: #f7ecb5;\n}\n\n.bg-danger[_ngcontent-%COMP%] {\n  background-color: #f2dede;\n}\n\na.bg-danger[_ngcontent-%COMP%]:hover {\n  background-color: #e4b9b9;\n}\n\na.bg-danger[_ngcontent-%COMP%]:focus {\n  background-color: #e4b9b9;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eee;\n}\n\nul[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\nul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\nul[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\nol[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\nol[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\nol[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.list-unstyled[_ngcontent-%COMP%] {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-left: -5px;\n  list-style: none;\n}\n\n.list-inline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px;\n}\n\ndl[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n\ndt[_ngcontent-%COMP%] {\n  line-height: 1.42857143;\n  font-weight: bold;\n}\n\ndd[_ngcontent-%COMP%] {\n  line-height: 1.42857143;\n  margin-left: 0;\n}\n\nabbr[data-original-title][_ngcontent-%COMP%] {\n  cursor: help;\n  border-bottom: 1px dotted #777;\n}\n\n.initialism[_ngcontent-%COMP%] {\n  font-size: 90%;\n  text-transform: uppercase;\n}\n\n.pre-scrollable[_ngcontent-%COMP%] {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.container[_ngcontent-%COMP%]    > .navbar-header[_ngcontent-%COMP%] {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.container[_ngcontent-%COMP%]    > .navbar-collapse[_ngcontent-%COMP%] {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.container[_ngcontent-%COMP%]   .jumbotron[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  padding-left: 15px;\n  border-radius: 6px;\n}\n\n.container[_ngcontent-%COMP%]:before {\n  display: table;\n  content: \" \";\n}\n\n.container[_ngcontent-%COMP%]:after {\n  display: table;\n  content: \" \";\n  clear: both;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.container-fluid[_ngcontent-%COMP%]    > .navbar-header[_ngcontent-%COMP%] {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.container-fluid[_ngcontent-%COMP%]    > .navbar-collapse[_ngcontent-%COMP%] {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.container-fluid[_ngcontent-%COMP%]   .jumbotron[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  padding-left: 15px;\n  border-radius: 6px;\n}\n\n.container-fluid[_ngcontent-%COMP%]:before {\n  display: table;\n  content: \" \";\n}\n\n.container-fluid[_ngcontent-%COMP%]:after {\n  display: table;\n  content: \" \";\n  clear: both;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.row[_ngcontent-%COMP%]:before {\n  display: table;\n  content: \" \";\n}\n\n.row[_ngcontent-%COMP%]:after {\n  display: table;\n  content: \" \";\n  clear: both;\n}\n\n.col-xs-1[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n  float: left;\n  width: 8.33333333%;\n}\n\n.col-sm-1[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-md-1[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-lg-1[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-xs-2[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n  float: left;\n  width: 16.66666667%;\n}\n\n.col-sm-2[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-md-2[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-lg-2[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-xs-3[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n  float: left;\n  width: 25%;\n}\n\n.col-sm-3[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-md-3[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-lg-3[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-xs-4[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n  float: left;\n  width: 33.33333333%;\n}\n\n.col-sm-4[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-md-4[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-lg-4[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-xs-5[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n  float: left;\n  width: 41.66666667%;\n}\n\n.col-sm-5[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-md-5[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-lg-5[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-xs-6[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n  float: left;\n  width: 50%;\n}\n\n.col-sm-6[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-md-6[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-lg-6[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-xs-7[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n  float: left;\n  width: 58.33333333%;\n}\n\n.col-sm-7[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-md-7[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-lg-7[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-xs-8[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n  float: left;\n  width: 66.66666667%;\n}\n\n.col-sm-8[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-md-8[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-lg-8[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-xs-9[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n  float: left;\n  width: 75%;\n}\n\n.col-sm-9[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-md-9[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-lg-9[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-xs-10[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n  float: left;\n  width: 83.33333333%;\n}\n\n.col-sm-10[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-md-10[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-lg-10[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-xs-11[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n  float: left;\n  width: 91.66666667%;\n}\n\n.col-sm-11[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-md-11[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-lg-11[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-xs-12[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n  float: left;\n  width: 100%;\n}\n\n.col-sm-12[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-md-12[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-lg-12[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-xs-pull-12[_ngcontent-%COMP%] {\n  right: 100%;\n}\n\n.col-xs-pull-11[_ngcontent-%COMP%] {\n  right: 91.66666667%;\n}\n\n.col-xs-pull-10[_ngcontent-%COMP%] {\n  right: 83.33333333%;\n}\n\n.col-xs-pull-9[_ngcontent-%COMP%] {\n  right: 75%;\n}\n\n.col-xs-pull-8[_ngcontent-%COMP%] {\n  right: 66.66666667%;\n}\n\n.col-xs-pull-7[_ngcontent-%COMP%] {\n  right: 58.33333333%;\n}\n\n.col-xs-pull-6[_ngcontent-%COMP%] {\n  right: 50%;\n}\n\n.col-xs-pull-5[_ngcontent-%COMP%] {\n  right: 41.66666667%;\n}\n\n.col-xs-pull-4[_ngcontent-%COMP%] {\n  right: 33.33333333%;\n}\n\n.col-xs-pull-3[_ngcontent-%COMP%] {\n  right: 25%;\n}\n\n.col-xs-pull-2[_ngcontent-%COMP%] {\n  right: 16.66666667%;\n}\n\n.col-xs-pull-1[_ngcontent-%COMP%] {\n  right: 8.33333333%;\n}\n\n.col-xs-pull-0[_ngcontent-%COMP%] {\n  right: auto;\n}\n\n.col-xs-push-12[_ngcontent-%COMP%] {\n  left: 100%;\n}\n\n.col-xs-push-11[_ngcontent-%COMP%] {\n  left: 91.66666667%;\n}\n\n.col-xs-push-10[_ngcontent-%COMP%] {\n  left: 83.33333333%;\n}\n\n.col-xs-push-9[_ngcontent-%COMP%] {\n  left: 75%;\n}\n\n.col-xs-push-8[_ngcontent-%COMP%] {\n  left: 66.66666667%;\n}\n\n.col-xs-push-7[_ngcontent-%COMP%] {\n  left: 58.33333333%;\n}\n\n.col-xs-push-6[_ngcontent-%COMP%] {\n  left: 50%;\n}\n\n.col-xs-push-5[_ngcontent-%COMP%] {\n  left: 41.66666667%;\n}\n\n.col-xs-push-4[_ngcontent-%COMP%] {\n  left: 33.33333333%;\n}\n\n.col-xs-push-3[_ngcontent-%COMP%] {\n  left: 25%;\n}\n\n.col-xs-push-2[_ngcontent-%COMP%] {\n  left: 16.66666667%;\n}\n\n.col-xs-push-1[_ngcontent-%COMP%] {\n  left: 8.33333333%;\n}\n\n.col-xs-push-0[_ngcontent-%COMP%] {\n  left: auto;\n}\n\n.col-xs-offset-12[_ngcontent-%COMP%] {\n  margin-left: 100%;\n}\n\n.col-xs-offset-11[_ngcontent-%COMP%] {\n  margin-left: 91.66666667%;\n}\n\n.col-xs-offset-10[_ngcontent-%COMP%] {\n  margin-left: 83.33333333%;\n}\n\n.col-xs-offset-9[_ngcontent-%COMP%] {\n  margin-left: 75%;\n}\n\n.col-xs-offset-8[_ngcontent-%COMP%] {\n  margin-left: 66.66666667%;\n}\n\n.col-xs-offset-7[_ngcontent-%COMP%] {\n  margin-left: 58.33333333%;\n}\n\n.col-xs-offset-6[_ngcontent-%COMP%] {\n  margin-left: 50%;\n}\n\n.col-xs-offset-5[_ngcontent-%COMP%] {\n  margin-left: 41.66666667%;\n}\n\n.col-xs-offset-4[_ngcontent-%COMP%] {\n  margin-left: 33.33333333%;\n}\n\n.col-xs-offset-3[_ngcontent-%COMP%] {\n  margin-left: 25%;\n}\n\n.col-xs-offset-2[_ngcontent-%COMP%] {\n  margin-left: 16.66666667%;\n}\n\n.col-xs-offset-1[_ngcontent-%COMP%] {\n  margin-left: 8.33333333%;\n}\n\n.col-xs-offset-0[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\n@media (min-width: 768px) {\n  .lead[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n\n  .dl-horizontal[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n    float: left;\n    width: 160px;\n    overflow: hidden;\n    clear: left;\n    text-align: right;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .dl-horizontal[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n    margin-left: 180px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 750px;\n  }\n  .container[_ngcontent-%COMP%]    > .navbar-header[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-left: 0;\n  }\n  .container[_ngcontent-%COMP%]    > .navbar-collapse[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-left: 0;\n  }\n\n  .col-sm-1[_ngcontent-%COMP%] {\n    float: left;\n    width: 8.33333333%;\n  }\n\n  .col-sm-2[_ngcontent-%COMP%] {\n    float: left;\n    width: 16.66666667%;\n  }\n\n  .col-sm-3[_ngcontent-%COMP%] {\n    float: left;\n    width: 25%;\n  }\n\n  .col-sm-4[_ngcontent-%COMP%] {\n    float: left;\n    width: 33.33333333%;\n  }\n\n  .col-sm-5[_ngcontent-%COMP%] {\n    float: left;\n    width: 41.66666667%;\n  }\n\n  .col-sm-6[_ngcontent-%COMP%] {\n    float: left;\n    width: 50%;\n  }\n\n  .col-sm-7[_ngcontent-%COMP%] {\n    float: left;\n    width: 58.33333333%;\n  }\n\n  .col-sm-8[_ngcontent-%COMP%] {\n    float: left;\n    width: 66.66666667%;\n  }\n\n  .col-sm-9[_ngcontent-%COMP%] {\n    float: left;\n    width: 75%;\n  }\n\n  .col-sm-10[_ngcontent-%COMP%] {\n    float: left;\n    width: 83.33333333%;\n  }\n\n  .col-sm-11[_ngcontent-%COMP%] {\n    float: left;\n    width: 91.66666667%;\n  }\n\n  .col-sm-12[_ngcontent-%COMP%] {\n    float: left;\n    width: 100%;\n  }\n\n  .col-sm-pull-12[_ngcontent-%COMP%] {\n    right: 100%;\n  }\n\n  .col-sm-pull-11[_ngcontent-%COMP%] {\n    right: 91.66666667%;\n  }\n\n  .col-sm-pull-10[_ngcontent-%COMP%] {\n    right: 83.33333333%;\n  }\n\n  .col-sm-pull-9[_ngcontent-%COMP%] {\n    right: 75%;\n  }\n\n  .col-sm-pull-8[_ngcontent-%COMP%] {\n    right: 66.66666667%;\n  }\n\n  .col-sm-pull-7[_ngcontent-%COMP%] {\n    right: 58.33333333%;\n  }\n\n  .col-sm-pull-6[_ngcontent-%COMP%] {\n    right: 50%;\n  }\n\n  .col-sm-pull-5[_ngcontent-%COMP%] {\n    right: 41.66666667%;\n  }\n\n  .col-sm-pull-4[_ngcontent-%COMP%] {\n    right: 33.33333333%;\n  }\n\n  .col-sm-pull-3[_ngcontent-%COMP%] {\n    right: 25%;\n  }\n\n  .col-sm-pull-2[_ngcontent-%COMP%] {\n    right: 16.66666667%;\n  }\n\n  .col-sm-pull-1[_ngcontent-%COMP%] {\n    right: 8.33333333%;\n  }\n\n  .col-sm-pull-0[_ngcontent-%COMP%] {\n    right: auto;\n  }\n\n  .col-sm-push-12[_ngcontent-%COMP%] {\n    left: 100%;\n  }\n\n  .col-sm-push-11[_ngcontent-%COMP%] {\n    left: 91.66666667%;\n  }\n\n  .col-sm-push-10[_ngcontent-%COMP%] {\n    left: 83.33333333%;\n  }\n\n  .col-sm-push-9[_ngcontent-%COMP%] {\n    left: 75%;\n  }\n\n  .col-sm-push-8[_ngcontent-%COMP%] {\n    left: 66.66666667%;\n  }\n\n  .col-sm-push-7[_ngcontent-%COMP%] {\n    left: 58.33333333%;\n  }\n\n  .col-sm-push-6[_ngcontent-%COMP%] {\n    left: 50%;\n  }\n\n  .col-sm-push-5[_ngcontent-%COMP%] {\n    left: 41.66666667%;\n  }\n\n  .col-sm-push-4[_ngcontent-%COMP%] {\n    left: 33.33333333%;\n  }\n\n  .col-sm-push-3[_ngcontent-%COMP%] {\n    left: 25%;\n  }\n\n  .col-sm-push-2[_ngcontent-%COMP%] {\n    left: 16.66666667%;\n  }\n\n  .col-sm-push-1[_ngcontent-%COMP%] {\n    left: 8.33333333%;\n  }\n\n  .col-sm-push-0[_ngcontent-%COMP%] {\n    left: auto;\n  }\n\n  .col-sm-offset-12[_ngcontent-%COMP%] {\n    margin-left: 100%;\n  }\n\n  .col-sm-offset-11[_ngcontent-%COMP%] {\n    margin-left: 91.66666667%;\n  }\n\n  .col-sm-offset-10[_ngcontent-%COMP%] {\n    margin-left: 83.33333333%;\n  }\n\n  .col-sm-offset-9[_ngcontent-%COMP%] {\n    margin-left: 75%;\n  }\n\n  .col-sm-offset-8[_ngcontent-%COMP%] {\n    margin-left: 66.66666667%;\n  }\n\n  .col-sm-offset-7[_ngcontent-%COMP%] {\n    margin-left: 58.33333333%;\n  }\n\n  .col-sm-offset-6[_ngcontent-%COMP%] {\n    margin-left: 50%;\n  }\n\n  .col-sm-offset-5[_ngcontent-%COMP%] {\n    margin-left: 41.66666667%;\n  }\n\n  .col-sm-offset-4[_ngcontent-%COMP%] {\n    margin-left: 33.33333333%;\n  }\n\n  .col-sm-offset-3[_ngcontent-%COMP%] {\n    margin-left: 25%;\n  }\n\n  .col-sm-offset-2[_ngcontent-%COMP%] {\n    margin-left: 16.66666667%;\n  }\n\n  .col-sm-offset-1[_ngcontent-%COMP%] {\n    margin-left: 8.33333333%;\n  }\n\n  .col-sm-offset-0[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n\n  .form-inline[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline[_ngcontent-%COMP%]   .form-control-static[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .form-inline[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .form-inline[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .form-inline[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-btn[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .form-inline[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .form-inline[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .form-inline[_ngcontent-%COMP%]   .control-label[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n  .form-inline[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n    position: relative;\n    margin-left: 0;\n  }\n  .form-inline[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n  .form-inline[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n    position: relative;\n    margin-left: 0;\n  }\n  .form-inline[_ngcontent-%COMP%]   .has-feedback[_ngcontent-%COMP%]   .form-control-feedback[_ngcontent-%COMP%] {\n    top: 0;\n  }\n\n  .form-horizontal[_ngcontent-%COMP%]   .control-label[_ngcontent-%COMP%] {\n    padding-top: 7px;\n    margin-bottom: 0;\n    text-align: right;\n  }\n  .form-horizontal[_ngcontent-%COMP%]   .form-group-lg[_ngcontent-%COMP%]   .control-label[_ngcontent-%COMP%] {\n    padding-top: 11px;\n    font-size: 18px;\n  }\n  .form-horizontal[_ngcontent-%COMP%]   .form-group-sm[_ngcontent-%COMP%]   .control-label[_ngcontent-%COMP%] {\n    padding-top: 6px;\n    font-size: 12px;\n  }\n\n  .navbar-right[_ngcontent-%COMP%] {\n    float: right !important;\n    margin-right: -15px;\n  }\n  .navbar-right[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    right: 0;\n    left: auto;\n  }\n  .navbar-right[_ngcontent-%COMP%]   .dropdown-menu-left[_ngcontent-%COMP%] {\n    right: auto;\n    left: 0;\n  }\n  .navbar-right[_ngcontent-%COMP%]    ~ .navbar-right[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n\n  .nav-tabs.nav-justified[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-tabs.nav-justified[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs.nav-justified[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    border-bottom-color: #fff;\n  }\n  .nav-tabs.nav-justified[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n    border-bottom-color: #fff;\n  }\n  .nav-tabs.nav-justified[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n    border-bottom-color: #fff;\n  }\n\n  .nav-justified[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-justified[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n\n  .nav-tabs-justified[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs-justified[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    border-bottom-color: #fff;\n  }\n  .nav-tabs-justified[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n    border-bottom-color: #fff;\n  }\n  .nav-tabs-justified[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n    border-bottom-color: #fff;\n  }\n\n  .navbar[_ngcontent-%COMP%] {\n    border-radius: 4px;\n  }\n  .navbar[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    margin-left: -15px;\n  }\n  .navbar[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    margin-left: -15px;\n  }\n\n  .navbar-header[_ngcontent-%COMP%] {\n    float: left;\n  }\n\n  .navbar-collapse[_ngcontent-%COMP%] {\n    width: auto;\n    border-top: 0;\n    box-shadow: none;\n  }\n\n  .navbar-collapse.collapse[_ngcontent-%COMP%] {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n\n  .navbar-collapse.in[_ngcontent-%COMP%] {\n    overflow-y: visible;\n  }\n\n  .navbar-fixed-top[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n  .navbar-fixed-top[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0;\n  }\n\n  .navbar-static-top[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n  .navbar-static-top[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0;\n  }\n\n  .navbar-fixed-bottom[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n  .navbar-fixed-bottom[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0;\n  }\n\n  .container-fluid[_ngcontent-%COMP%]    > .navbar-header[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-left: 0;\n  }\n  .container-fluid[_ngcontent-%COMP%]    > .navbar-collapse[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-left: 0;\n  }\n\n  .navbar-toggle[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .navbar-nav[_ngcontent-%COMP%] {\n    float: left;\n    margin: 0;\n  }\n  .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    float: left;\n  }\n  .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n\n  .navbar-form[_ngcontent-%COMP%] {\n    width: auto;\n    padding-top: 0;\n    padding-bottom: 0;\n    margin-right: 0;\n    margin-left: 0;\n    border: 0;\n    box-shadow: none;\n  }\n  .navbar-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .navbar-form[_ngcontent-%COMP%]   .form-control-static[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .navbar-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .navbar-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .navbar-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-btn[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .navbar-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .navbar-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .navbar-form[_ngcontent-%COMP%]   .control-label[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n  .navbar-form[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n    position: relative;\n    margin-left: 0;\n  }\n  .navbar-form[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n  .navbar-form[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n    position: relative;\n    margin-left: 0;\n  }\n  .navbar-form[_ngcontent-%COMP%]   .has-feedback[_ngcontent-%COMP%]   .form-control-feedback[_ngcontent-%COMP%] {\n    top: 0;\n  }\n\n  .navbar-text[_ngcontent-%COMP%] {\n    float: left;\n    margin-right: 15px;\n    margin-left: 15px;\n  }\n\n  .navbar-left[_ngcontent-%COMP%] {\n    float: left !important;\n  }\n\n  .modal-dialog[_ngcontent-%COMP%] {\n    width: 600px;\n    margin: 30px auto;\n  }\n\n  .modal-content[_ngcontent-%COMP%] {\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n  }\n\n  .modal-sm[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n\n@media (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    width: 970px;\n  }\n\n  .col-md-1[_ngcontent-%COMP%] {\n    float: left;\n    width: 8.33333333%;\n  }\n\n  .col-md-2[_ngcontent-%COMP%] {\n    float: left;\n    width: 16.66666667%;\n  }\n\n  .col-md-3[_ngcontent-%COMP%] {\n    float: left;\n    width: 25%;\n  }\n\n  .col-md-4[_ngcontent-%COMP%] {\n    float: left;\n    width: 33.33333333%;\n  }\n\n  .col-md-5[_ngcontent-%COMP%] {\n    float: left;\n    width: 41.66666667%;\n  }\n\n  .col-md-6[_ngcontent-%COMP%] {\n    float: left;\n    width: 50%;\n  }\n\n  .col-md-7[_ngcontent-%COMP%] {\n    float: left;\n    width: 58.33333333%;\n  }\n\n  .col-md-8[_ngcontent-%COMP%] {\n    float: left;\n    width: 66.66666667%;\n  }\n\n  .col-md-9[_ngcontent-%COMP%] {\n    float: left;\n    width: 75%;\n  }\n\n  .col-md-10[_ngcontent-%COMP%] {\n    float: left;\n    width: 83.33333333%;\n  }\n\n  .col-md-11[_ngcontent-%COMP%] {\n    float: left;\n    width: 91.66666667%;\n  }\n\n  .col-md-12[_ngcontent-%COMP%] {\n    float: left;\n    width: 100%;\n  }\n\n  .col-md-pull-12[_ngcontent-%COMP%] {\n    right: 100%;\n  }\n\n  .col-md-pull-11[_ngcontent-%COMP%] {\n    right: 91.66666667%;\n  }\n\n  .col-md-pull-10[_ngcontent-%COMP%] {\n    right: 83.33333333%;\n  }\n\n  .col-md-pull-9[_ngcontent-%COMP%] {\n    right: 75%;\n  }\n\n  .col-md-pull-8[_ngcontent-%COMP%] {\n    right: 66.66666667%;\n  }\n\n  .col-md-pull-7[_ngcontent-%COMP%] {\n    right: 58.33333333%;\n  }\n\n  .col-md-pull-6[_ngcontent-%COMP%] {\n    right: 50%;\n  }\n\n  .col-md-pull-5[_ngcontent-%COMP%] {\n    right: 41.66666667%;\n  }\n\n  .col-md-pull-4[_ngcontent-%COMP%] {\n    right: 33.33333333%;\n  }\n\n  .col-md-pull-3[_ngcontent-%COMP%] {\n    right: 25%;\n  }\n\n  .col-md-pull-2[_ngcontent-%COMP%] {\n    right: 16.66666667%;\n  }\n\n  .col-md-pull-1[_ngcontent-%COMP%] {\n    right: 8.33333333%;\n  }\n\n  .col-md-pull-0[_ngcontent-%COMP%] {\n    right: auto;\n  }\n\n  .col-md-push-12[_ngcontent-%COMP%] {\n    left: 100%;\n  }\n\n  .col-md-push-11[_ngcontent-%COMP%] {\n    left: 91.66666667%;\n  }\n\n  .col-md-push-10[_ngcontent-%COMP%] {\n    left: 83.33333333%;\n  }\n\n  .col-md-push-9[_ngcontent-%COMP%] {\n    left: 75%;\n  }\n\n  .col-md-push-8[_ngcontent-%COMP%] {\n    left: 66.66666667%;\n  }\n\n  .col-md-push-7[_ngcontent-%COMP%] {\n    left: 58.33333333%;\n  }\n\n  .col-md-push-6[_ngcontent-%COMP%] {\n    left: 50%;\n  }\n\n  .col-md-push-5[_ngcontent-%COMP%] {\n    left: 41.66666667%;\n  }\n\n  .col-md-push-4[_ngcontent-%COMP%] {\n    left: 33.33333333%;\n  }\n\n  .col-md-push-3[_ngcontent-%COMP%] {\n    left: 25%;\n  }\n\n  .col-md-push-2[_ngcontent-%COMP%] {\n    left: 16.66666667%;\n  }\n\n  .col-md-push-1[_ngcontent-%COMP%] {\n    left: 8.33333333%;\n  }\n\n  .col-md-push-0[_ngcontent-%COMP%] {\n    left: auto;\n  }\n\n  .col-md-offset-12[_ngcontent-%COMP%] {\n    margin-left: 100%;\n  }\n\n  .col-md-offset-11[_ngcontent-%COMP%] {\n    margin-left: 91.66666667%;\n  }\n\n  .col-md-offset-10[_ngcontent-%COMP%] {\n    margin-left: 83.33333333%;\n  }\n\n  .col-md-offset-9[_ngcontent-%COMP%] {\n    margin-left: 75%;\n  }\n\n  .col-md-offset-8[_ngcontent-%COMP%] {\n    margin-left: 66.66666667%;\n  }\n\n  .col-md-offset-7[_ngcontent-%COMP%] {\n    margin-left: 58.33333333%;\n  }\n\n  .col-md-offset-6[_ngcontent-%COMP%] {\n    margin-left: 50%;\n  }\n\n  .col-md-offset-5[_ngcontent-%COMP%] {\n    margin-left: 41.66666667%;\n  }\n\n  .col-md-offset-4[_ngcontent-%COMP%] {\n    margin-left: 33.33333333%;\n  }\n\n  .col-md-offset-3[_ngcontent-%COMP%] {\n    margin-left: 25%;\n  }\n\n  .col-md-offset-2[_ngcontent-%COMP%] {\n    margin-left: 16.66666667%;\n  }\n\n  .col-md-offset-1[_ngcontent-%COMP%] {\n    margin-left: 8.33333333%;\n  }\n\n  .col-md-offset-0[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n\n  .modal-lg[_ngcontent-%COMP%] {\n    width: 900px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1170px;\n  }\n\n  .col-lg-1[_ngcontent-%COMP%] {\n    float: left;\n    width: 8.33333333%;\n  }\n\n  .col-lg-2[_ngcontent-%COMP%] {\n    float: left;\n    width: 16.66666667%;\n  }\n\n  .col-lg-3[_ngcontent-%COMP%] {\n    float: left;\n    width: 25%;\n  }\n\n  .col-lg-4[_ngcontent-%COMP%] {\n    float: left;\n    width: 33.33333333%;\n  }\n\n  .col-lg-5[_ngcontent-%COMP%] {\n    float: left;\n    width: 41.66666667%;\n  }\n\n  .col-lg-6[_ngcontent-%COMP%] {\n    float: left;\n    width: 50%;\n  }\n\n  .col-lg-7[_ngcontent-%COMP%] {\n    float: left;\n    width: 58.33333333%;\n  }\n\n  .col-lg-8[_ngcontent-%COMP%] {\n    float: left;\n    width: 66.66666667%;\n  }\n\n  .col-lg-9[_ngcontent-%COMP%] {\n    float: left;\n    width: 75%;\n  }\n\n  .col-lg-10[_ngcontent-%COMP%] {\n    float: left;\n    width: 83.33333333%;\n  }\n\n  .col-lg-11[_ngcontent-%COMP%] {\n    float: left;\n    width: 91.66666667%;\n  }\n\n  .col-lg-12[_ngcontent-%COMP%] {\n    float: left;\n    width: 100%;\n  }\n\n  .col-lg-pull-12[_ngcontent-%COMP%] {\n    right: 100%;\n  }\n\n  .col-lg-pull-11[_ngcontent-%COMP%] {\n    right: 91.66666667%;\n  }\n\n  .col-lg-pull-10[_ngcontent-%COMP%] {\n    right: 83.33333333%;\n  }\n\n  .col-lg-pull-9[_ngcontent-%COMP%] {\n    right: 75%;\n  }\n\n  .col-lg-pull-8[_ngcontent-%COMP%] {\n    right: 66.66666667%;\n  }\n\n  .col-lg-pull-7[_ngcontent-%COMP%] {\n    right: 58.33333333%;\n  }\n\n  .col-lg-pull-6[_ngcontent-%COMP%] {\n    right: 50%;\n  }\n\n  .col-lg-pull-5[_ngcontent-%COMP%] {\n    right: 41.66666667%;\n  }\n\n  .col-lg-pull-4[_ngcontent-%COMP%] {\n    right: 33.33333333%;\n  }\n\n  .col-lg-pull-3[_ngcontent-%COMP%] {\n    right: 25%;\n  }\n\n  .col-lg-pull-2[_ngcontent-%COMP%] {\n    right: 16.66666667%;\n  }\n\n  .col-lg-pull-1[_ngcontent-%COMP%] {\n    right: 8.33333333%;\n  }\n\n  .col-lg-pull-0[_ngcontent-%COMP%] {\n    right: auto;\n  }\n\n  .col-lg-push-12[_ngcontent-%COMP%] {\n    left: 100%;\n  }\n\n  .col-lg-push-11[_ngcontent-%COMP%] {\n    left: 91.66666667%;\n  }\n\n  .col-lg-push-10[_ngcontent-%COMP%] {\n    left: 83.33333333%;\n  }\n\n  .col-lg-push-9[_ngcontent-%COMP%] {\n    left: 75%;\n  }\n\n  .col-lg-push-8[_ngcontent-%COMP%] {\n    left: 66.66666667%;\n  }\n\n  .col-lg-push-7[_ngcontent-%COMP%] {\n    left: 58.33333333%;\n  }\n\n  .col-lg-push-6[_ngcontent-%COMP%] {\n    left: 50%;\n  }\n\n  .col-lg-push-5[_ngcontent-%COMP%] {\n    left: 41.66666667%;\n  }\n\n  .col-lg-push-4[_ngcontent-%COMP%] {\n    left: 33.33333333%;\n  }\n\n  .col-lg-push-3[_ngcontent-%COMP%] {\n    left: 25%;\n  }\n\n  .col-lg-push-2[_ngcontent-%COMP%] {\n    left: 16.66666667%;\n  }\n\n  .col-lg-push-1[_ngcontent-%COMP%] {\n    left: 8.33333333%;\n  }\n\n  .col-lg-push-0[_ngcontent-%COMP%] {\n    left: auto;\n  }\n\n  .col-lg-offset-12[_ngcontent-%COMP%] {\n    margin-left: 100%;\n  }\n\n  .col-lg-offset-11[_ngcontent-%COMP%] {\n    margin-left: 91.66666667%;\n  }\n\n  .col-lg-offset-10[_ngcontent-%COMP%] {\n    margin-left: 83.33333333%;\n  }\n\n  .col-lg-offset-9[_ngcontent-%COMP%] {\n    margin-left: 75%;\n  }\n\n  .col-lg-offset-8[_ngcontent-%COMP%] {\n    margin-left: 66.66666667%;\n  }\n\n  .col-lg-offset-7[_ngcontent-%COMP%] {\n    margin-left: 58.33333333%;\n  }\n\n  .col-lg-offset-6[_ngcontent-%COMP%] {\n    margin-left: 50%;\n  }\n\n  .col-lg-offset-5[_ngcontent-%COMP%] {\n    margin-left: 41.66666667%;\n  }\n\n  .col-lg-offset-4[_ngcontent-%COMP%] {\n    margin-left: 33.33333333%;\n  }\n\n  .col-lg-offset-3[_ngcontent-%COMP%] {\n    margin-left: 25%;\n  }\n\n  .col-lg-offset-2[_ngcontent-%COMP%] {\n    margin-left: 16.66666667%;\n  }\n\n  .col-lg-offset-1[_ngcontent-%COMP%] {\n    margin-left: 8.33333333%;\n  }\n\n  .col-lg-offset-0[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n\n  .visible-lg[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n\n  table.visible-lg[_ngcontent-%COMP%] {\n    display: table !important;\n  }\n\n  tr.visible-lg[_ngcontent-%COMP%] {\n    display: table-row !important;\n  }\n\n  th.visible-lg[_ngcontent-%COMP%] {\n    display: table-cell !important;\n  }\n\n  td.visible-lg[_ngcontent-%COMP%] {\n    display: table-cell !important;\n  }\n\n  .visible-lg-block[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n\n  .visible-lg-inline[_ngcontent-%COMP%] {\n    display: inline !important;\n  }\n\n  .visible-lg-inline-block[_ngcontent-%COMP%] {\n    display: inline-block !important;\n  }\n\n  .hidden-lg[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .table-responsive[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #ddd;\n  }\n  .table-responsive[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n  .table-responsive[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n    white-space: nowrap;\n  }\n  .table-responsive[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n    white-space: nowrap;\n  }\n  .table-responsive[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n    white-space: nowrap;\n  }\n  .table-responsive[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n    white-space: nowrap;\n  }\n  .table-responsive[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n    white-space: nowrap;\n  }\n  .table-responsive[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n    white-space: nowrap;\n  }\n  .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n    border: 0;\n  }\n  .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n    border-left: 0;\n  }\n  .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n    border-right: 0;\n  }\n  .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:first-child {\n    border-left: 0;\n  }\n  .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:last-child {\n    border-right: 0;\n  }\n  .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n    border-left: 0;\n  }\n  .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n    border-right: 0;\n  }\n  .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:first-child {\n    border-left: 0;\n  }\n  .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:last-child {\n    border-right: 0;\n  }\n  .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:last-child    > th[_ngcontent-%COMP%] {\n    border-bottom: 0;\n  }\n  .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:last-child    > td[_ngcontent-%COMP%] {\n    border-bottom: 0;\n  }\n  .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n    border-left: 0;\n  }\n  .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n    border-right: 0;\n  }\n  .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:first-child {\n    border-left: 0;\n  }\n  .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:last-child {\n    border-right: 0;\n  }\n  .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:last-child    > th[_ngcontent-%COMP%] {\n    border-bottom: 0;\n  }\n  .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:last-child    > td[_ngcontent-%COMP%] {\n    border-bottom: 0;\n  }\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=date].form-control[_ngcontent-%COMP%] {\n    line-height: 34px;\n  }\n\n  input[type=time].form-control[_ngcontent-%COMP%] {\n    line-height: 34px;\n  }\n\n  input[type=datetime-local].form-control[_ngcontent-%COMP%] {\n    line-height: 34px;\n  }\n\n  input[type=month].form-control[_ngcontent-%COMP%] {\n    line-height: 34px;\n  }\n\n  input[type=date].input-sm[_ngcontent-%COMP%] {\n    line-height: 30px;\n  }\n\n  input[type=time].input-sm[_ngcontent-%COMP%] {\n    line-height: 30px;\n  }\n\n  input[type=datetime-local].input-sm[_ngcontent-%COMP%] {\n    line-height: 30px;\n  }\n\n  input[type=month].input-sm[_ngcontent-%COMP%] {\n    line-height: 30px;\n  }\n\n  .input-group-sm[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n    line-height: 30px;\n  }\n  .input-group-sm[_ngcontent-%COMP%]   input[type=time][_ngcontent-%COMP%] {\n    line-height: 30px;\n  }\n  .input-group-sm[_ngcontent-%COMP%]   input[type=datetime-local][_ngcontent-%COMP%] {\n    line-height: 30px;\n  }\n  .input-group-sm[_ngcontent-%COMP%]   input[type=month][_ngcontent-%COMP%] {\n    line-height: 30px;\n  }\n\n  input[type=date].input-lg[_ngcontent-%COMP%] {\n    line-height: 46px;\n  }\n\n  input[type=time].input-lg[_ngcontent-%COMP%] {\n    line-height: 46px;\n  }\n\n  input[type=datetime-local].input-lg[_ngcontent-%COMP%] {\n    line-height: 46px;\n  }\n\n  input[type=month].input-lg[_ngcontent-%COMP%] {\n    line-height: 46px;\n  }\n\n  .input-group-lg[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n    line-height: 46px;\n  }\n  .input-group-lg[_ngcontent-%COMP%]   input[type=time][_ngcontent-%COMP%] {\n    line-height: 46px;\n  }\n  .input-group-lg[_ngcontent-%COMP%]   input[type=datetime-local][_ngcontent-%COMP%] {\n    line-height: 46px;\n  }\n  .input-group-lg[_ngcontent-%COMP%]   input[type=month][_ngcontent-%COMP%] {\n    line-height: 46px;\n  }\n}\n\n@media (max-device-width: 480px) and (orientation: landscape) {\n  .navbar-fixed-top[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n    max-height: 200px;\n  }\n\n  .navbar-fixed-bottom[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n    max-height: 200px;\n  }\n}\n\n@media (max-width: 767px) {\n  .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    box-shadow: none;\n  }\n  .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    padding: 5px 15px 5px 25px;\n    line-height: 20px;\n  }\n  .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n    background-image: none;\n  }\n  .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n    background-image: none;\n  }\n  .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%] {\n    padding: 5px 15px 5px 25px;\n  }\n\n  .navbar-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n  }\n  .navbar-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n  }\n\n  .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    color: #777;\n  }\n  .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    background-color: transparent;\n  }\n  .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n    color: #333;\n    background-color: transparent;\n  }\n  .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    color: #555;\n    background-color: #e7e7e7;\n  }\n  .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n    color: #555;\n    background-color: #e7e7e7;\n  }\n  .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n    color: #555;\n    background-color: #e7e7e7;\n  }\n  .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > .disabled[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    color: #ccc;\n    background-color: transparent;\n  }\n  .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > .disabled[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n    color: #ccc;\n    background-color: transparent;\n  }\n  .navbar-default[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > .disabled[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n    color: #ccc;\n    background-color: transparent;\n  }\n\n  .navbar-inverse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > .dropdown-header[_ngcontent-%COMP%] {\n    border-color: #080808;\n  }\n  .navbar-inverse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n    background-color: #080808;\n  }\n  .navbar-inverse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    color: #9d9d9d;\n  }\n  .navbar-inverse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n    color: #fff;\n    background-color: transparent;\n  }\n  .navbar-inverse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n    color: #fff;\n    background-color: transparent;\n  }\n  .navbar-inverse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #080808;\n  }\n  .navbar-inverse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n    color: #fff;\n    background-color: #080808;\n  }\n  .navbar-inverse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n    color: #fff;\n    background-color: #080808;\n  }\n  .navbar-inverse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > .disabled[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    color: #444;\n    background-color: transparent;\n  }\n  .navbar-inverse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > .disabled[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n    color: #444;\n    background-color: transparent;\n  }\n  .navbar-inverse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > .disabled[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n    color: #444;\n    background-color: transparent;\n  }\n\n  .visible-xs[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n\n  table.visible-xs[_ngcontent-%COMP%] {\n    display: table !important;\n  }\n\n  tr.visible-xs[_ngcontent-%COMP%] {\n    display: table-row !important;\n  }\n\n  th.visible-xs[_ngcontent-%COMP%] {\n    display: table-cell !important;\n  }\n\n  td.visible-xs[_ngcontent-%COMP%] {\n    display: table-cell !important;\n  }\n\n  .visible-xs-block[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n\n  .visible-xs-inline[_ngcontent-%COMP%] {\n    display: inline !important;\n  }\n\n  .visible-xs-inline-block[_ngcontent-%COMP%] {\n    display: inline-block !important;\n  }\n\n  .hidden-xs[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .jumbotron[_ngcontent-%COMP%] {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n  .jumbotron[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 63px;\n  }\n  .jumbotron[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%] {\n    font-size: 63px;\n  }\n\n  .container[_ngcontent-%COMP%]   .jumbotron[_ngcontent-%COMP%] {\n    padding-right: 60px;\n    padding-left: 60px;\n  }\n\n  .container-fluid[_ngcontent-%COMP%]   .jumbotron[_ngcontent-%COMP%] {\n    padding-right: 60px;\n    padding-left: 60px;\n  }\n\n  .carousel-control[_ngcontent-%COMP%]   .glyphicon-chevron-left[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px;\n    margin-left: -10px;\n  }\n  .carousel-control[_ngcontent-%COMP%]   .glyphicon-chevron-right[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px;\n    margin-right: -10px;\n  }\n  .carousel-control[_ngcontent-%COMP%]   .icon-prev[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px;\n    margin-left: -10px;\n  }\n  .carousel-control[_ngcontent-%COMP%]   .icon-next[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px;\n    margin-right: -10px;\n  }\n\n  .carousel-caption[_ngcontent-%COMP%] {\n    right: 20%;\n    left: 20%;\n    padding-bottom: 30px;\n  }\n\n  .carousel-indicators[_ngcontent-%COMP%] {\n    bottom: 20px;\n  }\n}\n\n@media all and (transform-3d) {\n  .carousel-inner[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%] {\n    transition: transform 0.6s ease-in-out;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    perspective: 1000px;\n  }\n  .carousel-inner[_ngcontent-%COMP%]    > .item.next[_ngcontent-%COMP%] {\n    left: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n  .carousel-inner[_ngcontent-%COMP%]    > .item.active.right[_ngcontent-%COMP%] {\n    left: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n  .carousel-inner[_ngcontent-%COMP%]    > .item.prev[_ngcontent-%COMP%] {\n    left: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n  .carousel-inner[_ngcontent-%COMP%]    > .item.active.left[_ngcontent-%COMP%] {\n    left: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n  .carousel-inner[_ngcontent-%COMP%]    > .item.next.left[_ngcontent-%COMP%] {\n    left: 0;\n    transform: translate3d(0, 0, 0);\n  }\n  .carousel-inner[_ngcontent-%COMP%]    > .item.prev.right[_ngcontent-%COMP%] {\n    left: 0;\n    transform: translate3d(0, 0, 0);\n  }\n  .carousel-inner[_ngcontent-%COMP%]    > .item.active[_ngcontent-%COMP%] {\n    left: 0;\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@media (-webkit-transform-3d) {\n  .carousel-inner[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%] {\n    transition: transform 0.6s ease-in-out;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    perspective: 1000px;\n  }\n  .carousel-inner[_ngcontent-%COMP%]    > .item.next[_ngcontent-%COMP%] {\n    left: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n  .carousel-inner[_ngcontent-%COMP%]    > .item.active.right[_ngcontent-%COMP%] {\n    left: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n  .carousel-inner[_ngcontent-%COMP%]    > .item.prev[_ngcontent-%COMP%] {\n    left: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n  .carousel-inner[_ngcontent-%COMP%]    > .item.active.left[_ngcontent-%COMP%] {\n    left: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n  .carousel-inner[_ngcontent-%COMP%]    > .item.next.left[_ngcontent-%COMP%] {\n    left: 0;\n    transform: translate3d(0, 0, 0);\n  }\n  .carousel-inner[_ngcontent-%COMP%]    > .item.prev.right[_ngcontent-%COMP%] {\n    left: 0;\n    transform: translate3d(0, 0, 0);\n  }\n  .carousel-inner[_ngcontent-%COMP%]    > .item.active[_ngcontent-%COMP%] {\n    left: 0;\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n\n  table.visible-sm[_ngcontent-%COMP%] {\n    display: table !important;\n  }\n\n  tr.visible-sm[_ngcontent-%COMP%] {\n    display: table-row !important;\n  }\n\n  th.visible-sm[_ngcontent-%COMP%] {\n    display: table-cell !important;\n  }\n\n  td.visible-sm[_ngcontent-%COMP%] {\n    display: table-cell !important;\n  }\n\n  .visible-sm-block[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n\n  .visible-sm-inline[_ngcontent-%COMP%] {\n    display: inline !important;\n  }\n\n  .visible-sm-inline-block[_ngcontent-%COMP%] {\n    display: inline-block !important;\n  }\n\n  .hidden-sm[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n\n  table.visible-md[_ngcontent-%COMP%] {\n    display: table !important;\n  }\n\n  tr.visible-md[_ngcontent-%COMP%] {\n    display: table-row !important;\n  }\n\n  th.visible-md[_ngcontent-%COMP%] {\n    display: table-cell !important;\n  }\n\n  td.visible-md[_ngcontent-%COMP%] {\n    display: table-cell !important;\n  }\n\n  .visible-md-block[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n\n  .visible-md-inline[_ngcontent-%COMP%] {\n    display: inline !important;\n  }\n\n  .visible-md-inline-block[_ngcontent-%COMP%] {\n    display: inline-block !important;\n  }\n\n  .hidden-md[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n\n.bg-img[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  z-index: -1;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n}\n\n.pr-1[_ngcontent-%COMP%] {\n  padding-right: 1rem !important;\n}\n\n.pl-1[_ngcontent-%COMP%] {\n  padding-left: 1rem !important;\n}\n\n.pr-2[_ngcontent-%COMP%] {\n  padding-right: 2rem !important;\n}\n\n.pl-2[_ngcontent-%COMP%] {\n  padding-left: 2rem !important;\n}\n\n.pr-3[_ngcontent-%COMP%] {\n  padding-right: 3rem !important;\n}\n\n.pl-3[_ngcontent-%COMP%] {\n  padding-left: 3rem !important;\n}\n\n.pr-4[_ngcontent-%COMP%] {\n  padding-right: 4rem !important;\n}\n\n.pl-4[_ngcontent-%COMP%] {\n  padding-left: 4rem !important;\n}\n\n.pr-5[_ngcontent-%COMP%] {\n  padding-right: 5rem !important;\n}\n\n.pl-5[_ngcontent-%COMP%] {\n  padding-left: 5rem !important;\n}\n\n.docs-navbar-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 8px 16px;\n  box-shadow: #00000030 0px 3px 6px;\n  height: 66px;\n}\n\n.docs-navbar-header[_ngcontent-%COMP%]    > .mat-button[_ngcontent-%COMP%]:last-child {\n  margin-left: auto;\n}\n\n.flex-spacer[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.docs-angular-logo[_ngcontent-%COMP%] {\n  height: 26px;\n  margin: 0 4px 3px 0;\n  vertical-align: middle;\n}\n\n.docs-github-logo[_ngcontent-%COMP%] {\n  height: 21px;\n  margin: 0 7px 2px 0;\n  vertical-align: middle;\n}\n\n.docs-navbar-link[_ngcontent-%COMP%] {\n  text-decoration: inherit;\n  flex: 1;\n}\n\n.docs-navbar[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.docs-navbar-show-small[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.skip-link-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 5px;\n}\n\n\n\n@media (max-width: 720px) {\n  .docs-navbar-show-small[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .docs-navbar[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  .docs-navbar--github-logo[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  div.burger[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n\n#view-code[_ngcontent-%COMP%] {\n  font-size: 13px;\n  text-transform: uppercase;\n  font-weight: 700;\n  text-decoration: none;\n  position: absolute;\n  top: 640px;\n  left: 50%;\n  margin-left: -35px;\n}\n\ndiv.screen[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  top: 100px;\n  left: 0;\n}\n\n.list[_ngcontent-%COMP%] {\n  margin-top: 36px;\n  text-align: left;\n}\n\n.item[_ngcontent-%COMP%] {\n  height: 115px;\n  margin-top: 30px 0;\n  padding-left: 115px;\n  clear: both;\n}\n\n.item[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-radius: 3px;\n}\n\n.item[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  float: left;\n  width: 71px;\n  height: 71px;\n  margin-left: -93px;\n}\n\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  height: 11px;\n  width: 180px;\n  margin-bottom: 19px;\n  float: left;\n}\n\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(3) {\n  width: 75px;\n  margin-botom: 0;\n}\n\ndiv.burger[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 40px;\n  position: absolute;\n  top: 25px;\n  right: 21px;\n  cursor: pointer;\n  display: none;\n}\n\ndiv.x[_ngcontent-%COMP%], div.y[_ngcontent-%COMP%], div.z[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: auto;\n  top: 0px;\n  bottom: 0px;\n  background: #000;\n  border-radius: 2px;\n  transition: all 200ms ease-out;\n}\n\ndiv.x[_ngcontent-%COMP%], div.y[_ngcontent-%COMP%], div.z[_ngcontent-%COMP%] {\n  height: 3px;\n  width: 26px;\n}\n\ndiv.y[_ngcontent-%COMP%] {\n  top: 18px;\n}\n\ndiv.z[_ngcontent-%COMP%] {\n  top: 37px;\n}\n\ndiv.collapse[_ngcontent-%COMP%] {\n  top: 20px;\n  transition: all 70ms ease-out;\n}\n\ndiv.rotate30[_ngcontent-%COMP%] {\n  transform: rotate(30deg);\n  transition: all 50ms ease-out;\n}\n\ndiv.rotate150[_ngcontent-%COMP%] {\n  transform: rotate(150deg);\n  transition: all 50ms ease-out;\n}\n\ndiv.rotate45[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n  transition: all 100ms ease-out;\n}\n\ndiv.rotate135[_ngcontent-%COMP%] {\n  transform: rotate(135deg);\n  transition: all 100ms ease-out;\n}\n\ndiv.navbar[_ngcontent-%COMP%] {\n  height: 73px;\n}\n\ndiv.circle[_ngcontent-%COMP%] {\n  border-radius: 0%;\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  top: 0;\n  right: 36px;\n  background: #fff;\n  opacity: 1;\n  transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);\n}\n\ndiv.circle.expand[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  transition: all 400ms cubic-bezier(0, 0.995, 0.99, 1);\n}\n\ndiv.menu[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n}\n\ndiv.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  position: absolute;\n  top: 50px;\n  left: 0;\n  opacity: 0;\n  width: 100%;\n  text-align: center;\n  font-size: 0px;\n  transition: all 70ms cubic-bezier(0, 0.995, 0.99, 1);\n}\n\ndiv.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n  text-decoration: none;\n  font-size: 25px;\n  opacity: 1;\n}\n\ndiv.screen[_ngcontent-%COMP%]   div.menu[_ngcontent-%COMP%]   li.animate[_ngcontent-%COMP%] {\n  font-size: 21px;\n  z-index: 2;\n  opacity: 1;\n  transition: all 150ms cubic-bezier(0, 0.995, 0.99, 1);\n}\n\ndiv.menu[_ngcontent-%COMP%]   li.animate[_ngcontent-%COMP%]:nth-of-type(1) {\n  top: 120px;\n  transition-delay: 0s;\n}\n\ndiv.menu[_ngcontent-%COMP%]   li.animate[_ngcontent-%COMP%]:nth-of-type(2) {\n  top: 190px;\n  transition-delay: 0.03s;\n}\n\ndiv.menu[_ngcontent-%COMP%]   li.animate[_ngcontent-%COMP%]:nth-of-type(3) {\n  top: 260px;\n  transition-delay: 0.06s;\n}\n\ndiv.menu[_ngcontent-%COMP%]   li.animate[_ngcontent-%COMP%]:nth-of-type(4) {\n  top: 330px;\n  transition-delay: 0.09s;\n}\n\ndiv.menu[_ngcontent-%COMP%]   li.animate[_ngcontent-%COMP%]:nth-of-type(5) {\n  top: 400px;\n  transition-delay: 0.12s;\n}\n\ndiv.menu[_ngcontent-%COMP%]   li.animate[_ngcontent-%COMP%]:nth-of-type(6) {\n  top: 470px;\n  transition-delay: 0.15s;\n}\n\n.top-items[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei9xdWVzdGlvbi9xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQUE7QUFDRDs7QUFJQTtFQUNDLFNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBREQ7O0FBR0E7RUFDQyxTQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUFEOztBQUVBO0VBQ0MsU0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUNEOztBQUNBO0VBQ0MsMEJBQUE7RUFDQSxlQUFBO0FBRUQ7O0FBQUE7RUFDQywwQkFBQTtFQUNBLGVBQUE7QUFHRDs7QUFEQTtFQUNDLGVBQUE7QUFJRDs7QUFGQTtFQUdDLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBS0Q7O0FBSkM7RUFDQyxvQkFBQTtFQUNBLDBDQUFBO0VBQ0Esb0JBQUE7QUFNRjs7QUFIQTtFQUdDLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBTUQ7O0FBTEM7RUFDQyxvQkFBQTtFQUNBLDBDQUFBO0VBQ0Esb0JBQUE7QUFPRjs7QUFIQztFQUNDLFlBQUE7QUFNRjs7QUFKQztFQUNDLFlBQUE7QUFNRjs7QUFIQTtFQUdDLHVCQUFBO0VBQ0EsNkJBQUE7RUFHQSxzQkFBQTtFQUNBLHdCQUFBO0FBTUQ7O0FBTEM7RUFDQyx3QkFBQTtBQU9GOztBQUxDO0VBQ0Msd0JBQUE7QUFPRjs7QUFKQTtFQUNDLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQU9EOztBQUxBO0VBQ0MsVUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VB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QUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUtRLG9EQUFBO0FBMlJUOztBQXpSQTtFQUNDLFdBQUE7RUFFQSxxQkFBQTtFQUVDLGVBQUE7RUFDQSxVQUFBO0FBMFJGOztBQXZSQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0QsVUFBQTtFQUtRLHFEQUFBO0FBMFJUOztBQXhSQTtFQUNDLFVBQUE7RUFDQSxvQkFBQTtBQTJSRDs7QUF6UkE7RUFDQyxVQUFBO0VBQ0EsdUJBQUE7QUE0UkQ7O0FBelJBO0VBQ0MsVUFBQTtFQUNBLHVCQUFBO0FBNFJEOztBQXpSQTtFQUNDLFVBQUE7RUFDQSx1QkFBQTtBQTRSRDs7QUF6UkE7RUFDQyxVQUFBO0VBQ0EsdUJBQUE7QUE0UkQ7O0FBelJBO0VBQ0MsVUFBQTtFQUNBLHVCQUFBO0FBNFJEOztBQXpSQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQTRSRCIsImZpbGUiOiJzcmMvYXBwL3F1aXovcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucC0xe1xyXG5cdHBhZGRpbmc6IDFlbTtcclxufVxyXG5cclxuXHJcblxyXG5vcHRncm91cCB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdGZvbnQ6IGluaGVyaXQ7XHJcblx0Y29sb3I6IGluaGVyaXQ7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuc2VsZWN0IHtcclxuXHRtYXJnaW46IDA7XHJcblx0Zm9udDogaW5oZXJpdDtcclxuXHRjb2xvcjogaW5oZXJpdDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuXHRmb250LWZhbWlseTogaW5oZXJpdDtcclxuXHRmb250LXNpemU6IGluaGVyaXQ7XHJcblx0bGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxudGV4dGFyZWEge1xyXG5cdG1hcmdpbjogMDtcclxuXHRmb250OiBpbmhlcml0O1xyXG5cdGNvbG9yOiBpbmhlcml0O1xyXG5cdG92ZXJmbG93OiBhdXRvO1xyXG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG5cdGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuXHRsaW5lLWhlaWdodDogaW5oZXJpdDtcclxufVxyXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0ge1xyXG5cdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuYnV0dG9uW2Rpc2FibGVkXSB7XHJcblx0Y3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcblx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bWFyZ2luOiA0cHggMCAwO1xyXG5cdG1hcmdpbi10b3A6IDFweCBcXDk7XHJcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuXHQmOmZvY3VzIHtcclxuXHRcdG91dGxpbmU6IHRoaW4gZG90dGVkO1xyXG5cdFx0b3V0bGluZTogNXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xyXG5cdFx0b3V0bGluZS1vZmZzZXQ6IC0ycHg7XHJcblx0fVxyXG59XHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcblx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bWFyZ2luOiA0cHggMCAwO1xyXG5cdG1hcmdpbi10b3A6IDFweCBcXDk7XHJcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuXHQmOmZvY3VzIHtcclxuXHRcdG91dGxpbmU6IHRoaW4gZG90dGVkO1xyXG5cdFx0b3V0bGluZTogNXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xyXG5cdFx0b3V0bGluZS1vZmZzZXQ6IC0ycHg7XHJcblx0fVxyXG59XHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xyXG5cdCY6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG5cdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdH1cclxuXHQmOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuXHRcdGhlaWdodDogYXV0bztcclxuXHR9XHJcbn1cclxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XHJcblx0LXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuXHQtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG5cdGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG5cdC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG5cdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0Jjo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XHJcblx0XHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0fVxyXG5cdCY6Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xyXG5cdFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdH1cclxufVxyXG5maWVsZHNldCB7XHJcblx0cGFkZGluZzogLjM1ZW0gLjYyNWVtIC43NWVtO1xyXG5cdG1hcmdpbjogMCAycHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcclxuXHRtaW4td2lkdGg6IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRtYXJnaW46IDA7XHJcblx0Ym9yZGVyOiAwO1xyXG59XHJcbmxlZ2VuZCB7XHJcblx0cGFkZGluZzogMDtcclxuXHRib3JkZXI6IDA7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZzogMDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdGZvbnQtc2l6ZTogMjFweDtcclxuXHRsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuXHRjb2xvcjogIzMzMztcclxuXHRib3JkZXI6IDA7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbn1cclxudGFibGUge1xyXG5cdGJvcmRlci1zcGFjaW5nOiAwO1xyXG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Y29sW2NsYXNzKj1cImNvbC1cIl0ge1xyXG5cdFx0cG9zaXRpb246IHN0YXRpYztcclxuXHRcdGRpc3BsYXk6IHRhYmxlLWNvbHVtbjtcclxuXHRcdGZsb2F0OiBub25lO1xyXG5cdH1cclxuXHR0ZFtjbGFzcyo9XCJjb2wtXCJdIHtcclxuXHRcdHBvc2l0aW9uOiBzdGF0aWM7XHJcblx0XHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG5cdFx0ZmxvYXQ6IG5vbmU7XHJcblx0fVxyXG5cdHRoW2NsYXNzKj1cImNvbC1cIl0ge1xyXG5cdFx0cG9zaXRpb246IHN0YXRpYztcclxuXHRcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcblx0XHRmbG9hdDogbm9uZTtcclxuXHR9XHJcbn1cclxudGQge1xyXG5cdHBhZGRpbmc6IDA7XHJcbn1cclxudGgge1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uZ2x5cGhpY29uIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dG9wOiAxcHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGZvbnQtZmFtaWx5OiAnR2x5cGhpY29ucyBIYWxmbGluZ3MnO1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdGxpbmUtaGVpZ2h0OiAxO1xyXG5cdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG5cdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcbioge1xyXG5cdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQmOmJlZm9yZSB7XHJcblx0XHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdH1cclxuXHQmOmFmdGVyIHtcclxuXHRcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0fVxyXG59XHJcbi5pbWctcmVzcG9uc2l2ZSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogYXV0bztcclxufVxyXG4udGh1bWJuYWlsIHtcclxuXHQ+aW1nIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0fVxyXG5cdGEge1xyXG5cdFx0PmltZyB7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogYXV0bztcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRcdH1cclxuXHR9XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cGFkZGluZzogNHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0bGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlciAuMnMgZWFzZS1pbi1vdXQ7XHJcblx0LW8tdHJhbnNpdGlvbjogYm9yZGVyIC4ycyBlYXNlLWluLW91dDtcclxuXHR0cmFuc2l0aW9uOiBib3JkZXIgLjJzIGVhc2UtaW4tb3V0O1xyXG5cdC5jYXB0aW9uIHtcclxuXHRcdHBhZGRpbmc6IDlweDtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdH1cclxufVxyXG4uY2Fyb3VzZWwtaW5uZXIge1xyXG5cdD4uaXRlbSB7XHJcblx0XHQ+aW1nIHtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdG1heC13aWR0aDogMTAwJTtcclxuXHRcdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdH1cclxuXHRcdD5hIHtcclxuXHRcdFx0PmltZyB7XHJcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdGhlaWdodDogYXV0bztcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdC13ZWJraXQtdHJhbnNpdGlvbjogLjZzIGVhc2UtaW4tb3V0IGxlZnQ7XHJcblx0XHQtby10cmFuc2l0aW9uOiAuNnMgZWFzZS1pbi1vdXQgbGVmdDtcclxuXHRcdHRyYW5zaXRpb246IC42cyBlYXNlLWluLW91dCBsZWZ0O1xyXG5cdH1cclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHQ+LmFjdGl2ZSB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdGxlZnQ6IDA7XHJcblx0fVxyXG5cdD4ubmV4dCB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bGVmdDogMTAwJTtcclxuXHR9XHJcblx0Pi5wcmV2IHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRsZWZ0OiAtMTAwJTtcclxuXHR9XHJcblx0Pi5uZXh0LmxlZnQge1xyXG5cdFx0bGVmdDogMDtcclxuXHR9XHJcblx0Pi5wcmV2LnJpZ2h0IHtcclxuXHRcdGxlZnQ6IDA7XHJcblx0fVxyXG5cdD4uYWN0aXZlLmxlZnQge1xyXG5cdFx0bGVmdDogLTEwMCU7XHJcblx0fVxyXG5cdD4uYWN0aXZlLnJpZ2h0IHtcclxuXHRcdGxlZnQ6IDEwMCU7XHJcblx0fVxyXG59XHJcbi5pbWctcm91bmRlZCB7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcbi5pbWctdGh1bWJuYWlsIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRwYWRkaW5nOiA0cHg7XHJcblx0bGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5pbWctY2lyY2xlIHtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLnNyLW9ubHkge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMXB4O1xyXG5cdGhlaWdodDogMXB4O1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bWFyZ2luOiAtMXB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0Y2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcclxuXHRib3JkZXI6IDA7XHJcbn1cclxuLnNyLW9ubHktZm9jdXNhYmxlIHtcclxuXHQmOmFjdGl2ZSB7XHJcblx0XHRwb3NpdGlvbjogc3RhdGljO1xyXG5cdFx0d2lkdGg6IGF1dG87XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRvdmVyZmxvdzogdmlzaWJsZTtcclxuXHRcdGNsaXA6IGF1dG87XHJcblx0fVxyXG5cdCY6Zm9jdXMge1xyXG5cdFx0cG9zaXRpb246IHN0YXRpYztcclxuXHRcdHdpZHRoOiBhdXRvO1xyXG5cdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0b3ZlcmZsb3c6IHZpc2libGU7XHJcblx0XHRjbGlwOiBhdXRvO1xyXG5cdH1cclxufVxyXG5bcm9sZT1cImJ1dHRvblwiXSB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmgyIHtcclxuXHRmb250LWZhbWlseTogaW5oZXJpdDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjE7XHJcblx0Y29sb3I6IGluaGVyaXQ7XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHRzbWFsbCB7XHJcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDE7XHJcblx0XHRjb2xvcjogIzc3NztcclxuXHRcdGZvbnQtc2l6ZTogNjUlO1xyXG5cdH1cclxuXHQuc21hbGwge1xyXG5cdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxO1xyXG5cdFx0Y29sb3I6ICM3Nzc7XHJcblx0XHRmb250LXNpemU6IDY1JTtcclxuXHR9XHJcbn1cclxuaDMge1xyXG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0bGluZS1oZWlnaHQ6IDEuMTtcclxuXHRjb2xvcjogaW5oZXJpdDtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdHNtYWxsIHtcclxuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdGNvbG9yOiAjNzc3O1xyXG5cdFx0Zm9udC1zaXplOiA2NSU7XHJcblx0fVxyXG5cdC5zbWFsbCB7XHJcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDE7XHJcblx0XHRjb2xvcjogIzc3NztcclxuXHRcdGZvbnQtc2l6ZTogNjUlO1xyXG5cdH1cclxufVxyXG5oNCB7XHJcblx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRsaW5lLWhlaWdodDogMS4xO1xyXG5cdGNvbG9yOiBpbmhlcml0O1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0c21hbGwge1xyXG5cdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxO1xyXG5cdFx0Y29sb3I6ICM3Nzc7XHJcblx0XHRmb250LXNpemU6IDc1JTtcclxuXHR9XHJcblx0LnNtYWxsIHtcclxuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdGNvbG9yOiAjNzc3O1xyXG5cdFx0Zm9udC1zaXplOiA3NSU7XHJcblx0fVxyXG59XHJcbmg1IHtcclxuXHRmb250LWZhbWlseTogaW5oZXJpdDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjE7XHJcblx0Y29sb3I6IGluaGVyaXQ7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRzbWFsbCB7XHJcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDE7XHJcblx0XHRjb2xvcjogIzc3NztcclxuXHRcdGZvbnQtc2l6ZTogNzUlO1xyXG5cdH1cclxuXHQuc21hbGwge1xyXG5cdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxO1xyXG5cdFx0Y29sb3I6ICM3Nzc7XHJcblx0XHRmb250LXNpemU6IDc1JTtcclxuXHR9XHJcbn1cclxuaDYge1xyXG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0bGluZS1oZWlnaHQ6IDEuMTtcclxuXHRjb2xvcjogaW5oZXJpdDtcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdHNtYWxsIHtcclxuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdGNvbG9yOiAjNzc3O1xyXG5cdFx0Zm9udC1zaXplOiA3NSU7XHJcblx0fVxyXG5cdC5zbWFsbCB7XHJcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDE7XHJcblx0XHRjb2xvcjogIzc3NztcclxuXHRcdGZvbnQtc2l6ZTogNzUlO1xyXG5cdH1cclxufVxyXG4uaDEge1xyXG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0bGluZS1oZWlnaHQ6IDEuMTtcclxuXHRjb2xvcjogaW5oZXJpdDtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0Zm9udC1zaXplOiAzNnB4O1xyXG5cdHNtYWxsIHtcclxuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdGNvbG9yOiAjNzc3O1xyXG5cdFx0Zm9udC1zaXplOiA2NSU7XHJcblx0fVxyXG5cdC5zbWFsbCB7XHJcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDE7XHJcblx0XHRjb2xvcjogIzc3NztcclxuXHRcdGZvbnQtc2l6ZTogNjUlO1xyXG5cdH1cclxufVxyXG4uaDIge1xyXG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0bGluZS1oZWlnaHQ6IDEuMTtcclxuXHRjb2xvcjogaW5oZXJpdDtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0Zm9udC1zaXplOiAzMHB4O1xyXG5cdHNtYWxsIHtcclxuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdGNvbG9yOiAjNzc3O1xyXG5cdFx0Zm9udC1zaXplOiA2NSU7XHJcblx0fVxyXG5cdC5zbWFsbCB7XHJcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDE7XHJcblx0XHRjb2xvcjogIzc3NztcclxuXHRcdGZvbnQtc2l6ZTogNjUlO1xyXG5cdH1cclxufVxyXG4uaDMge1xyXG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0bGluZS1oZWlnaHQ6IDEuMTtcclxuXHRjb2xvcjogaW5oZXJpdDtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdHNtYWxsIHtcclxuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdGNvbG9yOiAjNzc3O1xyXG5cdFx0Zm9udC1zaXplOiA2NSU7XHJcblx0fVxyXG5cdC5zbWFsbCB7XHJcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDE7XHJcblx0XHRjb2xvcjogIzc3NztcclxuXHRcdGZvbnQtc2l6ZTogNjUlO1xyXG5cdH1cclxufVxyXG4uaDQge1xyXG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0bGluZS1oZWlnaHQ6IDEuMTtcclxuXHRjb2xvcjogaW5oZXJpdDtcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdHNtYWxsIHtcclxuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdGNvbG9yOiAjNzc3O1xyXG5cdFx0Zm9udC1zaXplOiA3NSU7XHJcblx0fVxyXG5cdC5zbWFsbCB7XHJcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDE7XHJcblx0XHRjb2xvcjogIzc3NztcclxuXHRcdGZvbnQtc2l6ZTogNzUlO1xyXG5cdH1cclxufVxyXG4uaDUge1xyXG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0bGluZS1oZWlnaHQ6IDEuMTtcclxuXHRjb2xvcjogaW5oZXJpdDtcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdHNtYWxsIHtcclxuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdGNvbG9yOiAjNzc3O1xyXG5cdFx0Zm9udC1zaXplOiA3NSU7XHJcblx0fVxyXG5cdC5zbWFsbCB7XHJcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDE7XHJcblx0XHRjb2xvcjogIzc3NztcclxuXHRcdGZvbnQtc2l6ZTogNzUlO1xyXG5cdH1cclxufVxyXG4uaDYge1xyXG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0bGluZS1oZWlnaHQ6IDEuMTtcclxuXHRjb2xvcjogaW5oZXJpdDtcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdHNtYWxsIHtcclxuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdGNvbG9yOiAjNzc3O1xyXG5cdFx0Zm9udC1zaXplOiA3NSU7XHJcblx0fVxyXG5cdC5zbWFsbCB7XHJcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDE7XHJcblx0XHRjb2xvcjogIzc3NztcclxuXHRcdGZvbnQtc2l6ZTogNzUlO1xyXG5cdH1cclxufVxyXG5wIHtcclxuXHRtYXJnaW46IDAgMCAxMHB4O1xyXG59XHJcbi5sZWFkIHtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRmb250LXdlaWdodDogMzAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbn1cclxuLnNtYWxsIHtcclxuXHRmb250LXNpemU6IDg1JTtcclxufVxyXG4ubWFyayB7XHJcblx0cGFkZGluZzogLjJlbTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzO1xyXG59XHJcbi50ZXh0LWxlZnQge1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnRleHQtcmlnaHQge1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi50ZXh0LWNlbnRlciB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50ZXh0LWp1c3RpZnkge1xyXG5cdHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuLnRleHQtbm93cmFwIHtcclxuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi50ZXh0LWxvd2VyY2FzZSB7XHJcblx0dGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxufVxyXG4udGV4dC11cHBlcmNhc2Uge1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLnRleHQtY2FwaXRhbGl6ZSB7XHJcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLnRleHQtbXV0ZWQge1xyXG5cdGNvbG9yOiAjNzc3O1xyXG59XHJcbi50ZXh0LXByaW1hcnkge1xyXG5cdGNvbG9yOiAjMzM3YWI3O1xyXG59XHJcbmEudGV4dC1wcmltYXJ5IHtcclxuXHQmOmhvdmVyIHtcclxuXHRcdGNvbG9yOiAjMjg2MDkwO1xyXG5cdH1cclxuXHQmOmZvY3VzIHtcclxuXHRcdGNvbG9yOiAjMjg2MDkwO1xyXG5cdH1cclxufVxyXG4udGV4dC1zdWNjZXNzIHtcclxuXHRjb2xvcjogIzNjNzYzZDtcclxufVxyXG5hLnRleHQtc3VjY2VzcyB7XHJcblx0Jjpob3ZlciB7XHJcblx0XHRjb2xvcjogIzJiNTQyYztcclxuXHR9XHJcblx0Jjpmb2N1cyB7XHJcblx0XHRjb2xvcjogIzJiNTQyYztcclxuXHR9XHJcbn1cclxuLnRleHQtaW5mbyB7XHJcblx0Y29sb3I6ICMzMTcwOGY7XHJcbn1cclxuYS50ZXh0LWluZm8ge1xyXG5cdCY6aG92ZXIge1xyXG5cdFx0Y29sb3I6ICMyNDUyNjk7XHJcblx0fVxyXG5cdCY6Zm9jdXMge1xyXG5cdFx0Y29sb3I6ICMyNDUyNjk7XHJcblx0fVxyXG59XHJcbi50ZXh0LXdhcm5pbmcge1xyXG5cdGNvbG9yOiAjOGE2ZDNiO1xyXG59XHJcbmEudGV4dC13YXJuaW5nIHtcclxuXHQmOmhvdmVyIHtcclxuXHRcdGNvbG9yOiAjNjY1MTJjO1xyXG5cdH1cclxuXHQmOmZvY3VzIHtcclxuXHRcdGNvbG9yOiAjNjY1MTJjO1xyXG5cdH1cclxufVxyXG4udGV4dC1kYW5nZXIge1xyXG5cdGNvbG9yOiAjYTk0NDQyO1xyXG59XHJcbmEudGV4dC1kYW5nZXIge1xyXG5cdCY6aG92ZXIge1xyXG5cdFx0Y29sb3I6ICM4NDM1MzQ7XHJcblx0fVxyXG5cdCY6Zm9jdXMge1xyXG5cdFx0Y29sb3I6ICM4NDM1MzQ7XHJcblx0fVxyXG59XHJcbi5iZy1wcmltYXJ5IHtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3O1xyXG59XHJcbmEuYmctcHJpbWFyeSB7XHJcblx0Jjpob3ZlciB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjg2MDkwO1xyXG5cdH1cclxuXHQmOmZvY3VzIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMyODYwOTA7XHJcblx0fVxyXG59XHJcbi5iZy1zdWNjZXNzIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmMGQ4O1xyXG59XHJcbmEuYmctc3VjY2VzcyB7XHJcblx0Jjpob3ZlciB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjYzFlMmIzO1xyXG5cdH1cclxuXHQmOmZvY3VzIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNjMWUyYjM7XHJcblx0fVxyXG59XHJcbi5iZy1pbmZvIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZDllZGY3O1xyXG59XHJcbmEuYmctaW5mbyB7XHJcblx0Jjpob3ZlciB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjYWZkOWVlO1xyXG5cdH1cclxuXHQmOmZvY3VzIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNhZmQ5ZWU7XHJcblx0fVxyXG59XHJcbi5iZy13YXJuaW5nIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzO1xyXG59XHJcbmEuYmctd2FybmluZyB7XHJcblx0Jjpob3ZlciB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdlY2I1O1xyXG5cdH1cclxuXHQmOmZvY3VzIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmN2VjYjU7XHJcblx0fVxyXG59XHJcbi5iZy1kYW5nZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmMmRlZGU7XHJcbn1cclxuYS5iZy1kYW5nZXIge1xyXG5cdCY6aG92ZXIge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2U0YjliOTtcclxuXHR9XHJcblx0Jjpmb2N1cyB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTRiOWI5O1xyXG5cdH1cclxufVxyXG4ucGFnZS1oZWFkZXIge1xyXG5cdHBhZGRpbmctYm90dG9tOiA5cHg7XHJcblx0bWFyZ2luOiA0MHB4IDAgMjBweDtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxufVxyXG51bCB7XHJcblx0bWFyZ2luLXRvcDogMDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdHVsIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0fVxyXG5cdG9sIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0fVxyXG59XHJcbm9sIHtcclxuXHRtYXJnaW4tdG9wOiAwO1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0dWwge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR9XHJcblx0b2wge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR9XHJcbn1cclxuLmxpc3QtdW5zdHlsZWQge1xyXG5cdHBhZGRpbmctbGVmdDogMDtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5saXN0LWlubGluZSB7XHJcblx0cGFkZGluZy1sZWZ0OiAwO1xyXG5cdG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0PmxpIHtcclxuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDVweDtcclxuXHRcdHBhZGRpbmctbGVmdDogNXB4O1xyXG5cdH1cclxufVxyXG5kbCB7XHJcblx0bWFyZ2luLXRvcDogMDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbmR0IHtcclxuXHRsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5kZCB7XHJcblx0bGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XHJcblx0bWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuYWJicltkYXRhLW9yaWdpbmFsLXRpdGxlXSB7XHJcblx0Y3Vyc29yOiBoZWxwO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzc3NztcclxufVxyXG4uaW5pdGlhbGlzbSB7XHJcblx0Zm9udC1zaXplOiA5MCU7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnByZS1zY3JvbGxhYmxlIHtcclxuXHRtYXgtaGVpZ2h0OiAzNDBweDtcclxuXHRvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcblx0cGFkZGluZy1yaWdodDogMTVweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cdD4ubmF2YmFyLWhlYWRlciB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG5cdH1cclxuXHQ+Lm5hdmJhci1jb2xsYXBzZSB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG5cdH1cclxuXHQuanVtYm90cm9uIHtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA2cHg7XHJcblx0fVxyXG5cdCY6YmVmb3JlIHtcclxuXHRcdGRpc3BsYXk6IHRhYmxlO1xyXG5cdFx0Y29udGVudDogXCIgXCI7XHJcblx0fVxyXG5cdCY6YWZ0ZXIge1xyXG5cdFx0ZGlzcGxheTogdGFibGU7XHJcblx0XHRjb250ZW50OiBcIiBcIjtcclxuXHRcdGNsZWFyOiBib3RoO1xyXG5cdH1cclxufVxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0Pi5uYXZiYXItaGVhZGVyIHtcclxuXHRcdG1hcmdpbi1yaWdodDogLTE1cHg7XHJcblx0XHRtYXJnaW4tbGVmdDogLTE1cHg7XHJcblx0fVxyXG5cdD4ubmF2YmFyLWNvbGxhcHNlIHtcclxuXHRcdG1hcmdpbi1yaWdodDogLTE1cHg7XHJcblx0XHRtYXJnaW4tbGVmdDogLTE1cHg7XHJcblx0fVxyXG5cdC5qdW1ib3Ryb24ge1xyXG5cdFx0cGFkZGluZy1yaWdodDogMTVweDtcclxuXHRcdHBhZGRpbmctbGVmdDogMTVweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHR9XHJcblx0JjpiZWZvcmUge1xyXG5cdFx0ZGlzcGxheTogdGFibGU7XHJcblx0XHRjb250ZW50OiBcIiBcIjtcclxuXHR9XHJcblx0JjphZnRlciB7XHJcblx0XHRkaXNwbGF5OiB0YWJsZTtcclxuXHRcdGNvbnRlbnQ6IFwiIFwiO1xyXG5cdFx0Y2xlYXI6IGJvdGg7XHJcblx0fVxyXG59XHJcbi5yb3cge1xyXG5cdG1hcmdpbi1yaWdodDogLTE1cHg7XHJcblx0bWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG5cdCY6YmVmb3JlIHtcclxuXHRcdGRpc3BsYXk6IHRhYmxlO1xyXG5cdFx0Y29udGVudDogXCIgXCI7XHJcblx0fVxyXG5cdCY6YWZ0ZXIge1xyXG5cdFx0ZGlzcGxheTogdGFibGU7XHJcblx0XHRjb250ZW50OiBcIiBcIjtcclxuXHRcdGNsZWFyOiBib3RoO1xyXG5cdH1cclxufVxyXG4uY29sLXhzLTEge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRtaW4taGVpZ2h0OiAxcHg7XHJcblx0cGFkZGluZy1yaWdodDogMTVweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0d2lkdGg6IDguMzMzMzMzMzMlO1xyXG59XHJcbi5jb2wtc20tMSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1pbi1oZWlnaHQ6IDFweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4uY29sLW1kLTEge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRtaW4taGVpZ2h0OiAxcHg7XHJcblx0cGFkZGluZy1yaWdodDogMTVweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmNvbC1sZy0xIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWluLWhlaWdodDogMXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcblx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcbi5jb2wteHMtMiB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1pbi1oZWlnaHQ6IDFweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogMTYuNjY2NjY2NjclO1xyXG59XHJcbi5jb2wtc20tMiB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1pbi1oZWlnaHQ6IDFweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4uY29sLW1kLTIge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRtaW4taGVpZ2h0OiAxcHg7XHJcblx0cGFkZGluZy1yaWdodDogMTVweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmNvbC1sZy0yIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWluLWhlaWdodDogMXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcblx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcbi5jb2wteHMtMyB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1pbi1oZWlnaHQ6IDFweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogMjUlO1xyXG59XHJcbi5jb2wtc20tMyB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1pbi1oZWlnaHQ6IDFweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4uY29sLW1kLTMge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRtaW4taGVpZ2h0OiAxcHg7XHJcblx0cGFkZGluZy1yaWdodDogMTVweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmNvbC1sZy0zIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWluLWhlaWdodDogMXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcblx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcbi5jb2wteHMtNCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1pbi1oZWlnaHQ6IDFweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogMzMuMzMzMzMzMzMlO1xyXG59XHJcbi5jb2wtc20tNCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1pbi1oZWlnaHQ6IDFweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4uY29sLW1kLTQge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRtaW4taGVpZ2h0OiAxcHg7XHJcblx0cGFkZGluZy1yaWdodDogMTVweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmNvbC1sZy00IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWluLWhlaWdodDogMXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcblx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcbi5jb2wteHMtNSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1pbi1oZWlnaHQ6IDFweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogNDEuNjY2NjY2NjclO1xyXG59XHJcbi5jb2wtc20tNSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1pbi1oZWlnaHQ6IDFweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4uY29sLW1kLTUge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRtaW4taGVpZ2h0OiAxcHg7XHJcblx0cGFkZGluZy1yaWdodDogMTVweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmNvbC1sZy01IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWluLWhlaWdodDogMXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcblx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcbi5jb2wteHMtNiB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1pbi1oZWlnaHQ6IDFweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogNTAlO1xyXG59XHJcbi5jb2wtc20tNiB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1pbi1oZWlnaHQ6IDFweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4uY29sLW1kLTYge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRtaW4taGVpZ2h0OiAxcHg7XHJcblx0cGFkZGluZy1yaWdodDogMTVweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmNvbC1sZy02IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWluLWhlaWdodDogMXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcblx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcbi5jb2wteHMtNyB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1pbi1oZWlnaHQ6IDFweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogNTguMzMzMzMzMzMlO1xyXG59XHJcbi5jb2wtc20tNyB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1pbi1oZWlnaHQ6IDFweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4uY29sLW1kLTcge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRtaW4taGVpZ2h0OiAxcHg7XHJcblx0cGFkZGluZy1yaWdodDogMTVweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmNvbC1sZy03IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWluLWhlaWdodDogMXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcblx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcbi5jb2wteHMtOCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1pbi1oZWlnaHQ6IDFweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogNjYuNjY2NjY2NjclO1xyXG59XHJcbi5jb2wtc20tOCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1pbi1oZWlnaHQ6IDFweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4uY29sLW1kLTgge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRtaW4taGVpZ2h0OiAxcHg7XHJcblx0cGFkZGluZy1yaWdodDogMTVweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmNvbC1sZy04IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWluLWhlaWdodDogMXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcblx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcbi5jb2wteHMtOSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1pbi1oZWlnaHQ6IDFweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogNzUlO1xyXG59XHJcbi5jb2wtc20tOSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1pbi1oZWlnaHQ6IDFweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4uY29sLW1kLTkge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRtaW4taGVpZ2h0OiAxcHg7XHJcblx0cGFkZGluZy1yaWdodDogMTVweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmNvbC1sZy05IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWluLWhlaWdodDogMXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcblx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcbi5jb2wteHMtMTAge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRtaW4taGVpZ2h0OiAxcHg7XHJcblx0cGFkZGluZy1yaWdodDogMTVweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0d2lkdGg6IDgzLjMzMzMzMzMzJTtcclxufVxyXG4uY29sLXNtLTEwIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWluLWhlaWdodDogMXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcblx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcbi5jb2wtbWQtMTAge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRtaW4taGVpZ2h0OiAxcHg7XHJcblx0cGFkZGluZy1yaWdodDogMTVweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmNvbC1sZy0xMCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1pbi1oZWlnaHQ6IDFweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4uY29sLXhzLTExIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWluLWhlaWdodDogMXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcblx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHdpZHRoOiA5MS42NjY2NjY2NyU7XHJcbn1cclxuLmNvbC1zbS0xMSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1pbi1oZWlnaHQ6IDFweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4uY29sLW1kLTExIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWluLWhlaWdodDogMXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcblx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcbi5jb2wtbGctMTEge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRtaW4taGVpZ2h0OiAxcHg7XHJcblx0cGFkZGluZy1yaWdodDogMTVweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmNvbC14cy0xMiB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1pbi1oZWlnaHQ6IDFweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG4uY29sLXNtLTEyIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWluLWhlaWdodDogMXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcblx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcbi5jb2wtbWQtMTIge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRtaW4taGVpZ2h0OiAxcHg7XHJcblx0cGFkZGluZy1yaWdodDogMTVweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmNvbC1sZy0xMiB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1pbi1oZWlnaHQ6IDFweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4uY29sLXhzLXB1bGwtMTIge1xyXG5cdHJpZ2h0OiAxMDAlO1xyXG59XHJcbi5jb2wteHMtcHVsbC0xMSB7XHJcblx0cmlnaHQ6IDkxLjY2NjY2NjY3JTtcclxufVxyXG4uY29sLXhzLXB1bGwtMTAge1xyXG5cdHJpZ2h0OiA4My4zMzMzMzMzMyU7XHJcbn1cclxuLmNvbC14cy1wdWxsLTkge1xyXG5cdHJpZ2h0OiA3NSU7XHJcbn1cclxuLmNvbC14cy1wdWxsLTgge1xyXG5cdHJpZ2h0OiA2Ni42NjY2NjY2NyU7XHJcbn1cclxuLmNvbC14cy1wdWxsLTcge1xyXG5cdHJpZ2h0OiA1OC4zMzMzMzMzMyU7XHJcbn1cclxuLmNvbC14cy1wdWxsLTYge1xyXG5cdHJpZ2h0OiA1MCU7XHJcbn1cclxuLmNvbC14cy1wdWxsLTUge1xyXG5cdHJpZ2h0OiA0MS42NjY2NjY2NyU7XHJcbn1cclxuLmNvbC14cy1wdWxsLTQge1xyXG5cdHJpZ2h0OiAzMy4zMzMzMzMzMyU7XHJcbn1cclxuLmNvbC14cy1wdWxsLTMge1xyXG5cdHJpZ2h0OiAyNSU7XHJcbn1cclxuLmNvbC14cy1wdWxsLTIge1xyXG5cdHJpZ2h0OiAxNi42NjY2NjY2NyU7XHJcbn1cclxuLmNvbC14cy1wdWxsLTEge1xyXG5cdHJpZ2h0OiA4LjMzMzMzMzMzJTtcclxufVxyXG4uY29sLXhzLXB1bGwtMCB7XHJcblx0cmlnaHQ6IGF1dG87XHJcbn1cclxuLmNvbC14cy1wdXNoLTEyIHtcclxuXHRsZWZ0OiAxMDAlO1xyXG59XHJcbi5jb2wteHMtcHVzaC0xMSB7XHJcblx0bGVmdDogOTEuNjY2NjY2NjclO1xyXG59XHJcbi5jb2wteHMtcHVzaC0xMCB7XHJcblx0bGVmdDogODMuMzMzMzMzMzMlO1xyXG59XHJcbi5jb2wteHMtcHVzaC05IHtcclxuXHRsZWZ0OiA3NSU7XHJcbn1cclxuLmNvbC14cy1wdXNoLTgge1xyXG5cdGxlZnQ6IDY2LjY2NjY2NjY3JTtcclxufVxyXG4uY29sLXhzLXB1c2gtNyB7XHJcblx0bGVmdDogNTguMzMzMzMzMzMlO1xyXG59XHJcbi5jb2wteHMtcHVzaC02IHtcclxuXHRsZWZ0OiA1MCU7XHJcbn1cclxuLmNvbC14cy1wdXNoLTUge1xyXG5cdGxlZnQ6IDQxLjY2NjY2NjY3JTtcclxufVxyXG4uY29sLXhzLXB1c2gtNCB7XHJcblx0bGVmdDogMzMuMzMzMzMzMzMlO1xyXG59XHJcbi5jb2wteHMtcHVzaC0zIHtcclxuXHRsZWZ0OiAyNSU7XHJcbn1cclxuLmNvbC14cy1wdXNoLTIge1xyXG5cdGxlZnQ6IDE2LjY2NjY2NjY3JTtcclxufVxyXG4uY29sLXhzLXB1c2gtMSB7XHJcblx0bGVmdDogOC4zMzMzMzMzMyU7XHJcbn1cclxuLmNvbC14cy1wdXNoLTAge1xyXG5cdGxlZnQ6IGF1dG87XHJcbn1cclxuLmNvbC14cy1vZmZzZXQtMTIge1xyXG5cdG1hcmdpbi1sZWZ0OiAxMDAlO1xyXG59XHJcbi5jb2wteHMtb2Zmc2V0LTExIHtcclxuXHRtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xyXG59XHJcbi5jb2wteHMtb2Zmc2V0LTEwIHtcclxuXHRtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xyXG59XHJcbi5jb2wteHMtb2Zmc2V0LTkge1xyXG5cdG1hcmdpbi1sZWZ0OiA3NSU7XHJcbn1cclxuLmNvbC14cy1vZmZzZXQtOCB7XHJcblx0bWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcclxufVxyXG4uY29sLXhzLW9mZnNldC03IHtcclxuXHRtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xyXG59XHJcbi5jb2wteHMtb2Zmc2V0LTYge1xyXG5cdG1hcmdpbi1sZWZ0OiA1MCU7XHJcbn1cclxuLmNvbC14cy1vZmZzZXQtNSB7XHJcblx0bWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcclxufVxyXG4uY29sLXhzLW9mZnNldC00IHtcclxuXHRtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xyXG59XHJcbi5jb2wteHMtb2Zmc2V0LTMge1xyXG5cdG1hcmdpbi1sZWZ0OiAyNSU7XHJcbn1cclxuLmNvbC14cy1vZmZzZXQtMiB7XHJcblx0bWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcclxufVxyXG4uY29sLXhzLW9mZnNldC0xIHtcclxuXHRtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XHJcbn1cclxuLmNvbC14cy1vZmZzZXQtMCB7XHJcblx0bWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG5cdC5sZWFkIHtcclxuXHRcdGZvbnQtc2l6ZTogMjFweDtcclxuXHR9XHJcblx0LmRsLWhvcml6b250YWwge1xyXG5cdFx0ZHQge1xyXG5cdFx0XHRmbG9hdDogbGVmdDtcclxuXHRcdFx0d2lkdGg6IDE2MHB4O1xyXG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHRjbGVhcjogbGVmdDtcclxuXHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0XHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdFx0fVxyXG5cdFx0ZGQge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMTgwcHg7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5jb250YWluZXIge1xyXG5cdFx0d2lkdGg6IDc1MHB4O1xyXG5cdFx0Pi5uYXZiYXItaGVhZGVyIHtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiAwO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHRcdD4ubmF2YmFyLWNvbGxhcHNlIHtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiAwO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHR9XHJcblx0LmNvbC1zbS0xIHtcclxuXHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0d2lkdGg6IDguMzMzMzMzMzMlO1xyXG5cdH1cclxuXHQuY29sLXNtLTIge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHR3aWR0aDogMTYuNjY2NjY2NjclO1xyXG5cdH1cclxuXHQuY29sLXNtLTMge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHR3aWR0aDogMjUlO1xyXG5cdH1cclxuXHQuY29sLXNtLTQge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHR3aWR0aDogMzMuMzMzMzMzMzMlO1xyXG5cdH1cclxuXHQuY29sLXNtLTUge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHR3aWR0aDogNDEuNjY2NjY2NjclO1xyXG5cdH1cclxuXHQuY29sLXNtLTYge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHR3aWR0aDogNTAlO1xyXG5cdH1cclxuXHQuY29sLXNtLTcge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHR3aWR0aDogNTguMzMzMzMzMzMlO1xyXG5cdH1cclxuXHQuY29sLXNtLTgge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHR3aWR0aDogNjYuNjY2NjY2NjclO1xyXG5cdH1cclxuXHQuY29sLXNtLTkge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHR3aWR0aDogNzUlO1xyXG5cdH1cclxuXHQuY29sLXNtLTEwIHtcclxuXHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0d2lkdGg6IDgzLjMzMzMzMzMzJTtcclxuXHR9XHJcblx0LmNvbC1zbS0xMSB7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHRcdHdpZHRoOiA5MS42NjY2NjY2NyU7XHJcblx0fVxyXG5cdC5jb2wtc20tMTIge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblx0LmNvbC1zbS1wdWxsLTEyIHtcclxuXHRcdHJpZ2h0OiAxMDAlO1xyXG5cdH1cclxuXHQuY29sLXNtLXB1bGwtMTEge1xyXG5cdFx0cmlnaHQ6IDkxLjY2NjY2NjY3JTtcclxuXHR9XHJcblx0LmNvbC1zbS1wdWxsLTEwIHtcclxuXHRcdHJpZ2h0OiA4My4zMzMzMzMzMyU7XHJcblx0fVxyXG5cdC5jb2wtc20tcHVsbC05IHtcclxuXHRcdHJpZ2h0OiA3NSU7XHJcblx0fVxyXG5cdC5jb2wtc20tcHVsbC04IHtcclxuXHRcdHJpZ2h0OiA2Ni42NjY2NjY2NyU7XHJcblx0fVxyXG5cdC5jb2wtc20tcHVsbC03IHtcclxuXHRcdHJpZ2h0OiA1OC4zMzMzMzMzMyU7XHJcblx0fVxyXG5cdC5jb2wtc20tcHVsbC02IHtcclxuXHRcdHJpZ2h0OiA1MCU7XHJcblx0fVxyXG5cdC5jb2wtc20tcHVsbC01IHtcclxuXHRcdHJpZ2h0OiA0MS42NjY2NjY2NyU7XHJcblx0fVxyXG5cdC5jb2wtc20tcHVsbC00IHtcclxuXHRcdHJpZ2h0OiAzMy4zMzMzMzMzMyU7XHJcblx0fVxyXG5cdC5jb2wtc20tcHVsbC0zIHtcclxuXHRcdHJpZ2h0OiAyNSU7XHJcblx0fVxyXG5cdC5jb2wtc20tcHVsbC0yIHtcclxuXHRcdHJpZ2h0OiAxNi42NjY2NjY2NyU7XHJcblx0fVxyXG5cdC5jb2wtc20tcHVsbC0xIHtcclxuXHRcdHJpZ2h0OiA4LjMzMzMzMzMzJTtcclxuXHR9XHJcblx0LmNvbC1zbS1wdWxsLTAge1xyXG5cdFx0cmlnaHQ6IGF1dG87XHJcblx0fVxyXG5cdC5jb2wtc20tcHVzaC0xMiB7XHJcblx0XHRsZWZ0OiAxMDAlO1xyXG5cdH1cclxuXHQuY29sLXNtLXB1c2gtMTEge1xyXG5cdFx0bGVmdDogOTEuNjY2NjY2NjclO1xyXG5cdH1cclxuXHQuY29sLXNtLXB1c2gtMTAge1xyXG5cdFx0bGVmdDogODMuMzMzMzMzMzMlO1xyXG5cdH1cclxuXHQuY29sLXNtLXB1c2gtOSB7XHJcblx0XHRsZWZ0OiA3NSU7XHJcblx0fVxyXG5cdC5jb2wtc20tcHVzaC04IHtcclxuXHRcdGxlZnQ6IDY2LjY2NjY2NjY3JTtcclxuXHR9XHJcblx0LmNvbC1zbS1wdXNoLTcge1xyXG5cdFx0bGVmdDogNTguMzMzMzMzMzMlO1xyXG5cdH1cclxuXHQuY29sLXNtLXB1c2gtNiB7XHJcblx0XHRsZWZ0OiA1MCU7XHJcblx0fVxyXG5cdC5jb2wtc20tcHVzaC01IHtcclxuXHRcdGxlZnQ6IDQxLjY2NjY2NjY3JTtcclxuXHR9XHJcblx0LmNvbC1zbS1wdXNoLTQge1xyXG5cdFx0bGVmdDogMzMuMzMzMzMzMzMlO1xyXG5cdH1cclxuXHQuY29sLXNtLXB1c2gtMyB7XHJcblx0XHRsZWZ0OiAyNSU7XHJcblx0fVxyXG5cdC5jb2wtc20tcHVzaC0yIHtcclxuXHRcdGxlZnQ6IDE2LjY2NjY2NjY3JTtcclxuXHR9XHJcblx0LmNvbC1zbS1wdXNoLTEge1xyXG5cdFx0bGVmdDogOC4zMzMzMzMzMyU7XHJcblx0fVxyXG5cdC5jb2wtc20tcHVzaC0wIHtcclxuXHRcdGxlZnQ6IGF1dG87XHJcblx0fVxyXG5cdC5jb2wtc20tb2Zmc2V0LTEyIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMDAlO1xyXG5cdH1cclxuXHQuY29sLXNtLW9mZnNldC0xMSB7XHJcblx0XHRtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xyXG5cdH1cclxuXHQuY29sLXNtLW9mZnNldC0xMCB7XHJcblx0XHRtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xyXG5cdH1cclxuXHQuY29sLXNtLW9mZnNldC05IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA3NSU7XHJcblx0fVxyXG5cdC5jb2wtc20tb2Zmc2V0LTgge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcclxuXHR9XHJcblx0LmNvbC1zbS1vZmZzZXQtNyB7XHJcblx0XHRtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xyXG5cdH1cclxuXHQuY29sLXNtLW9mZnNldC02IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1MCU7XHJcblx0fVxyXG5cdC5jb2wtc20tb2Zmc2V0LTUge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcclxuXHR9XHJcblx0LmNvbC1zbS1vZmZzZXQtNCB7XHJcblx0XHRtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xyXG5cdH1cclxuXHQuY29sLXNtLW9mZnNldC0zIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyNSU7XHJcblx0fVxyXG5cdC5jb2wtc20tb2Zmc2V0LTIge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcclxuXHR9XHJcblx0LmNvbC1zbS1vZmZzZXQtMSB7XHJcblx0XHRtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XHJcblx0fVxyXG5cdC5jb2wtc20tb2Zmc2V0LTAge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0fVxyXG5cdC5mb3JtLWlubGluZSB7XHJcblx0XHQuZm9ybS1ncm91cCB7XHJcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRcdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRcdH1cclxuXHRcdC5mb3JtLWNvbnRyb2wge1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdHdpZHRoOiBhdXRvO1xyXG5cdFx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdFx0fVxyXG5cdFx0LmZvcm0tY29udHJvbC1zdGF0aWMge1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHR9XHJcblx0XHQuaW5wdXQtZ3JvdXAge1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0XHRcdC5pbnB1dC1ncm91cC1hZGRvbiB7XHJcblx0XHRcdFx0d2lkdGg6IGF1dG87XHJcblx0XHRcdH1cclxuXHRcdFx0LmlucHV0LWdyb3VwLWJ0biB7XHJcblx0XHRcdFx0d2lkdGg6IGF1dG87XHJcblx0XHRcdH1cclxuXHRcdFx0LmZvcm0tY29udHJvbCB7XHJcblx0XHRcdFx0d2lkdGg6IGF1dG87XHJcblx0XHRcdH1cclxuXHRcdFx0Pi5mb3JtLWNvbnRyb2wge1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQuY29udHJvbC1sYWJlbCB7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0XHR9XHJcblx0XHQucmFkaW8ge1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdG1hcmdpbi10b3A6IDA7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0XHRcdGxhYmVsIHtcclxuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0aW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5jaGVja2JveCB7XHJcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0bWFyZ2luLXRvcDogMDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRcdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRcdFx0bGFiZWwge1xyXG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Lmhhcy1mZWVkYmFjayB7XHJcblx0XHRcdC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xyXG5cdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQuZm9ybS1ob3Jpem9udGFsIHtcclxuXHRcdC5jb250cm9sLWxhYmVsIHtcclxuXHRcdFx0cGFkZGluZy10b3A6IDdweDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0XHR9XHJcblx0XHQuZm9ybS1ncm91cC1sZyB7XHJcblx0XHRcdC5jb250cm9sLWxhYmVsIHtcclxuXHRcdFx0XHRwYWRkaW5nLXRvcDogMTFweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5mb3JtLWdyb3VwLXNtIHtcclxuXHRcdFx0LmNvbnRyb2wtbGFiZWwge1xyXG5cdFx0XHRcdHBhZGRpbmctdG9wOiA2cHg7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5uYXZiYXItcmlnaHQge1xyXG5cdFx0LmRyb3Bkb3duLW1lbnUge1xyXG5cdFx0XHRyaWdodDogMDtcclxuXHRcdFx0bGVmdDogYXV0bztcclxuXHRcdH1cclxuXHRcdC5kcm9wZG93bi1tZW51LWxlZnQge1xyXG5cdFx0XHRyaWdodDogYXV0bztcclxuXHRcdFx0bGVmdDogMDtcclxuXHRcdH1cclxuXHRcdGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAtMTVweDtcclxuXHRcdH4ge1xyXG5cdFx0XHQubmF2YmFyLXJpZ2h0IHtcclxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDA7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Lm5hdi10YWJzLm5hdi1qdXN0aWZpZWQge1xyXG5cdFx0PmxpIHtcclxuXHRcdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcclxuXHRcdFx0d2lkdGg6IDElO1xyXG5cdFx0XHQ+YSB7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Pi5hY3RpdmUge1xyXG5cdFx0XHQ+YSB7XHJcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcclxuXHRcdFx0XHQmOmhvdmVyIHtcclxuXHRcdFx0XHRcdGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCY6Zm9jdXMge1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Lm5hdi1qdXN0aWZpZWQge1xyXG5cdFx0PmxpIHtcclxuXHRcdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcclxuXHRcdFx0d2lkdGg6IDElO1xyXG5cdFx0XHQ+YSB7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQubmF2LXRhYnMtanVzdGlmaWVkIHtcclxuXHRcdD5saSB7XHJcblx0XHRcdD5hIHtcclxuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Pi5hY3RpdmUge1xyXG5cdFx0XHQ+YSB7XHJcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcclxuXHRcdFx0XHQmOmhvdmVyIHtcclxuXHRcdFx0XHRcdGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCY6Zm9jdXMge1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Lm5hdmJhciB7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHQ+LmNvbnRhaW5lciB7XHJcblx0XHRcdC5uYXZiYXItYnJhbmQge1xyXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Pi5jb250YWluZXItZmx1aWQge1xyXG5cdFx0XHQubmF2YmFyLWJyYW5kIHtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogLTE1cHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Lm5hdmJhci1oZWFkZXIge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0fVxyXG5cdC5uYXZiYXItY29sbGFwc2Uge1xyXG5cdFx0d2lkdGg6IGF1dG87XHJcblx0XHRib3JkZXItdG9wOiAwO1xyXG5cdFx0LXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG5cdFx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHR9XHJcblx0Lm5hdmJhci1jb2xsYXBzZS5jb2xsYXBzZSB7XHJcblx0XHRkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG5cdFx0aGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMDtcclxuXHRcdG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC5uYXZiYXItY29sbGFwc2UuaW4ge1xyXG5cdFx0b3ZlcmZsb3cteTogdmlzaWJsZTtcclxuXHR9XHJcblx0Lm5hdmJhci1maXhlZC10b3Age1xyXG5cdFx0Lm5hdmJhci1jb2xsYXBzZSB7XHJcblx0XHRcdHBhZGRpbmctcmlnaHQ6IDA7XHJcblx0XHRcdHBhZGRpbmctbGVmdDogMDtcclxuXHRcdH1cclxuXHRcdGJvcmRlci1yYWRpdXM6IDA7XHJcblx0fVxyXG5cdC5uYXZiYXItc3RhdGljLXRvcCB7XHJcblx0XHQubmF2YmFyLWNvbGxhcHNlIHtcclxuXHRcdFx0cGFkZGluZy1yaWdodDogMDtcclxuXHRcdFx0cGFkZGluZy1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cdFx0Ym9yZGVyLXJhZGl1czogMDtcclxuXHR9XHJcblx0Lm5hdmJhci1maXhlZC1ib3R0b20ge1xyXG5cdFx0Lm5hdmJhci1jb2xsYXBzZSB7XHJcblx0XHRcdHBhZGRpbmctcmlnaHQ6IDA7XHJcblx0XHRcdHBhZGRpbmctbGVmdDogMDtcclxuXHRcdH1cclxuXHRcdGJvcmRlci1yYWRpdXM6IDA7XHJcblx0fVxyXG5cdC5jb250YWluZXItZmx1aWQge1xyXG5cdFx0Pi5uYXZiYXItaGVhZGVyIHtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiAwO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHRcdD4ubmF2YmFyLWNvbGxhcHNlIHtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiAwO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHR9XHJcblx0Lm5hdmJhci10b2dnbGUge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0Lm5hdmJhci1uYXYge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHQ+bGkge1xyXG5cdFx0XHRmbG9hdDogbGVmdDtcclxuXHRcdFx0PmEge1xyXG5cdFx0XHRcdHBhZGRpbmctdG9wOiAxNXB4O1xyXG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5uYXZiYXItZm9ybSB7XHJcblx0XHQuZm9ybS1ncm91cCB7XHJcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRcdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRcdH1cclxuXHRcdC5mb3JtLWNvbnRyb2wge1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdHdpZHRoOiBhdXRvO1xyXG5cdFx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdFx0fVxyXG5cdFx0LmZvcm0tY29udHJvbC1zdGF0aWMge1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHR9XHJcblx0XHQuaW5wdXQtZ3JvdXAge1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0XHRcdC5pbnB1dC1ncm91cC1hZGRvbiB7XHJcblx0XHRcdFx0d2lkdGg6IGF1dG87XHJcblx0XHRcdH1cclxuXHRcdFx0LmlucHV0LWdyb3VwLWJ0biB7XHJcblx0XHRcdFx0d2lkdGg6IGF1dG87XHJcblx0XHRcdH1cclxuXHRcdFx0LmZvcm0tY29udHJvbCB7XHJcblx0XHRcdFx0d2lkdGg6IGF1dG87XHJcblx0XHRcdH1cclxuXHRcdFx0Pi5mb3JtLWNvbnRyb2wge1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQuY29udHJvbC1sYWJlbCB7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0XHR9XHJcblx0XHQucmFkaW8ge1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdG1hcmdpbi10b3A6IDA7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0XHRcdGxhYmVsIHtcclxuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0aW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5jaGVja2JveCB7XHJcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0bWFyZ2luLXRvcDogMDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRcdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRcdFx0bGFiZWwge1xyXG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Lmhhcy1mZWVkYmFjayB7XHJcblx0XHRcdC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xyXG5cdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0d2lkdGg6IGF1dG87XHJcblx0XHRwYWRkaW5nLXRvcDogMDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAwO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAwO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHRib3JkZXI6IDA7XHJcblx0XHQtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcblx0XHRib3gtc2hhZG93OiBub25lO1xyXG5cdH1cclxuXHQubmF2YmFyLXRleHQge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTVweDtcclxuXHR9XHJcblx0Lm5hdmJhci1sZWZ0IHtcclxuXHRcdGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC5tb2RhbC1kaWFsb2cge1xyXG5cdFx0d2lkdGg6IDYwMHB4O1xyXG5cdFx0bWFyZ2luOiAzMHB4IGF1dG87XHJcblx0fVxyXG5cdC5tb2RhbC1jb250ZW50IHtcclxuXHRcdC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIC41KTtcclxuXHRcdGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAuNSk7XHJcblx0fVxyXG5cdC5tb2RhbC1zbSB7XHJcblx0XHR3aWR0aDogMzAwcHg7XHJcblx0fVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG5cdC5jb250YWluZXIge1xyXG5cdFx0d2lkdGg6IDk3MHB4O1xyXG5cdH1cclxuXHQuY29sLW1kLTEge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHR3aWR0aDogOC4zMzMzMzMzMyU7XHJcblx0fVxyXG5cdC5jb2wtbWQtMiB7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHRcdHdpZHRoOiAxNi42NjY2NjY2NyU7XHJcblx0fVxyXG5cdC5jb2wtbWQtMyB7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHRcdHdpZHRoOiAyNSU7XHJcblx0fVxyXG5cdC5jb2wtbWQtNCB7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHRcdHdpZHRoOiAzMy4zMzMzMzMzMyU7XHJcblx0fVxyXG5cdC5jb2wtbWQtNSB7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHRcdHdpZHRoOiA0MS42NjY2NjY2NyU7XHJcblx0fVxyXG5cdC5jb2wtbWQtNiB7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHRcdHdpZHRoOiA1MCU7XHJcblx0fVxyXG5cdC5jb2wtbWQtNyB7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHRcdHdpZHRoOiA1OC4zMzMzMzMzMyU7XHJcblx0fVxyXG5cdC5jb2wtbWQtOCB7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHRcdHdpZHRoOiA2Ni42NjY2NjY2NyU7XHJcblx0fVxyXG5cdC5jb2wtbWQtOSB7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHRcdHdpZHRoOiA3NSU7XHJcblx0fVxyXG5cdC5jb2wtbWQtMTAge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHR3aWR0aDogODMuMzMzMzMzMzMlO1xyXG5cdH1cclxuXHQuY29sLW1kLTExIHtcclxuXHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0d2lkdGg6IDkxLjY2NjY2NjY3JTtcclxuXHR9XHJcblx0LmNvbC1tZC0xMiB7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHQuY29sLW1kLXB1bGwtMTIge1xyXG5cdFx0cmlnaHQ6IDEwMCU7XHJcblx0fVxyXG5cdC5jb2wtbWQtcHVsbC0xMSB7XHJcblx0XHRyaWdodDogOTEuNjY2NjY2NjclO1xyXG5cdH1cclxuXHQuY29sLW1kLXB1bGwtMTAge1xyXG5cdFx0cmlnaHQ6IDgzLjMzMzMzMzMzJTtcclxuXHR9XHJcblx0LmNvbC1tZC1wdWxsLTkge1xyXG5cdFx0cmlnaHQ6IDc1JTtcclxuXHR9XHJcblx0LmNvbC1tZC1wdWxsLTgge1xyXG5cdFx0cmlnaHQ6IDY2LjY2NjY2NjY3JTtcclxuXHR9XHJcblx0LmNvbC1tZC1wdWxsLTcge1xyXG5cdFx0cmlnaHQ6IDU4LjMzMzMzMzMzJTtcclxuXHR9XHJcblx0LmNvbC1tZC1wdWxsLTYge1xyXG5cdFx0cmlnaHQ6IDUwJTtcclxuXHR9XHJcblx0LmNvbC1tZC1wdWxsLTUge1xyXG5cdFx0cmlnaHQ6IDQxLjY2NjY2NjY3JTtcclxuXHR9XHJcblx0LmNvbC1tZC1wdWxsLTQge1xyXG5cdFx0cmlnaHQ6IDMzLjMzMzMzMzMzJTtcclxuXHR9XHJcblx0LmNvbC1tZC1wdWxsLTMge1xyXG5cdFx0cmlnaHQ6IDI1JTtcclxuXHR9XHJcblx0LmNvbC1tZC1wdWxsLTIge1xyXG5cdFx0cmlnaHQ6IDE2LjY2NjY2NjY3JTtcclxuXHR9XHJcblx0LmNvbC1tZC1wdWxsLTEge1xyXG5cdFx0cmlnaHQ6IDguMzMzMzMzMzMlO1xyXG5cdH1cclxuXHQuY29sLW1kLXB1bGwtMCB7XHJcblx0XHRyaWdodDogYXV0bztcclxuXHR9XHJcblx0LmNvbC1tZC1wdXNoLTEyIHtcclxuXHRcdGxlZnQ6IDEwMCU7XHJcblx0fVxyXG5cdC5jb2wtbWQtcHVzaC0xMSB7XHJcblx0XHRsZWZ0OiA5MS42NjY2NjY2NyU7XHJcblx0fVxyXG5cdC5jb2wtbWQtcHVzaC0xMCB7XHJcblx0XHRsZWZ0OiA4My4zMzMzMzMzMyU7XHJcblx0fVxyXG5cdC5jb2wtbWQtcHVzaC05IHtcclxuXHRcdGxlZnQ6IDc1JTtcclxuXHR9XHJcblx0LmNvbC1tZC1wdXNoLTgge1xyXG5cdFx0bGVmdDogNjYuNjY2NjY2NjclO1xyXG5cdH1cclxuXHQuY29sLW1kLXB1c2gtNyB7XHJcblx0XHRsZWZ0OiA1OC4zMzMzMzMzMyU7XHJcblx0fVxyXG5cdC5jb2wtbWQtcHVzaC02IHtcclxuXHRcdGxlZnQ6IDUwJTtcclxuXHR9XHJcblx0LmNvbC1tZC1wdXNoLTUge1xyXG5cdFx0bGVmdDogNDEuNjY2NjY2NjclO1xyXG5cdH1cclxuXHQuY29sLW1kLXB1c2gtNCB7XHJcblx0XHRsZWZ0OiAzMy4zMzMzMzMzMyU7XHJcblx0fVxyXG5cdC5jb2wtbWQtcHVzaC0zIHtcclxuXHRcdGxlZnQ6IDI1JTtcclxuXHR9XHJcblx0LmNvbC1tZC1wdXNoLTIge1xyXG5cdFx0bGVmdDogMTYuNjY2NjY2NjclO1xyXG5cdH1cclxuXHQuY29sLW1kLXB1c2gtMSB7XHJcblx0XHRsZWZ0OiA4LjMzMzMzMzMzJTtcclxuXHR9XHJcblx0LmNvbC1tZC1wdXNoLTAge1xyXG5cdFx0bGVmdDogYXV0bztcclxuXHR9XHJcblx0LmNvbC1tZC1vZmZzZXQtMTIge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwMCU7XHJcblx0fVxyXG5cdC5jb2wtbWQtb2Zmc2V0LTExIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyU7XHJcblx0fVxyXG5cdC5jb2wtbWQtb2Zmc2V0LTEwIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XHJcblx0fVxyXG5cdC5jb2wtbWQtb2Zmc2V0LTkge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDc1JTtcclxuXHR9XHJcblx0LmNvbC1tZC1vZmZzZXQtOCB7XHJcblx0XHRtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xyXG5cdH1cclxuXHQuY29sLW1kLW9mZnNldC03IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XHJcblx0fVxyXG5cdC5jb2wtbWQtb2Zmc2V0LTYge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDUwJTtcclxuXHR9XHJcblx0LmNvbC1tZC1vZmZzZXQtNSB7XHJcblx0XHRtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xyXG5cdH1cclxuXHQuY29sLW1kLW9mZnNldC00IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XHJcblx0fVxyXG5cdC5jb2wtbWQtb2Zmc2V0LTMge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDI1JTtcclxuXHR9XHJcblx0LmNvbC1tZC1vZmZzZXQtMiB7XHJcblx0XHRtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xyXG5cdH1cclxuXHQuY29sLW1kLW9mZnNldC0xIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcclxuXHR9XHJcblx0LmNvbC1tZC1vZmZzZXQtMCB7XHJcblx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHR9XHJcblx0Lm1vZGFsLWxnIHtcclxuXHRcdHdpZHRoOiA5MDBweDtcclxuXHR9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG5cdC5jb250YWluZXIge1xyXG5cdFx0d2lkdGg6IDExNzBweDtcclxuXHR9XHJcblx0LmNvbC1sZy0xIHtcclxuXHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0d2lkdGg6IDguMzMzMzMzMzMlO1xyXG5cdH1cclxuXHQuY29sLWxnLTIge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHR3aWR0aDogMTYuNjY2NjY2NjclO1xyXG5cdH1cclxuXHQuY29sLWxnLTMge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHR3aWR0aDogMjUlO1xyXG5cdH1cclxuXHQuY29sLWxnLTQge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHR3aWR0aDogMzMuMzMzMzMzMzMlO1xyXG5cdH1cclxuXHQuY29sLWxnLTUge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHR3aWR0aDogNDEuNjY2NjY2NjclO1xyXG5cdH1cclxuXHQuY29sLWxnLTYge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHR3aWR0aDogNTAlO1xyXG5cdH1cclxuXHQuY29sLWxnLTcge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHR3aWR0aDogNTguMzMzMzMzMzMlO1xyXG5cdH1cclxuXHQuY29sLWxnLTgge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHR3aWR0aDogNjYuNjY2NjY2NjclO1xyXG5cdH1cclxuXHQuY29sLWxnLTkge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHR3aWR0aDogNzUlO1xyXG5cdH1cclxuXHQuY29sLWxnLTEwIHtcclxuXHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0d2lkdGg6IDgzLjMzMzMzMzMzJTtcclxuXHR9XHJcblx0LmNvbC1sZy0xMSB7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHRcdHdpZHRoOiA5MS42NjY2NjY2NyU7XHJcblx0fVxyXG5cdC5jb2wtbGctMTIge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblx0LmNvbC1sZy1wdWxsLTEyIHtcclxuXHRcdHJpZ2h0OiAxMDAlO1xyXG5cdH1cclxuXHQuY29sLWxnLXB1bGwtMTEge1xyXG5cdFx0cmlnaHQ6IDkxLjY2NjY2NjY3JTtcclxuXHR9XHJcblx0LmNvbC1sZy1wdWxsLTEwIHtcclxuXHRcdHJpZ2h0OiA4My4zMzMzMzMzMyU7XHJcblx0fVxyXG5cdC5jb2wtbGctcHVsbC05IHtcclxuXHRcdHJpZ2h0OiA3NSU7XHJcblx0fVxyXG5cdC5jb2wtbGctcHVsbC04IHtcclxuXHRcdHJpZ2h0OiA2Ni42NjY2NjY2NyU7XHJcblx0fVxyXG5cdC5jb2wtbGctcHVsbC03IHtcclxuXHRcdHJpZ2h0OiA1OC4zMzMzMzMzMyU7XHJcblx0fVxyXG5cdC5jb2wtbGctcHVsbC02IHtcclxuXHRcdHJpZ2h0OiA1MCU7XHJcblx0fVxyXG5cdC5jb2wtbGctcHVsbC01IHtcclxuXHRcdHJpZ2h0OiA0MS42NjY2NjY2NyU7XHJcblx0fVxyXG5cdC5jb2wtbGctcHVsbC00IHtcclxuXHRcdHJpZ2h0OiAzMy4zMzMzMzMzMyU7XHJcblx0fVxyXG5cdC5jb2wtbGctcHVsbC0zIHtcclxuXHRcdHJpZ2h0OiAyNSU7XHJcblx0fVxyXG5cdC5jb2wtbGctcHVsbC0yIHtcclxuXHRcdHJpZ2h0OiAxNi42NjY2NjY2NyU7XHJcblx0fVxyXG5cdC5jb2wtbGctcHVsbC0xIHtcclxuXHRcdHJpZ2h0OiA4LjMzMzMzMzMzJTtcclxuXHR9XHJcblx0LmNvbC1sZy1wdWxsLTAge1xyXG5cdFx0cmlnaHQ6IGF1dG87XHJcblx0fVxyXG5cdC5jb2wtbGctcHVzaC0xMiB7XHJcblx0XHRsZWZ0OiAxMDAlO1xyXG5cdH1cclxuXHQuY29sLWxnLXB1c2gtMTEge1xyXG5cdFx0bGVmdDogOTEuNjY2NjY2NjclO1xyXG5cdH1cclxuXHQuY29sLWxnLXB1c2gtMTAge1xyXG5cdFx0bGVmdDogODMuMzMzMzMzMzMlO1xyXG5cdH1cclxuXHQuY29sLWxnLXB1c2gtOSB7XHJcblx0XHRsZWZ0OiA3NSU7XHJcblx0fVxyXG5cdC5jb2wtbGctcHVzaC04IHtcclxuXHRcdGxlZnQ6IDY2LjY2NjY2NjY3JTtcclxuXHR9XHJcblx0LmNvbC1sZy1wdXNoLTcge1xyXG5cdFx0bGVmdDogNTguMzMzMzMzMzMlO1xyXG5cdH1cclxuXHQuY29sLWxnLXB1c2gtNiB7XHJcblx0XHRsZWZ0OiA1MCU7XHJcblx0fVxyXG5cdC5jb2wtbGctcHVzaC01IHtcclxuXHRcdGxlZnQ6IDQxLjY2NjY2NjY3JTtcclxuXHR9XHJcblx0LmNvbC1sZy1wdXNoLTQge1xyXG5cdFx0bGVmdDogMzMuMzMzMzMzMzMlO1xyXG5cdH1cclxuXHQuY29sLWxnLXB1c2gtMyB7XHJcblx0XHRsZWZ0OiAyNSU7XHJcblx0fVxyXG5cdC5jb2wtbGctcHVzaC0yIHtcclxuXHRcdGxlZnQ6IDE2LjY2NjY2NjY3JTtcclxuXHR9XHJcblx0LmNvbC1sZy1wdXNoLTEge1xyXG5cdFx0bGVmdDogOC4zMzMzMzMzMyU7XHJcblx0fVxyXG5cdC5jb2wtbGctcHVzaC0wIHtcclxuXHRcdGxlZnQ6IGF1dG87XHJcblx0fVxyXG5cdC5jb2wtbGctb2Zmc2V0LTEyIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMDAlO1xyXG5cdH1cclxuXHQuY29sLWxnLW9mZnNldC0xMSB7XHJcblx0XHRtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xyXG5cdH1cclxuXHQuY29sLWxnLW9mZnNldC0xMCB7XHJcblx0XHRtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xyXG5cdH1cclxuXHQuY29sLWxnLW9mZnNldC05IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA3NSU7XHJcblx0fVxyXG5cdC5jb2wtbGctb2Zmc2V0LTgge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcclxuXHR9XHJcblx0LmNvbC1sZy1vZmZzZXQtNyB7XHJcblx0XHRtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xyXG5cdH1cclxuXHQuY29sLWxnLW9mZnNldC02IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1MCU7XHJcblx0fVxyXG5cdC5jb2wtbGctb2Zmc2V0LTUge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcclxuXHR9XHJcblx0LmNvbC1sZy1vZmZzZXQtNCB7XHJcblx0XHRtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xyXG5cdH1cclxuXHQuY29sLWxnLW9mZnNldC0zIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyNSU7XHJcblx0fVxyXG5cdC5jb2wtbGctb2Zmc2V0LTIge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcclxuXHR9XHJcblx0LmNvbC1sZy1vZmZzZXQtMSB7XHJcblx0XHRtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XHJcblx0fVxyXG5cdC5jb2wtbGctb2Zmc2V0LTAge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0fVxyXG5cdC52aXNpYmxlLWxnIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdHRhYmxlLnZpc2libGUtbGcge1xyXG5cdFx0ZGlzcGxheTogdGFibGUgIWltcG9ydGFudDtcclxuXHR9XHJcblx0dHIudmlzaWJsZS1sZyB7XHJcblx0XHRkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcclxuXHR9XHJcblx0dGgudmlzaWJsZS1sZyB7XHJcblx0XHRkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdHRkLnZpc2libGUtbGcge1xyXG5cdFx0ZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQudmlzaWJsZS1sZy1ibG9jayB7XHJcblx0XHRkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQudmlzaWJsZS1sZy1pbmxpbmUge1xyXG5cdFx0ZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC52aXNpYmxlLWxnLWlubGluZS1ibG9jayB7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuXHR9XHJcblx0LmhpZGRlbi1sZyB7XHJcblx0XHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcblx0fVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblx0LnRhYmxlLXJlc3BvbnNpdmUge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cdFx0b3ZlcmZsb3cteTogaGlkZGVuO1xyXG5cdFx0LW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XHJcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG5cdFx0Pi50YWJsZSB7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0XHRcdD50aGVhZCB7XHJcblx0XHRcdFx0PnRyIHtcclxuXHRcdFx0XHRcdD50aCB7XHJcblx0XHRcdFx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQ+dGQge1xyXG5cdFx0XHRcdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQ+dGJvZHkge1xyXG5cdFx0XHRcdD50ciB7XHJcblx0XHRcdFx0XHQ+dGgge1xyXG5cdFx0XHRcdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0PnRkIHtcclxuXHRcdFx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0PnRmb290IHtcclxuXHRcdFx0XHQ+dHIge1xyXG5cdFx0XHRcdFx0PnRoIHtcclxuXHRcdFx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdD50ZCB7XHJcblx0XHRcdFx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQ+LnRhYmxlLWJvcmRlcmVkIHtcclxuXHRcdFx0Ym9yZGVyOiAwO1xyXG5cdFx0XHQ+dGhlYWQge1xyXG5cdFx0XHRcdD50ciB7XHJcblx0XHRcdFx0XHQ+dGgge1xyXG5cdFx0XHRcdFx0XHQmOmZpcnN0LWNoaWxkIHtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXItbGVmdDogMDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQmOmxhc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yaWdodDogMDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0PnRkIHtcclxuXHRcdFx0XHRcdFx0JjpmaXJzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLWxlZnQ6IDA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0JjpsYXN0LWNoaWxkIHtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXItcmlnaHQ6IDA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0PnRib2R5IHtcclxuXHRcdFx0XHQ+dHIge1xyXG5cdFx0XHRcdFx0PnRoIHtcclxuXHRcdFx0XHRcdFx0JjpmaXJzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLWxlZnQ6IDA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0JjpsYXN0LWNoaWxkIHtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXItcmlnaHQ6IDA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdD50ZCB7XHJcblx0XHRcdFx0XHRcdCY6Zmlyc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlci1sZWZ0OiAwO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdCY6bGFzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJpZ2h0OiAwO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQmOmxhc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0XHQ+dGgge1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0PnRkIHtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAwO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdD50Zm9vdCB7XHJcblx0XHRcdFx0PnRyIHtcclxuXHRcdFx0XHRcdD50aCB7XHJcblx0XHRcdFx0XHRcdCY6Zmlyc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlci1sZWZ0OiAwO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdCY6bGFzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJpZ2h0OiAwO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQ+dGQge1xyXG5cdFx0XHRcdFx0XHQmOmZpcnN0LWNoaWxkIHtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXItbGVmdDogMDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQmOmxhc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yaWdodDogMDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0JjpsYXN0LWNoaWxkIHtcclxuXHRcdFx0XHRcdFx0PnRoIHtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAwO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdD50ZCB7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAwKSB7XHJcblx0aW5wdXRbdHlwZT1cImRhdGVcIl0uZm9ybS1jb250cm9sIHtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG5cdH1cclxuXHRpbnB1dFt0eXBlPVwidGltZVwiXS5mb3JtLWNvbnRyb2wge1xyXG5cdFx0bGluZS1oZWlnaHQ6IDM0cHg7XHJcblx0fVxyXG5cdGlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXS5mb3JtLWNvbnRyb2wge1xyXG5cdFx0bGluZS1oZWlnaHQ6IDM0cHg7XHJcblx0fVxyXG5cdGlucHV0W3R5cGU9XCJtb250aFwiXS5mb3JtLWNvbnRyb2wge1xyXG5cdFx0bGluZS1oZWlnaHQ6IDM0cHg7XHJcblx0fVxyXG5cdGlucHV0W3R5cGU9XCJkYXRlXCJdLmlucHV0LXNtIHtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cdH1cclxuXHRpbnB1dFt0eXBlPVwidGltZVwiXS5pbnB1dC1zbSB7XHJcblx0XHRsaW5lLWhlaWdodDogMzBweDtcclxuXHR9XHJcblx0aW5wdXRbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdLmlucHV0LXNtIHtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cdH1cclxuXHRpbnB1dFt0eXBlPVwibW9udGhcIl0uaW5wdXQtc20ge1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0fVxyXG5cdC5pbnB1dC1ncm91cC1zbSB7XHJcblx0XHRpbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cdFx0fVxyXG5cdFx0aW5wdXRbdHlwZT1cInRpbWVcIl0ge1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMzBweDtcclxuXHRcdH1cclxuXHRcdGlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXSB7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cdFx0fVxyXG5cdFx0aW5wdXRbdHlwZT1cIm1vbnRoXCJdIHtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0XHR9XHJcblx0fVxyXG5cdGlucHV0W3R5cGU9XCJkYXRlXCJdLmlucHV0LWxnIHtcclxuXHRcdGxpbmUtaGVpZ2h0OiA0NnB4O1xyXG5cdH1cclxuXHRpbnB1dFt0eXBlPVwidGltZVwiXS5pbnB1dC1sZyB7XHJcblx0XHRsaW5lLWhlaWdodDogNDZweDtcclxuXHR9XHJcblx0aW5wdXRbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdLmlucHV0LWxnIHtcclxuXHRcdGxpbmUtaGVpZ2h0OiA0NnB4O1xyXG5cdH1cclxuXHRpbnB1dFt0eXBlPVwibW9udGhcIl0uaW5wdXQtbGcge1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQ2cHg7XHJcblx0fVxyXG5cdC5pbnB1dC1ncm91cC1sZyB7XHJcblx0XHRpbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiA0NnB4O1xyXG5cdFx0fVxyXG5cdFx0aW5wdXRbdHlwZT1cInRpbWVcIl0ge1xyXG5cdFx0XHRsaW5lLWhlaWdodDogNDZweDtcclxuXHRcdH1cclxuXHRcdGlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXSB7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiA0NnB4O1xyXG5cdFx0fVxyXG5cdFx0aW5wdXRbdHlwZT1cIm1vbnRoXCJdIHtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDQ2cHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbkBtZWRpYSAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG5cdC5uYXZiYXItZml4ZWQtdG9wIHtcclxuXHRcdC5uYXZiYXItY29sbGFwc2Uge1xyXG5cdFx0XHRtYXgtaGVpZ2h0OiAyMDBweDtcclxuXHRcdH1cclxuXHR9XHJcblx0Lm5hdmJhci1maXhlZC1ib3R0b20ge1xyXG5cdFx0Lm5hdmJhci1jb2xsYXBzZSB7XHJcblx0XHRcdG1heC1oZWlnaHQ6IDIwMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHQubmF2YmFyLW5hdiB7XHJcblx0XHQub3BlbiB7XHJcblx0XHRcdC5kcm9wZG93bi1tZW51IHtcclxuXHRcdFx0XHRwb3NpdGlvbjogc3RhdGljO1xyXG5cdFx0XHRcdGZsb2F0OiBub25lO1xyXG5cdFx0XHRcdHdpZHRoOiBhdXRvO1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IDA7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0Ym9yZGVyOiAwO1xyXG5cdFx0XHRcdC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuXHRcdFx0XHRib3gtc2hhZG93OiBub25lO1xyXG5cdFx0XHRcdD5saSB7XHJcblx0XHRcdFx0XHQ+YSB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDVweCAxNXB4IDVweCAyNXB4O1xyXG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRcdFx0XHRcdFx0Jjpob3ZlciB7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQmOmZvY3VzIHtcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5kcm9wZG93bi1oZWFkZXIge1xyXG5cdFx0XHRcdFx0cGFkZGluZzogNXB4IDE1cHggNXB4IDI1cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5uYXZiYXItZm9ybSB7XHJcblx0XHQuZm9ybS1ncm91cCB7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDVweDtcclxuXHRcdFx0JjpsYXN0LWNoaWxkIHtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5uYXZiYXItZGVmYXVsdCB7XHJcblx0XHQubmF2YmFyLW5hdiB7XHJcblx0XHRcdC5vcGVuIHtcclxuXHRcdFx0XHQuZHJvcGRvd24tbWVudSB7XHJcblx0XHRcdFx0XHQ+bGkge1xyXG5cdFx0XHRcdFx0XHQ+YSB7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICM3Nzc7XHJcblx0XHRcdFx0XHRcdFx0Jjpob3ZlciB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogIzMzMztcclxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQmOmZvY3VzIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjMzMzO1xyXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQ+LmFjdGl2ZSB7XHJcblx0XHRcdFx0XHRcdD5hIHtcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzU1NTtcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xyXG5cdFx0XHRcdFx0XHRcdCY6aG92ZXIge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICM1NTU7XHJcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQmOmZvY3VzIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjNTU1O1xyXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdD4uZGlzYWJsZWQge1xyXG5cdFx0XHRcdFx0XHQ+YSB7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICNjY2M7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0XHRcdFx0Jjpob3ZlciB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogI2NjYztcclxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQmOmZvY3VzIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjY2NjO1xyXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5uYXZiYXItaW52ZXJzZSB7XHJcblx0XHQubmF2YmFyLW5hdiB7XHJcblx0XHRcdC5vcGVuIHtcclxuXHRcdFx0XHQuZHJvcGRvd24tbWVudSB7XHJcblx0XHRcdFx0XHQ+LmRyb3Bkb3duLWhlYWRlciB7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1jb2xvcjogIzA4MDgwODtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5kaXZpZGVyIHtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzA4MDgwODtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdD5saSB7XHJcblx0XHRcdFx0XHRcdD5hIHtcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzlkOWQ5ZDtcclxuXHRcdFx0XHRcdFx0XHQmOmhvdmVyIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdCY6Zm9jdXMge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdD4uYWN0aXZlIHtcclxuXHRcdFx0XHRcdFx0PmEge1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwODA4MDg7XHJcblx0XHRcdFx0XHRcdFx0Jjpob3ZlciB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwODA4MDg7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdCY6Zm9jdXMge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDgwODA4O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Pi5kaXNhYmxlZCB7XHJcblx0XHRcdFx0XHRcdD5hIHtcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzQ0NDtcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0XHRcdFx0XHQmOmhvdmVyIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjNDQ0O1xyXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdCY6Zm9jdXMge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICM0NDQ7XHJcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0LnZpc2libGUteHMge1xyXG5cdFx0ZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuXHR9XHJcblx0dGFibGUudmlzaWJsZS14cyB7XHJcblx0XHRkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHR0ci52aXNpYmxlLXhzIHtcclxuXHRcdGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHR0aC52aXNpYmxlLXhzIHtcclxuXHRcdGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcclxuXHR9XHJcblx0dGQudmlzaWJsZS14cyB7XHJcblx0XHRkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC52aXNpYmxlLXhzLWJsb2NrIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC52aXNpYmxlLXhzLWlubGluZSB7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcclxuXHR9XHJcblx0LnZpc2libGUteHMtaW5saW5lLWJsb2NrIHtcclxuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQuaGlkZGVuLXhzIHtcclxuXHRcdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuXHR9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuXHQuanVtYm90cm9uIHtcclxuXHRcdHBhZGRpbmctdG9wOiA0OHB4O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDQ4cHg7XHJcblx0XHRoMSB7XHJcblx0XHRcdGZvbnQtc2l6ZTogNjNweDtcclxuXHRcdH1cclxuXHRcdC5oMSB7XHJcblx0XHRcdGZvbnQtc2l6ZTogNjNweDtcclxuXHRcdH1cclxuXHR9XHJcblx0LmNvbnRhaW5lciB7XHJcblx0XHQuanVtYm90cm9uIHtcclxuXHRcdFx0cGFkZGluZy1yaWdodDogNjBweDtcclxuXHRcdFx0cGFkZGluZy1sZWZ0OiA2MHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuY29udGFpbmVyLWZsdWlkIHtcclxuXHRcdC5qdW1ib3Ryb24ge1xyXG5cdFx0XHRwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5jYXJvdXNlbC1jb250cm9sIHtcclxuXHRcdC5nbHlwaGljb24tY2hldnJvbi1sZWZ0IHtcclxuXHRcdFx0d2lkdGg6IDMwcHg7XHJcblx0XHRcdGhlaWdodDogMzBweDtcclxuXHRcdFx0bWFyZ2luLXRvcDogLTEwcHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMzBweDtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG5cdFx0fVxyXG5cdFx0LmdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0IHtcclxuXHRcdFx0d2lkdGg6IDMwcHg7XHJcblx0XHRcdGhlaWdodDogMzBweDtcclxuXHRcdFx0bWFyZ2luLXRvcDogLTEwcHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMzBweDtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiAtMTBweDtcclxuXHRcdH1cclxuXHRcdC5pY29uLXByZXYge1xyXG5cdFx0XHR3aWR0aDogMzBweDtcclxuXHRcdFx0aGVpZ2h0OiAzMHB4O1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAtMTBweDtcclxuXHRcdFx0Zm9udC1zaXplOiAzMHB4O1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogLTEwcHg7XHJcblx0XHR9XHJcblx0XHQuaWNvbi1uZXh0IHtcclxuXHRcdFx0d2lkdGg6IDMwcHg7XHJcblx0XHRcdGhlaWdodDogMzBweDtcclxuXHRcdFx0bWFyZ2luLXRvcDogLTEwcHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMzBweDtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiAtMTBweDtcclxuXHRcdH1cclxuXHR9XHJcblx0LmNhcm91c2VsLWNhcHRpb24ge1xyXG5cdFx0cmlnaHQ6IDIwJTtcclxuXHRcdGxlZnQ6IDIwJTtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG5cdH1cclxuXHQuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcblx0XHRib3R0b206IDIwcHg7XHJcblx0fVxyXG59XHJcbkBtZWRpYSBhbGwgYW5kICh0cmFuc2Zvcm0tM2QpIHtcclxuXHQuY2Fyb3VzZWwtaW5uZXIge1xyXG5cdFx0Pi5pdGVtIHtcclxuXHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuNnMgZWFzZS1pbi1vdXQ7XHJcblx0XHRcdC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAuNnMgZWFzZS1pbi1vdXQ7XHJcblx0XHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNnMgZWFzZS1pbi1vdXQ7XHJcblx0XHRcdC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdFx0XHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0XHRcdC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcclxuXHRcdFx0cGVyc3BlY3RpdmU6IDEwMDBweDtcclxuXHRcdH1cclxuXHRcdD4uaXRlbS5uZXh0IHtcclxuXHRcdFx0bGVmdDogMDtcclxuXHRcdFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG5cdFx0fVxyXG5cdFx0Pi5pdGVtLmFjdGl2ZS5yaWdodCB7XHJcblx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcclxuXHRcdH1cclxuXHRcdD4uaXRlbS5wcmV2IHtcclxuXHRcdFx0bGVmdDogMDtcclxuXHRcdFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XHJcblx0XHR9XHJcblx0XHQ+Lml0ZW0uYWN0aXZlLmxlZnQge1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuXHRcdH1cclxuXHRcdD4uaXRlbS5uZXh0LmxlZnQge1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcblx0XHR9XHJcblx0XHQ+Lml0ZW0ucHJldi5yaWdodCB7XHJcblx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuXHRcdH1cclxuXHRcdD4uaXRlbS5hY3RpdmUge1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbkBtZWRpYSAoLXdlYmtpdC10cmFuc2Zvcm0tM2QpIHtcclxuXHQuY2Fyb3VzZWwtaW5uZXIge1xyXG5cdFx0Pi5pdGVtIHtcclxuXHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuNnMgZWFzZS1pbi1vdXQ7XHJcblx0XHRcdC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAuNnMgZWFzZS1pbi1vdXQ7XHJcblx0XHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNnMgZWFzZS1pbi1vdXQ7XHJcblx0XHRcdC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdFx0XHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0XHRcdC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcclxuXHRcdFx0cGVyc3BlY3RpdmU6IDEwMDBweDtcclxuXHRcdH1cclxuXHRcdD4uaXRlbS5uZXh0IHtcclxuXHRcdFx0bGVmdDogMDtcclxuXHRcdFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG5cdFx0fVxyXG5cdFx0Pi5pdGVtLmFjdGl2ZS5yaWdodCB7XHJcblx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcclxuXHRcdH1cclxuXHRcdD4uaXRlbS5wcmV2IHtcclxuXHRcdFx0bGVmdDogMDtcclxuXHRcdFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XHJcblx0XHR9XHJcblx0XHQ+Lml0ZW0uYWN0aXZlLmxlZnQge1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuXHRcdH1cclxuXHRcdD4uaXRlbS5uZXh0LmxlZnQge1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcblx0XHR9XHJcblx0XHQ+Lml0ZW0ucHJldi5yaWdodCB7XHJcblx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuXHRcdH1cclxuXHRcdD4uaXRlbS5hY3RpdmUge1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcblx0LnZpc2libGUtc20ge1xyXG5cdFx0ZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuXHR9XHJcblx0dGFibGUudmlzaWJsZS1zbSB7XHJcblx0XHRkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHR0ci52aXNpYmxlLXNtIHtcclxuXHRcdGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHR0aC52aXNpYmxlLXNtIHtcclxuXHRcdGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcclxuXHR9XHJcblx0dGQudmlzaWJsZS1zbSB7XHJcblx0XHRkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC52aXNpYmxlLXNtLWJsb2NrIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC52aXNpYmxlLXNtLWlubGluZSB7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcclxuXHR9XHJcblx0LnZpc2libGUtc20taW5saW5lLWJsb2NrIHtcclxuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQuaGlkZGVuLXNtIHtcclxuXHRcdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuXHR9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcblx0LnZpc2libGUtbWQge1xyXG5cdFx0ZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuXHR9XHJcblx0dGFibGUudmlzaWJsZS1tZCB7XHJcblx0XHRkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHR0ci52aXNpYmxlLW1kIHtcclxuXHRcdGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHR0aC52aXNpYmxlLW1kIHtcclxuXHRcdGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcclxuXHR9XHJcblx0dGQudmlzaWJsZS1tZCB7XHJcblx0XHRkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC52aXNpYmxlLW1kLWJsb2NrIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC52aXNpYmxlLW1kLWlubGluZSB7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcclxuXHR9XHJcblx0LnZpc2libGUtbWQtaW5saW5lLWJsb2NrIHtcclxuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQuaGlkZGVuLW1kIHtcclxuXHRcdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuXHR9XHJcbn1cclxuLmJnLWltZ3tcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcblxyXG4ucHItMSB7XHJcbiAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5wbC0xIHtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcclxufVxyXG4ucHItMiB7XHJcbiAgcGFkZGluZy1yaWdodDogMnJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5wbC0yIHtcclxuICBwYWRkaW5nLWxlZnQ6IDJyZW0gIWltcG9ydGFudDtcclxufVxyXG4ucHItMyB7XHJcbiAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5wbC0zIHtcclxuICBwYWRkaW5nLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcclxufVxyXG4ucHItNCB7XHJcbiAgcGFkZGluZy1yaWdodDogNHJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5wbC00IHtcclxuICBwYWRkaW5nLWxlZnQ6IDRyZW0gIWltcG9ydGFudDtcclxufVxyXG4ucHItNSB7XHJcbiAgcGFkZGluZy1yaWdodDogNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5wbC01IHtcclxuICBwYWRkaW5nLWxlZnQ6IDVyZW0gIWltcG9ydGFudDtcclxufVxyXG4uZG9jcy1uYXZiYXItaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIGJveC1zaGFkb3c6ICMwMDAwMDAzMCAwcHggM3B4IDZweDtcclxuICBoZWlnaHQ6IDY2cHg7XHJcblxyXG4gID4gLm1hdC1idXR0b24ge1xyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZmxleC1zcGFjZXIge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmRvY3MtYW5ndWxhci1sb2dvIHtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgbWFyZ2luOiAwIDRweCAzcHggMDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZG9jcy1naXRodWItbG9nbyB7XHJcbiAgaGVpZ2h0OiAyMXB4O1xyXG4gIG1hcmdpbjogMCA3cHggMnB4IDA7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmRvY3MtbmF2YmFyLWxpbmsge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZG9jcy1uYXZiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5kb2NzLW5hdmJhci1zaG93LXNtYWxsIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2tpcC1saW5rLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi8qKlxyXG4gICogUnVsZXMgZm9yIHdoZW4gdGhlIGRldmljZSBpcyBkZXRlY3RlZCB0byBiZSBhIHNtYWxsIHNjcmVlbi5cclxuICAqIE1vdmVzIGNvbnRlbnQgdHdvIHJvd3MgaW5zdGVhZCBvZiBvbmUuXHJcbiAgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcblxyXG4gIC5kb2NzLW5hdmJhci1zaG93LXNtYWxsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmRvY3MtbmF2YmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAuZG9jcy1uYXZiYXItLWdpdGh1Yi1sb2dvIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgZGl2LmJ1cmdlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4jdmlldy1jb2Rle1xyXG4gIC8vIGNvbG9yOiM0MTgzZDc7XHJcbiAgZm9udC1zaXplOjEzcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OjcwMDtcclxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NjQwcHg7IGxlZnQ6NTAlO21hcmdpbi1sZWZ0Oi0zNXB4O1xyXG59XHJcbmRpdi5zY3JlZW57XHJcblx0d2lkdGg6MTAwJTtcclxuXHRoZWlnaHQ6MTAwJTtcdFxyXG5cdG92ZXJmbG93OmhpZGRlbjtcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTsgXHJcblx0dG9wOjEwMHB4OyBcclxuXHRsZWZ0OjA7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6LTE2MHB4O1xyXG4gIC8vIGJhY2tncm91bmQ6IzMxNTU4YTtcclxuICAvLyBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubGlzdHttYXJnaW4tdG9wOjM2cHg7IHRleHQtYWxpZ246bGVmdDt9XHJcbi5pdGVte1xyXG5cdGhlaWdodDoxMTVweDtcclxuXHRtYXJnaW4tdG9wOjMwcHggMDtcclxuXHRwYWRkaW5nLWxlZnQ6MTE1cHg7XHJcblx0Y2xlYXI6Ym90aDtcclxufVxyXG4uaXRlbSAuaW1nLCAuaXRlbSBzcGFue1xyXG4gIC8vIGJhY2tncm91bmQ6IzIxNDI3MztcclxuICBib3JkZXItcmFkaXVzOjNweDtcclxufVxyXG4uaXRlbSAuaW1ne2Zsb2F0OmxlZnQ7IHdpZHRoOjcxcHg7IGhlaWdodDo3MXB4OyBtYXJnaW4tbGVmdDotOTNweDt9XHJcbi5pdGVtIHNwYW57aGVpZ2h0OjExcHg7IHdpZHRoOjE4MHB4OyBtYXJnaW4tYm90dG9tOjE5cHg7IGZsb2F0OmxlZnQ7fVxyXG4uaXRlbSBzcGFuOm50aC1vZi10eXBlKDMpe3dpZHRoOjc1cHg7IG1hcmdpbi1ib3RvbTowO31cclxuXHJcbmRpdi5idXJnZXIge1xyXG5cdGhlaWdodDogMzBweDsgXHJcblx0d2lkdGg6IDQwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMjVweDsgXHJcblx0cmlnaHQ6IDIxcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHRkaXYueCxcclxuXHRkaXYueSxcclxuXHRkaXYueiB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7IG1hcmdpbjogYXV0bztcclxuXHRcdHRvcDogMHB4OyBib3R0b206IDBweDtcdFx0XHJcblx0XHRiYWNrZ3JvdW5kOiAjMDAwO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czoycHg7XHJcblx0XHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcclxuXHRcdCAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2Utb3V0O1xyXG5cdFx0ICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XHJcblx0XHQgICAgIC1vLXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcclxuXHRcdCAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2Utb3V0O1xyXG5cdH1cdFx0XHJcblx0ZGl2LngsIGRpdi55LCBkaXYueiB7IGhlaWdodDogM3B4OyB3aWR0aDogMjZweDsgfVxyXG5cdGRpdi55e3RvcDogMThweDt9XHJcblx0ZGl2Lnp7dG9wOiAzN3B4O31cclxuXHRkaXYuY29sbGFwc2V7XHJcblx0XHR0b3A6IDIwcHg7XHJcblx0XHQvLyBiYWNrZ3JvdW5kOiM0YTg5ZGM7XHJcblx0XHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCA3MG1zIGVhc2Utb3V0O1xyXG5cdFx0ICAgLW1vei10cmFuc2l0aW9uOiBhbGwgNzBtcyBlYXNlLW91dDtcclxuXHRcdCAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDcwbXMgZWFzZS1vdXQ7XHJcblx0XHQgICAgIC1vLXRyYW5zaXRpb246IGFsbCA3MG1zIGVhc2Utb3V0O1xyXG5cdFx0ICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNzBtcyBlYXNlLW91dDtcclxuXHR9XHJcblx0IFxyXG5cdFxyXG5cdGRpdi5yb3RhdGUzMHtcclxuXHRcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7IFxyXG4gICAgXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTsgXHJcblx0ICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcdFxyXG5cdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNTBtcyBlYXNlLW91dDtcclxuXHRcdCAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDUwbXMgZWFzZS1vdXQ7XHJcblx0XHQgICAgLW1zLXRyYW5zaXRpb246IGFsbCA1MG1zIGVhc2Utb3V0O1xyXG5cdFx0ICAgICAtby10cmFuc2l0aW9uOiBhbGwgNTBtcyBlYXNlLW91dDtcclxuXHRcdCAgICAgICAgdHJhbnNpdGlvbjogYWxsIDUwbXMgZWFzZS1vdXQ7XHRcdFx0XHRcdFxyXG5cdH1cclxuXHRkaXYucm90YXRlMTUwe1xyXG5cdFx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7IFxyXG4gICAgXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7IFxyXG5cdCAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1x0XHJcblx0XHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MG1zIGVhc2Utb3V0O1xyXG5cdFx0ICAgLW1vei10cmFuc2l0aW9uOiBhbGwgNTBtcyBlYXNlLW91dDtcclxuXHRcdCAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDUwbXMgZWFzZS1vdXQ7XHJcblx0XHQgICAgIC1vLXRyYW5zaXRpb246IGFsbCA1MG1zIGVhc2Utb3V0O1xyXG5cdFx0ICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNTBtcyBlYXNlLW91dDtcdFx0XHRcdFx0XHJcblx0fVxyXG5cdFxyXG5cdGRpdi5yb3RhdGU0NXtcclxuXHRcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IFxyXG4gICAgXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgXHJcblx0ICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcdFxyXG5cdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1vdXQ7XHJcblx0XHQgICAtbW96LXRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLW91dDtcclxuXHRcdCAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2Utb3V0O1xyXG5cdFx0ICAgICAtby10cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1vdXQ7XHJcblx0XHQgICAgICAgIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLW91dDtcdFx0XHRcdFx0XHJcblx0fVxyXG5cdGRpdi5yb3RhdGUxMzV7XHJcblx0XHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTsgXHJcbiAgICBcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTsgXHJcblx0ICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHRcclxuXHRcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2Utb3V0O1xyXG5cdFx0ICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1vdXQ7XHJcblx0XHQgICAgLW1zLXRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLW91dDtcclxuXHRcdCAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2Utb3V0O1xyXG5cdFx0ICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1vdXQ7XHRcdFx0XHRcdFxyXG5cdH1cclxuXHJcbmRpdi5uYXZiYXJ7XHJcbiAgaGVpZ2h0OjczcHg7XHJcbiAgLy8gYmFja2dyb3VuZDojMzg1ZTk3O1xyXG59XHJcblxyXG5kaXYuY2lyY2xle1x0XHJcblx0Ym9yZGVyLXJhZGl1czogMCU7XHJcblx0d2lkdGg6IDBweDtcclxuXHRoZWlnaHQ6IDBweDsgXHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdHJpZ2h0OiAzNnB4O1xyXG5cdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRvcGFjaXR5OjE7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMDAwLCAwLjk5NSwgMC45OTAsIDEuMDAwKTtcclxuXHQgICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4wMDAsIDAuOTk1LCAwLjk5MCwgMS4wMDApO1xyXG5cdCAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjAwMCwgMC45OTUsIDAuOTkwLCAxLjAwMCk7XHJcblx0ICAgICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMDAwLCAwLjk5NSwgMC45OTAsIDEuMDAwKTtcclxuXHQgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4wMDAsIDAuOTk1LCAwLjk5MCwgMS4wMDApO1x0XHJcbn1cclxuZGl2LmNpcmNsZS5leHBhbmR7XHJcblx0d2lkdGg6MTAwJTtcclxuXHRoZWlnaHQ6MTAwJTtcclxuXHR0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDQwMG1zIGN1YmljLWJlemllcigwLjAwMCwgMC45OTUsIDAuOTkwLCAxLjAwMCk7XHJcblx0ICAgLW1vei10cmFuc2l0aW9uOiBhbGwgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMDAwLCAwLjk5NSwgMC45OTAsIDEuMDAwKTtcclxuXHQgICAgLW1zLXRyYW5zaXRpb246IGFsbCA0MDBtcyBjdWJpYy1iZXppZXIoMC4wMDAsIDAuOTk1LCAwLjk5MCwgMS4wMDApO1xyXG5cdCAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDQwMG1zIGN1YmljLWJlemllcigwLjAwMCwgMC45OTUsIDAuOTkwLCAxLjAwMCk7XHJcblx0ICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMDAwLCAwLjk5NSwgMC45OTAsIDEuMDAwKTtcdFx0XHRcdFx0XHJcblx0XHJcbn1cclxuZGl2Lm1lbnUge1xyXG5cdGhlaWdodDogMTAwJTsgXHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4OyBsZWZ0OiAwcHg7XHJcbn1cclxuZGl2Lm1lbnUgdWwgbGkge1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0dG9wOjUwcHg7O1xyXG5cdGxlZnQ6MDtcclxuXHRvcGFjaXR5OjA7XHJcblx0d2lkdGg6MTAwJTtcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRmb250LXNpemU6MHB4O1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDcwbXMgY3ViaWMtYmV6aWVyKDAuMDAwLCAwLjk5NSwgMC45OTAsIDEuMDAwKTtcclxuXHQgICAtbW96LXRyYW5zaXRpb246IGFsbCA3MG1zIGN1YmljLWJlemllcigwLjAwMCwgMC45OTUsIDAuOTkwLCAxLjAwMCk7XHJcblx0ICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgNzBtcyBjdWJpYy1iZXppZXIoMC4wMDAsIDAuOTk1LCAwLjk5MCwgMS4wMDApO1xyXG5cdCAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDcwbXMgY3ViaWMtYmV6aWVyKDAuMDAwLCAwLjk5NSwgMC45OTAsIDEuMDAwKTtcclxuXHQgICAgICAgIHRyYW5zaXRpb246IGFsbCA3MG1zIGN1YmljLWJlemllcigwLjAwMCwgMC45OTUsIDAuOTkwLCAxLjAwMCk7XHJcbn1cclxuZGl2Lm1lbnUgdWwgbGkgYSB7XHJcblx0Y29sb3I6IzAwMDtcclxuXHQvLyB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcblx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XHRcclxuICAvLyBsZXR0ZXItc3BhY2luZzozcHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbmRpdi5zY3JlZW4gZGl2Lm1lbnUgbGkuYW5pbWF0ZXtcclxuICBmb250LXNpemU6MjFweDtcclxuICB6LWluZGV4OiAyO1xyXG5cdG9wYWNpdHk6MTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBjdWJpYy1iZXppZXIoMC4wMDAsIDAuOTk1LCAwLjk5MCwgMS4wMDApO1xyXG5cdCAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigwLjAwMCwgMC45OTUsIDAuOTkwLCAxLjAwMCk7XHJcblx0ICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDAuMDAwLCAwLjk5NSwgMC45OTAsIDEuMDAwKTtcclxuXHQgICAgIC1vLXRyYW5zaXRpb246IGFsbCAxNTBtcyBjdWJpYy1iZXppZXIoMC4wMDAsIDAuOTk1LCAwLjk5MCwgMS4wMDApO1xyXG5cdCAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigwLjAwMCwgMC45OTUsIDAuOTkwLCAxLjAwMCk7XHJcbn1cclxuZGl2Lm1lbnUgbGkuYW5pbWF0ZTpudGgtb2YtdHlwZSgxKXtcdFxyXG5cdHRvcDoxMjBweDtcclxuXHR0cmFuc2l0aW9uLWRlbGF5OiAwLjBzO1x0XHJcbn1cclxuZGl2Lm1lbnUgbGkuYW5pbWF0ZTpudGgtb2YtdHlwZSgyKXtcclxuXHR0b3A6MTkwcHg7XHJcblx0dHJhbnNpdGlvbi1kZWxheTogMC4wM3M7XHRcclxuXHRcdFx0XHJcbn1cclxuZGl2Lm1lbnUgbGkuYW5pbWF0ZTpudGgtb2YtdHlwZSgzKXtcclxuXHR0b3A6MjYwcHg7XHJcblx0dHJhbnNpdGlvbi1kZWxheTogMC4wNnM7XHRcdFxyXG5cdFxyXG59XHJcbmRpdi5tZW51IGxpLmFuaW1hdGU6bnRoLW9mLXR5cGUoNCl7XHJcblx0dG9wOjMzMHB4O1xyXG5cdHRyYW5zaXRpb24tZGVsYXk6IDAuMDlzO1x0XHRcclxuXHRcclxufVxyXG5kaXYubWVudSBsaS5hbmltYXRlOm50aC1vZi10eXBlKDUpe1xyXG5cdHRvcDo0MDBweDtcclxuXHR0cmFuc2l0aW9uLWRlbGF5OiAwLjEycztcdFx0XHJcblx0XHJcbn1cclxuZGl2Lm1lbnUgbGkuYW5pbWF0ZTpudGgtb2YtdHlwZSg2KXtcclxuXHR0b3A6NDcwcHg7XHJcblx0dHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XHRcclxuXHRcdFx0XHJcbn1cclxuLnRvcC1pdGVtc3tcclxuXHRmb250LXNpemU6IDE5cHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-question',
            templateUrl: './question.component.html',
            styleUrls: ['./question.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing */
      "mbAy");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _inc_header_header_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./inc/header/header.component */
      "BcYF");
      /* harmony import */


      var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./quiz/quiz.component */
      "Sewk");
      /* harmony import */


      var _quiz_result_result_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./quiz/result/result.component */
      "QKFx");
      /* harmony import */


      var _quiz_question_question_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./quiz/question/question.component */
      "WW6G");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__["MatBadgeModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_33__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__["MatPaginatorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_36__["FormsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _inc_header_header_component__WEBPACK_IMPORTED_MODULE_37__["HeaderComponent"], _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_38__["QuizComponent"], _quiz_result_result_component__WEBPACK_IMPORTED_MODULE_39__["ResultComponent"], _quiz_question_question_component__WEBPACK_IMPORTED_MODULE_40__["QuestionComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__["MatBadgeModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_33__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__["MatPaginatorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_36__["FormsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _inc_header_header_component__WEBPACK_IMPORTED_MODULE_37__["HeaderComponent"], _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_38__["QuizComponent"], _quiz_result_result_component__WEBPACK_IMPORTED_MODULE_39__["ResultComponent"], _quiz_question_question_component__WEBPACK_IMPORTED_MODULE_40__["QuestionComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__["MatBadgeModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_33__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__["MatPaginatorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_36__["FormsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "mbAy":
    /*!********************************!*\
      !*** ./src/app/app-routing.ts ***!
      \********************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function mbAy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./quiz/quiz.component */
      "Sewk");
      /* harmony import */


      var _quiz_result_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./quiz/result/result.component */
      "QKFx");
      /* harmony import */


      var _quiz_question_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./quiz/question/question.component */
      "WW6G");

      var appRoutes = [{
        path: '',
        children: [{
          path: '',
          component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_2__["QuizComponent"]
        }, {
          path: 'result/:score',
          component: _quiz_result_result_component__WEBPACK_IMPORTED_MODULE_3__["ResultComponent"]
        }, {
          path: ':quiz/quiz/:id',
          component: _quiz_question_question_component__WEBPACK_IMPORTED_MODULE_4__["QuestionComponent"]
        }]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
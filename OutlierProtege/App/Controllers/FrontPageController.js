var App;
(function (App) {
    /// <reference path="../_all.ts" />
    (function (Controllers) {
        "use strict";

        var FrontPageConroller = (function () {
            function FrontPageConroller(resourceService) {
                this.resourceService = resourceService;
                this.init();
            }
            FrontPageConroller.prototype.injection = function () {
                return ["resourceService", FrontPageConroller];
            };

            FrontPageConroller.prototype.goToNextStep = function () {
                this.wizardStepIndex++;
            };

            FrontPageConroller.prototype.init = function () {
                this.wizardStepIndex = 0;
                this.fields = this.resourceService.fields.query();
            };
            FrontPageConroller.$inject = ["resourceService"];
            return FrontPageConroller;
        })();
        Controllers.FrontPageConroller = FrontPageConroller;
    })(App.Controllers || (App.Controllers = {}));
    var Controllers = App.Controllers;
})(App || (App = {}));

angular.module("app.controllers").controller("frontPageController", [
    "resourceService", function (resourceService) {
        return new App.Controllers.FrontPageConroller(resourceService);
    }]);
//# sourceMappingURL=frontpagecontroller.js.map

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

            FrontPageConroller.prototype.yearsToLog = function (years) {
                return new Array(years);
            };

            FrontPageConroller.prototype.wizardFinished = function (viewModel) {
                var protege = new App.Models.Protege(this.resourceService);
                protege.field = viewModel.selectedField;
                protege.saveToDb();
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
//# sourceMappingURL=FrontPageController.js.map

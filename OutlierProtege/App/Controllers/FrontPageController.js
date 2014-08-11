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

            FrontPageConroller.prototype.addYears = function (years) {
                this.protegeViewModel.years = years;
                var practiceList = [];
                for (var i = 1; i <= years; i++) {
                    this.protegeViewModel.practiceVMs.push({ year: i, practices: [null] });
                }
            };

            FrontPageConroller.prototype.addPractice = function (year) {
                var practice = _.find(this.protegeViewModel.practiceVMs, function (pvm) {
                    return pvm.year === year;
                });
                if (practice) {
                    practice.practices.push({});
                }
            };

            FrontPageConroller.prototype.wizardFinished = function (viewModel) {
                var protege = new App.Models.Protege(this.resourceService);
                protege.field = viewModel.selectedField;
                protege.saveToDb();
            };

            FrontPageConroller.prototype.init = function () {
                this.wizardStepIndex = 0;
                this.fields = this.resourceService.fields.query();
                this.sources = this.resourceService.sources.query();
                this.tasks = this.resourceService.tasks.query();
                this.protegeViewModel = { practiceVMs: [] };
            };
            FrontPageConroller.$inject = ["resourceService"];
            return FrontPageConroller;
        })();
        Controllers.FrontPageConroller = FrontPageConroller;
    })(App.Controllers || (App.Controllers = {}));
    var Controllers = App.Controllers;
})(App || (App = {}));
//# sourceMappingURL=FrontPageController.js.map

var App;
(function (App) {
    /// <reference path="../_all.ts" />
    (function (Controllers) {
        "use strict";

        var FrontPageController = (function () {
            function FrontPageController($state, resourceService) {
                this.$state = $state;
                this.resourceService = resourceService;
                this.init();
            }
            FrontPageController.prototype.injection = function () {
                return ["$state", "resourceService", FrontPageController];
            };

            FrontPageController.prototype.addYears = function (years) {
                this.protegeViewModel.years = years;
                var practiceList = [];
                for (var i = 1; i <= years; i++) {
                    this.protegeViewModel.practiceVMs.push({ year: i, practices: [null] });
                }
            };

            FrontPageController.prototype.addPractice = function (year) {
                var practice = _.find(this.protegeViewModel.practiceVMs, function (pvm) {
                    return pvm.year === year;
                });
                if (practice) {
                    practice.practices.push({});
                }
            };

            FrontPageController.prototype.wizardFinished = function (viewModel) {
                var protege = new App.Models.Protege(this.resourceService);
                protege.hoursLogged = 30;
                protege.field = viewModel.selectedField;
                var savedProtege = protege.saveToDb();
                this.$state.go("register", { pid: savedProtege.id });
            };

            FrontPageController.prototype.init = function () {
                this.wizardStepIndex = 0;
                this.fields = this.resourceService.fields.query();
                this.sources = this.resourceService.sources.query();
                this.tasks = this.resourceService.tasks.query();
                this.protegeViewModel = { practiceVMs: [] };
                this.hoursInWeek = [];
                for (var i = 1; i <= 100; i++) {
                    this.hoursInWeek.push({ value: i, text: i + " h" });
                }
            };
            FrontPageController.$inject = ["$state", "resourceService"];
            return FrontPageController;
        })();
        Controllers.FrontPageController = FrontPageController;
    })(App.Controllers || (App.Controllers = {}));
    var Controllers = App.Controllers;
})(App || (App = {}));
//# sourceMappingURL=FrontPageController.js.map

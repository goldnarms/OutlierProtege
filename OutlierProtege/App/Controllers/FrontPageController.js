var App;
(function (App) {
    /// <reference path="../_all.ts" />
    (function (Controllers) {
        "use strict";

        var FrontPageController = (function () {
            function FrontPageController($q, $routeParams, $location, resourceService) {
                this.$q = $q;
                this.$routeParams = $routeParams;
                this.$location = $location;
                this.resourceService = resourceService;
                this.init();
            }
            FrontPageController.prototype.injection = function () {
                return ["$q", "$routeParams", "$location", "resourceService", FrontPageController];
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
                var _this = this;
                var protege = new App.Models.Protege(this.$q, this.resourceService);
                protege.hoursLogged = 30;
                protege.field = viewModel.selectedField;
                protege.saveToDb().then(function (savedProtege) {
                    _this.$location.path("/register/" + savedProtege.id);
                });
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
            FrontPageController.$inject = ["$q", "$routeParams", "$location", "resourceService"];
            return FrontPageController;
        })();
        Controllers.FrontPageController = FrontPageController;
    })(App.Controllers || (App.Controllers = {}));
    var Controllers = App.Controllers;
})(App || (App = {}));
//# sourceMappingURL=FrontPageController.js.map

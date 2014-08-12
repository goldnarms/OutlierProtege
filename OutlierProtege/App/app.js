/// <reference path="_all.ts" />
var App;
(function (App) {
    "use strict";

    //angular.module("app.services", []);
    //.factory("resourceService", App.Services.ResourceService.prototype.injection());
    //.service("resourceService", Services.ResourceService.prototype.injection());
    //.service("fieldService", App.F.prototype.injection());
    angular.module("app.services", ["ngResource"]).service("resourceService", App.Services.ResourceService.prototype.injection());

    //["$resource", ($resource: ng.resource.IResourceService): App.Services.IResourceService=> {
    //    return new App.Services.ResourceService($resource);
    //}]
    //angular.module("app.controllers", ["app.services", "ngResource"]);
    angular.module("app.controllers", ["app.services", "ngResource"]).controller("frontPageController", App.Controllers.FrontPageController.prototype.injection()).controller("registerController", App.Controllers.RegisterController.prototype.injection());

    //(resourceService: App.Services.IResourceService): App.Controllers.IFrontPageController=> {
    //    return new App.Controllers.FrontPageConroller(resourceService);
    //    }]
    angular.module("app.directives", []).directive("opWizard", App.Directives.WizardInit.prototype.injection());

    angular.module("App.filters", []);

    //angular.factory("Service", ["$resource", ($resource: ng.resource.IResourceService): services.ApiService=> {
    //    return new services.ApiService($resource);
    //}]);
    var angularModules = [
        "app.services",
        "app.controllers",
        "app.directives",
        "ngResource",
        "ngRoute",
        "ui.router",
        "ui.bootstrap",
        "mgo-angular-wizard"
    ];

    //angularModules = angularModules.concat(App.Config.CurrentConfiguration.AngularModules);
    var app = angular.module("app", angularModules);

    //app.factory("resourceService", App.Services.ResourceService.prototype.injection());
    //app.controller("frontPageController", App.Controllers.FrontPageConroller.prototype.injection());
    app.run([
        '$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
            // It's very handy to add references to $state and $stateParams to the $rootScope
            // so that you can access them from any scope within your applications.For example,
            // <li ui-sref-active="active }"> will set the <li> // to active whenever
            // 'contacts.list' or one of its decendents is active.
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }]);

    app.config([
        "$locationProvider", "$stateProvider", "$urlRouterProvider", function ($locationProvider, $stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider.state("home", {
                controller: "frontPageController as fpc",
                url: "/",
                templateUrl: "Home/FrontPage"
            }).state("register", {
                controller: "registerController as rc",
                url: "register/:id",
                templateUrl: "Home/Register"
            });
            $locationProvider.html5Mode(true);
        }]);

    
})(App || (App = {}));
//# sourceMappingURL=App.js.map

﻿/// <reference path="_all.ts" />
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
        "ui.bootstrap",
        "mgo-angular-wizard",
        "azure-mobile-service.module"
    ];

    //angularModules = angularModules.concat(App.Config.CurrentConfiguration.AngularModules);
    var app = angular.module("app", angularModules);

    //app.factory("AuthHttpResponseInterceptor", Factories.AuthHttpResponseInterceptor);
    //app.factory("resourceService", App.Services.ResourceService.prototype.injection());
    //app.controller("frontPageController", App.Controllers.FrontPageConroller.prototype.injection());
    app.config([
        "$locationProvider", "$routeProvider", "$httpProvider", function ($locationProvider, $routeProvider, $httpProvider) {
            $locationProvider.hashPrefix('!').html5Mode(true);
            var homepageRoute = {
                templateUrl: "Home/FrontPage",
                controller: "frontPageController",
                controllerAs: "fpc",
                reloadOnSearch: false,
                caseInsensitiveMatch: true
            };

            $routeProvider.when("/", homepageRoute).when("/register/:pid", {
                //templateUrl: (params) => { return "/Home/Register?pid=" + params.donuts; },
                templateUrl: "/Home/Register",
                controller: "registerController",
                controllerAs: "rc",
                caseInsensitiveMatch: true
            });
            //.otherwise(homepageRoute);
            //$httpProvider.interceptors.push('AuthHttpResponseInterceptor');
        }]);

    app.run([
        '$rootScope', function ($rootScope) {
            // It's very handy to add references to $state and $stateParams to the $rootScope
            // so that you can access them from any scope within your applications.For example,
            // <li ui-sref-active="active }"> will set the <li> // to active whenever
            // 'contacts.list' or one of its decendents is active.
        }]);

    
})(App || (App = {}));
//# sourceMappingURL=App.js.map

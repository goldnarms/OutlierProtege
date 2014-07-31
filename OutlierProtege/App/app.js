/// <reference path="_all.ts" />
var App;
(function (App) {
    "use strict";

    angular.module("App.services", ["ngResource"]).service("resourceService", App.Services.ResourceService.prototype.injection());

    //.service("fieldService", App.F.prototype.injection());
    angular.module("App.controllers", []).controller("frontPageController", App.Controllers.FrontPageConroller.prototype.injection());

    angular.module("App.directives", []);

    angular.module("App.filters", []);

    //angular.factory("Service", ["$resource", ($resource: ng.resource.IResourceService): services.ApiService=> {
    //    return new services.ApiService($resource);
    //}]);
    var angularModules = [
        "ngResource",
        "ui.router"
    ];

    //angularModules = angularModules.concat(App.Config.CurrentConfiguration.AngularModules);
    var app = angular.module("app", angularModules);
    app.factory("resourceService", App.Services.ResourceService.prototype.injection());
    app.controller("frontPageController", App.Controllers.FrontPageConroller.prototype.injection());
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
            });
            $locationProvider.html5Mode(true);
        }]);

    
})(App || (App = {}));
//# sourceMappingURL=App.js.map

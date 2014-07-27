/// <reference path="_all.ts" />
var App;
(function (App) {
    "use strict";

    angular.module("App.services", ["ngResource"]);

    //.service("fieldService", App.F.prototype.injection());
    angular.module("App.controllers", []).controller("frontPageController", App.Controllers.FrontPageConroller.prototype.injection());

    angular.module("App.directives", []);

    angular.module("App.filters", []);

    //angular.factory("Service", ["$resource", ($resource: ng.resource.IResourceService): services.ApiService=> {
    //    return new services.ApiService($resource);
    //}]);
    var angularModules = [
        "App.services",
        "App.controllers",
        "App.directives",
        "App.filters",
        "App.common"
    ];

    //angularModules = angularModules.concat(App.Config.CurrentConfiguration.AngularModules);
    var app = angular.module("app", angularModules);
    app.factory("resourceService", App.Services.ResourceService.prototype.injection());
    app.config([
        "$sceDelegateProvider", "$routeProvider", "$locationProvider", "$provide", function ($sceDelegateProvider, $routeProvider, $locationProvider, $provide) {
            $sceDelegateProvider.resourceUrlWhitelist([
                "^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?\(vimeo|youtube)\.com(/.*)?$",
                "self"]);
            var frontpageRoute = {
                templateUrl: "Home/Home",
                //controller: "frontpageCtrl",
                //reloadOnSearch: false,
                caseInsensitiveMatch: true
            };

            $routeProvider.when("/", frontpageRoute).otherwise(frontpageRoute);

            $locationProvider.html5Mode(true);
        }]);

    
})(App || (App = {}));
//# sourceMappingURL=App.js.map

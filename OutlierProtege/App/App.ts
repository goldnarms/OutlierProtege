/// <reference path="_all.ts" />
module App {
    "use strict";

    //angular.module("app.services", []);
        //.factory("resourceService", App.Services.ResourceService.prototype.injection());
        //.service("resourceService", Services.ResourceService.prototype.injection());
    //.service("fieldService", App.F.prototype.injection());

    angular.module("app.services", ["ngResource"])
        .service("resourceService", App.Services.ResourceService.prototype.injection());
    //["$resource", ($resource: ng.resource.IResourceService): App.Services.IResourceService=> {
    //    return new App.Services.ResourceService($resource);
    //}]
    //angular.module("app.controllers", ["app.services", "ngResource"]);

    angular.module("app.controllers", ["app.services", "ngResource"])
        .controller("frontPageController", App.Controllers.FrontPageController.prototype.injection())
        .controller("registerController", App.Controllers.RegisterController.prototype.injection())
    ;    
    //(resourceService: App.Services.IResourceService): App.Controllers.IFrontPageController=> {
    //    return new App.Controllers.FrontPageConroller(resourceService);
    //    }]
    angular.module("app.directives", [])
        .directive("opWizard", Directives.WizardInit.prototype.injection());

    angular.module("App.filters", []);

    //angular.factory("Service", ["$resource", ($resource: ng.resource.IResourceService): services.ApiService=> {
    //    return new services.ApiService($resource);
    //}]);

    var angularModules = [
        "app.services",
        "app.controllers",
        "app.directives",
        //"App.filters",
        //"App.common",
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

    app.config(["$locationProvider", "$routeProvider", "$httpProvider", ($locationProvider: ng.ILocationProvider, $routeProvider: ng.route.IRouteProvider, $httpProvider: ng.IHttpProvider) => {
        $locationProvider.hashPrefix('!').html5Mode(true);
        var homepageRoute = {
            templateUrl: "Home/FrontPage",
            controller: "frontPageController",
            controllerAs: "fpc",
            reloadOnSearch: false,
            caseInsensitiveMatch: true
        };

        $routeProvider
            .when("/", homepageRoute)
            .when("/register/:pid", {
                //templateUrl: (params) => { return "/Home/Register?pid=" + params.donuts; },
                templateUrl: "/Home/Register",
                controller: "registerController",
                controllerAs: "rc",
                caseInsensitiveMatch: true
            });
            //.otherwise(homepageRoute);
        //$httpProvider.interceptors.push('AuthHttpResponseInterceptor');
    }]);

    app.run(['$rootScope', ($rootScope) => {
        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ui-sref-active="active }"> will set the <li> // to active whenever
        // 'contacts.list' or one of its decendents is active.

    }]);
    //app.run(["breeze", "$rootScope", "$anchorScroll", "$routeParams", "common", "$window", "loginService",
    //    (breeze, $rootScope: ng.IRootScopeService, $anchorScroll: ng.IAnchorScrollService, $routeParams, common: App.ICommonService,
    //        $window: ng.IWindowService, loginService: App.ILoginService) => {

    //        // After route change
    //        $rootScope.$on("$routeChangeSuccess", (event, next, current) => {

    //            // Hide the page loader
    //            $("#loading").hide();

    //            common.location.hash($routeParams.scrollTo);
    //            $anchorScroll();

    //            if (typeof unispring !== "undefined") {
    //                var measurement = {
    //                    "s": "nrk",
    //                    "cp": "nrk/p3/urort",
    //                    "url": common.location.path()
    //                };
    //                unispring.c(measurement);
    //            }
    //        });

    //        // Upon route change
    //        $rootScope.$on('$locationChangeStart', (e, newUrl, oldUrl) => {
    //            var showWhen = [/\/User\//, /\/Band\//, /\/Account\//];
    //            var shouldShow = _.any(showWhen, (regexp: any) => regexp.test(newUrl));
    //            if (shouldShow) {
    //                common.progressbar.start();
    //            }
    //        });

    //        if ($window.addEventListener) {
    //            $window.addEventListener("message", (message) => {
    //                $rootScope.$broadcast(App.Events.MessageEvent, message);
    //            });
    //        }
    //        if (!common.isLoggedIn()) {
    //            common.clearStorage();
    //        }
    //        var lastSet = common.storage.get(Variables.LocalStorageLastSet)
    //        var localStorageOutOfDate = userAuthorized && (!lastSet || moment(lastSet).isBefore(moment().subtract(<any>moment.duration(1, "minutes")))); 
    //        if (localStorageOutOfDate) {
    //            loginService.setLocalDataForCurrentUser(() => {}, () => {
    //                common.notifyService.notify("", common.localizeService.getResource(App.ResourceKeys.You_were_not_fully_logged_in), "icon-attention-alt", "undo");
    //            });
    //        }
    //        handleBrowserQuirks($rootScope);
    //    }]);

    //function handleBrowserQuirks($rootScope) {
    //    //Safari on OSX, and Safari and Chrome on iOS crash if we do XHRs on unload, so we unbind all unload events in the last minute.
    //    //See https://github.com/SignalR/SignalR/issues/2650 
    //    var isSafari = navigator.userAgent.indexOf("Safari") !== -1 && navigator.userAgent.indexOf("Chrome") === -1;
    //    if (isSafari) {
    //        $(window).on("beforeunload", function () { $(window).off("unload"); });
    //    }

    //    var isIOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
    //    if (isIOS) {
    //        //iOS browsers don"t have beforeunload, so remove the unload listeners event when signalr is initialized
    //        $rootScope.$on(App.BroadcastingEvents.Feed_Connected, () => {
    //            setTimeout(() => {
    //                $(window).off("unload");
    //            }, 0);
    //        });
    //    }
    //}


    declare var userAuthorized: boolean;
    declare var window: any;
}

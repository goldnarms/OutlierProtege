/// <reference path="_all.ts" />
module App {
    "use strict";

    angular.module("App.services", ["ngResource"])
        .service("bandService", App.BandService.prototype.injection());

    
    //angular.module("App.controllers", [])
    //    .controller("mapPageCtrl", App.MapPageCtrl.prototype.injection());

    //angular.module("App.directives", [])
    //    .directive("positionAtViewportTop", App.PositionAtViewportTop.prototype.injection());

    //angular.module("App.filters", [])
    //    .filter("digits", [App.Digits.Factory])
    //    .filter("ellipsisLimitTo", [App.EllipsisLimitTo.factory])
    //    .filter("displayFriendlyUrl", [App.DisplayFriendlyUrl.factory])
    //    .filter("encodeURIComponent", () => encodeURIComponent)
    //    .filter("externalUrl", [App.ExternalUrl.factory])
    //    .filter("timeAgo", [App.TimeAgo.factory]);

    //var angularModules = [
    //    "App.services",
    //    "App.controllers",
    //    "App.directives",
    //    "App.filters",
    //    "App.common",
    //    "App.datacontexts",
    //    "duScroll",
    //    "jPlayer",
    //    "ngSanitize",
    //    "ngRoute",
    //    "hmTouchevents",
    //    "Scope.safeApply",
    //    "wu.masonry",
    //    "angularLocalStorage",
    //    "monospaced.elastic",
    //    "angular-client-side-auth",
    //    "highcharts-ng",
    //    "ui.bootstrap",
    //    "ui.sortable",
    //    "blueimp.fileupload",
    //    "angulartics",
    //    "pasvaz.bindonce",
    //    "breeze.angular"
    //];

    //angularModules = angularModules.concat(App.Config.CurrentConfiguration.AngularModules);
    
    var app = angular.module("app", angularModules).value("angulargmDefaults", {
        "mapOptions": { zoom: 8 }
    });

    //prime.$inject = ["urortManager", "common"];
    //function prime(urortManager: App.IUrortManager, common: App.ICommonService) {
    //    return common.q.all([urortManager.prime()]);
    //}

    app.config(["$sceDelegateProvider", "$routeProvider", "$locationProvider", "$provide", "$analyticsProvider", ($sceDelegateProvider, $routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider, $provide, $analyticsProvider) => {
        $analyticsProvider.virtualPageviews(false);
        $sceDelegateProvider.resourceUrlWhitelist([
            "^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?\(vimeo|youtube)\.com(/.*)?$",
            "self"]);
        var frontpageRoute = {
            templateUrl: "Home/Home",
            controller: "frontpageCtrl",
            reloadOnSearch: false,
            caseInsensitiveMatch: true,
            resolve: { prime: prime }
        };

        var compatibilityRoute = {
            templateUrl: "Home/Home",
            controller: "compatibilityCtrl",
            reloadOnSearch: false,
            caseInsensitiveMatch: true,
            resolve: { prime: prime }
        }

        $routeProvider.when("/", frontpageRoute)
            .when("/Band/Create", {
                templateUrl: "Band/Create",
                controller: "bandCreateCtrl",
                caseInsensitiveMatch: true,
                //resolve: { prime: prime }
            })
            //.when("/Band/:internalUrl/Join/:key", {
            //    templateUrl: "Band/Join",
            //    controller: "bandJoinCtrl",
            //    caseInsensitiveMatch: true,
            //    resolve: { prime: prime }
            //})
            .otherwise(frontpageRoute);

        $provide.decorator("angulargmDefaults", () => {
            return {
                "mapOptions": {
                    center: new google.maps.LatLng(55, 111),
                    mapTypeId: google.maps.MapTypeId.SATELLITE
                }
            };
        });
        $locationProvider.html5Mode(false).hashPrefix("!");
    }]);

    app.run(["breeze", "$rootScope", "$anchorScroll", "$routeParams", "common", "$window", "loginService",
        (breeze, $rootScope: ng.IRootScopeService, $anchorScroll: ng.IAnchorScrollService, $routeParams, common: App.ICommonService,
            $window: ng.IWindowService, loginService: App.ILoginService) => {

            // After route change
            $rootScope.$on("$routeChangeSuccess", (event, next, current) => {

                // Hide the page loader
                $("#loading").hide();

                common.location.hash($routeParams.scrollTo);
                $anchorScroll();

                if (typeof unispring !== "undefined") {
                    var measurement = {
                        "s": "nrk",
                        "cp": "nrk/p3/urort",
                        "url": common.location.path()
                    };
                    unispring.c(measurement);
                }
            });

            // Upon route change
            $rootScope.$on('$locationChangeStart', (e, newUrl, oldUrl) => {
                var showWhen = [/\/User\//, /\/Band\//, /\/Account\//];
                var shouldShow = _.any(showWhen, (regexp: any) => regexp.test(newUrl));
                if (shouldShow) {
                    common.progressbar.start();
                }
            });

            if ($window.addEventListener) {
                $window.addEventListener("message", (message) => {
                    $rootScope.$broadcast(App.Events.MessageEvent, message);
                });
            }
            if (!common.isLoggedIn()) {
                common.clearStorage();
            }
            var lastSet = common.storage.get(Variables.LocalStorageLastSet)
            var localStorageOutOfDate = userAuthorized && (!lastSet || moment(lastSet).isBefore(moment().subtract(<any>moment.duration(1, "minutes")))); 
            if (localStorageOutOfDate) {
                loginService.setLocalDataForCurrentUser(() => {}, () => {
                    common.notifyService.notify("", common.localizeService.getResource(App.ResourceKeys.You_were_not_fully_logged_in), "icon-attention-alt", "undo");
                });
            }
            handleBrowserQuirks($rootScope);
        }]);

    function handleBrowserQuirks($rootScope) {
        //Safari on OSX, and Safari and Chrome on iOS crash if we do XHRs on unload, so we unbind all unload events in the last minute.
        //See https://github.com/SignalR/SignalR/issues/2650 
        var isSafari = navigator.userAgent.indexOf("Safari") !== -1 && navigator.userAgent.indexOf("Chrome") === -1;
        if (isSafari) {
            $(window).on("beforeunload", function () { $(window).off("unload"); });
        }

        var isIOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
        if (isIOS) {
            //iOS browsers don"t have beforeunload, so remove the unload listeners event when signalr is initialized
            $rootScope.$on(App.BroadcastingEvents.Feed_Connected, () => {
                setTimeout(() => {
                    $(window).off("unload");
                }, 0);
            });
        }
    }


    declare var userAuthorized: boolean;
    declare var unispring: any;
    declare var window: any;
}

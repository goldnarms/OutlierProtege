/// <reference path="../_all.ts" />
module App.Services {
    "use strict";

    angular.module("app.services", []).factory("logger", [
        () => {
            // toastr setting.
            toastr.options.closeButton = true;
            toastr.options.positionClass = "toast-bottom-right";
            toastr.options.timeOut = 3000;

            function logIt(message, type) {
                return toastr[type](message);
            }

            return {
                log: (message) => {
                    logIt(message, "info");
                    // return is needed, otherwise AngularJS will error out 'Referencing a DOM node in Expression', thanks https://groups.google.com/forum/#!topic/angular/bsTbZ86WAY4
                },
                logWarning: (message) => {
                    logIt(message, "warning");
                },
                logSuccess: (message) => {
                    logIt(message, "success");
                },
                logError: (message) => {
                    logIt(message, "error");
                }
            };
        }
    ]);
}
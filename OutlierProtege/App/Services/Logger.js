var App;
(function (App) {
    /// <reference path="../_all.ts" />
    (function (Services) {
        "use strict";

        angular.module("app.services", []).factory("logger", [
            function () {
                // toastr setting.
                toastr.options.closeButton = true;
                toastr.options.positionClass = "toast-bottom-right";
                toastr.options.timeOut = 3000;

                function logIt(message, type) {
                    return toastr[type](message);
                }

                return {
                    log: function (message) {
                        logIt(message, "info");
                        // return is needed, otherwise AngularJS will error out 'Referencing a DOM node in Expression', thanks https://groups.google.com/forum/#!topic/angular/bsTbZ86WAY4
                    },
                    logWarning: function (message) {
                        logIt(message, "warning");
                    },
                    logSuccess: function (message) {
                        logIt(message, "success");
                    },
                    logError: function (message) {
                        logIt(message, "error");
                    }
                };
            }
        ]);
    })(App.Services || (App.Services = {}));
    var Services = App.Services;
})(App || (App = {}));
//# sourceMappingURL=Logger.js.map

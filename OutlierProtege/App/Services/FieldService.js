var App;
(function (App) {
    /// <reference path="../_all.ts" />
    (function (Services) {
        "use strict";

        var FieldService = (function () {
            function FieldService($resource) {
                this.$resource = $resource;
                this.updateAction = {
                    method: 'PUT',
                    isArray: false
                };
            }
            FieldService.prototype.injection = function () {
                return ["$resource", FieldService];
            };

            FieldService.prototype.update = function (field) {
                // Return the resource, include your custom actions
                return this.$resource('/api/field/:id', { id: '@id' }, {
                    update: this.updateAction
                });
            };

            FieldService.prototype.get = function () {
                return null;
            };
            FieldService.$inject = ["$resource"];
            return FieldService;
        })();
        Services.FieldService = FieldService;
    })(App.Services || (App.Services = {}));
    var Services = App.Services;
})(App || (App = {}));
//# sourceMappingURL=FieldService.js.map

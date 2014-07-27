var App;
(function (App) {
    (function (Services) {
        'use strict';

        var ResourceService = (function () {
            function ResourceService($resource) {
                this.fields = $resource("/api/fields");

                this.field = $resource("/api/fields/:id", {}, { update: { method: 'PUT' } });
            }
            ResourceService.prototype.injection = function () {
                return ["$resource", ResourceService];
            };
            ResourceService.$inject = ["$resource"];
            return ResourceService;
        })();
        Services.ResourceService = ResourceService;
    })(App.Services || (App.Services = {}));
    var Services = App.Services;
})(App || (App = {}));
//angular.module("sidekick-note.service")
//    .factory("apiService", ["$resource", ($resource: ng.resource.IResourceService): services.ApiService=> {
//        return new services.ApiService($resource);
//    }]);
//# sourceMappingURL=ResourceService.js.map

var App;
(function (App) {
    (function (Services) {
        "use strict";

        var ResourceService = (function () {
            function ResourceService($resource) {
                this.$resource = $resource;
                this.fields = $resource("/api/fields");
                this.field = $resource("/api/fields/:id", {}, { update: { method: 'PUT' } });

                this.proteges = $resource("/api/proteges");
                this.protege = $resource("/api/proteges/:id", {}, { update: { method: 'PUT' } });

                this.sources = $resource("/api/sources");
                this.source = $resource("/api/sources/:id", {}, { update: { method: 'PUT' } });

                this.tasks = $resource("/api/tasks");
                this.task = $resource("/api/tasks/:id", {}, { update: { method: "PUT" } });

                this.practices = $resource("/api/practices");
                this.practice = $resource("/api/practices/:id", {}, { update: { method: "PUT" } });
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
//# sourceMappingURL=ResourceService.js.map

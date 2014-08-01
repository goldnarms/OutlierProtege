module App.Services {
    "use strict";
    export interface IResourceService {
        fields: ng.resource.IResourceClass<Models.Field>;
        field: Interfaces.IUpdatableResourceClass<Models.Field>;
    }

    export class ResourceService {
        public fields: ng.resource.IResourceClass<Models.Field>;
        public field: Interfaces.IUpdatableResourceClass<Models.Field>;
        public injection(): any[] { return ["$resource", ResourceService]; }
        static $inject = ["$resource"];

        constructor(private $resource: ng.resource.IResourceService) {
            this.fields = $resource<Models.Field>("/api/fields");

            this.field = <Interfaces.IUpdatableResourceClass<Models.Field>>
            $resource<Models.Field>("/api/fields/:id", {}, { update: { method: 'PUT' } });
        }
    }
}

angular.module("app.services")
    .factory("resourceService", ["$resource", ($resource: ng.resource.IResourceService): App.Services.IResourceService=> {
        return new App.Services.ResourceService($resource);
    }]);
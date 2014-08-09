module App.Services {
    "use strict";
    export interface IResourceService {
        fields: ng.resource.IResourceClass<Models.Field>;
        field: Interfaces.IUpdatableResourceClass<Models.Field>;
        proteges: ng.resource.IResourceClass<Models.Protege>;
        protege: Interfaces.IUpdatableResourceClass<Models.Protege>;
    }

    export class ResourceService {
        public fields: ng.resource.IResourceClass<Models.Field>;
        public field: Interfaces.IUpdatableResourceClass<Models.Field>;
        public proteges: ng.resource.IResourceClass<Models.Protege>;
        public protege: Interfaces.IUpdatableResourceClass<Models.Protege>;

        public injection(): any[] { return ["$resource", ResourceService]; }
        static $inject = ["$resource"];

        constructor(private $resource: ng.resource.IResourceService) {
            this.fields = $resource<Models.Field>("/api/fields");
            this.field = <Interfaces.IUpdatableResourceClass<Models.Field>>
            $resource<Models.Field>("/api/fields/:id", {}, { update: { method: 'PUT' } });

            this.proteges = $resource<Models.Protege>("/api/proteges");
            this.protege = <Interfaces.IUpdatableResourceClass<Models.Protege>>
            $resource<Models.Protege>("/api/proteges/:id", {}, { update: { method: 'PUT' } });
        }
    }
}
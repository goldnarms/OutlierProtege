module App.Services {
    "use strict";
    export interface IResourceService {
        fields: ng.resource.IResourceClass<Models.Field>;
        field: Interfaces.IUpdatableResourceClass<Models.Field>;
        proteges: ng.resource.IResourceClass<Models.Protege>;
        protege: Interfaces.IUpdatableResourceClass<Models.Protege>;
        sources: ng.resource.IResourceClass<Models.Source>;
        source: Interfaces.IUpdatableResourceClass<Models.Source>;
        tasks: ng.resource.IResourceClass<Models.Task>;
        task: Interfaces.IUpdatableResourceClass<Models.Task>;
        practices: ng.resource.IResourceClass<Models.Practice>;
        practice: Interfaces.IUpdatableResourceClass<Models.Practice>;
    }

    export class ResourceService {
        public fields: ng.resource.IResourceClass<Models.Field>;
        public field: Interfaces.IUpdatableResourceClass<Models.Field>;
        public proteges: ng.resource.IResourceClass<Models.Protege>;
        public protege: Interfaces.IUpdatableResourceClass<Models.Protege>;

        public sources: ng.resource.IResourceClass<Models.Source>;
        public source: Interfaces.IUpdatableResourceClass<Models.Source>;
        public tasks: ng.resource.IResourceClass<Models.Task>;
        public task: Interfaces.IUpdatableResourceClass<Models.Task>;
        public practices: ng.resource.IResourceClass<Models.Practice>;
        public practice: Interfaces.IUpdatableResourceClass<Models.Practice>;

        public injection(): any[] { return ["$resource", ResourceService]; }
        static $inject = ["$resource"];

        constructor(private $resource: ng.resource.IResourceService) {
            this.fields = $resource<Models.Field>("/api/fields");
            this.field = <Interfaces.IUpdatableResourceClass<Models.Field>>
            $resource<Models.Field>("/api/fields/:id", {}, { update: { method: 'PUT' } });

            this.proteges = $resource<Models.Protege>("/api/proteges");
            this.protege = <Interfaces.IUpdatableResourceClass<Models.Protege>>
            $resource<Models.Protege>("/api/proteges/:id", {}, { update: { method: 'PUT' } });

            this.sources = $resource<Models.Source>("/api/sources");
            this.source = <Interfaces.IUpdatableResourceClass<Models.Source>>
            $resource<Models.Source>("/api/sources/:id", {}, { update: { method: 'PUT' } });

            this.tasks = $resource<Models.Task>("/api/tasks");
            this.task = <Interfaces.IUpdatableResourceClass<Models.Task>>
            $resource<Models.Task>("/api/tasks/:id", {}, { update: { method: "PUT" } });

            this.practices = $resource<Models.Practice>("/api/practices");
            this.practice = <Interfaces.IUpdatableResourceClass<Models.Practice>>
            $resource<Models.Practice>("/api/practices/:id", {}, { update: { method: "PUT" } });
        }
    }
}
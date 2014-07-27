/// <reference path="../_all.ts" />
module App.Services {
    "use strict";

    export interface IFieldResource extends ng.resource.IResourceClass<App.Models.Field> {
        update(field: App.Models.Field): IFieldResource;
    }

    export class FieldService {
        public injection(): any[] { return ["$resource", FieldService]; }

        private updateAction: ng.resource.IActionDescriptor;
        static $inject = ["$resource"];

        constructor(private $resource: ng.resource.IResourceService) {
            this.updateAction = {
                method: 'PUT',
                isArray: false
            };
        }

        public update(field: App.Models.Field) {
            // Return the resource, include your custom actions
            return <IFieldResource>this.$resource('/api/field/:id', { id: '@id' }, {
                update: this.updateAction
            });

        }

        public get():Models.Field {
            return null;
        }
    }
}

/// <reference path="../_all.ts" />
module App.Controllers {
    "use strict";
    export interface IFrontPageController {
        fields: Models.Field[];
    }

    export class FrontPageConroller {
        public injection(): any[] { return ["resourceService", FrontPageConroller]; }
        static $inject = ["resourceService"];

        public fields: Models.Field[];
        constructor(private resourceService: App.Services.IResourceService) {
            this.init();
        }

        private init(): void {
            this.fields = this.resourceService.fields.query();
        }
    }
}
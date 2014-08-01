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
        constructor(private resourceService: Services.IResourceService) {
            this.init();
        }

        private init(): void {
            this.fields = this.resourceService.fields.query();
        }
    }
}

angular.module("app.controllers")
    .controller("frontPageController", ["resourceService", (resourceService: App.Services.IResourceService): App.Controllers.IFrontPageController=> {
    return new App.Controllers.FrontPageConroller(resourceService);
}]);
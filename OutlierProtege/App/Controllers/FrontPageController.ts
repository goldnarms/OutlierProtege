/// <reference path="../_all.ts" />
module App.Controllers {
    "use strict";
    export interface IFrontPageController {
        goToNextStep(): void;
        fields: Models.Field[];
        wizardStepIndex: number;
        selectedField: string;
    }

    export class FrontPageConroller {
        public injection(): any[] { return ["resourceService", FrontPageConroller]; }
        static $inject = ["resourceService"];

        public fields: Models.Field[];
        public wizardStepIndex: number;
        public selectedField: string;
        constructor(private resourceService: Services.IResourceService) {
            this.init();
        }

        public goToNextStep(): void {
            this.wizardStepIndex++;
        }

        private init(): void {
            this.wizardStepIndex = 0;
            this.fields = this.resourceService.fields.query();
        }
    }
}

angular.module("app.controllers")
    .controller("frontPageController", ["resourceService", (resourceService: App.Services.IResourceService): App.Controllers.IFrontPageController=> {
    return new App.Controllers.FrontPageConroller(resourceService);
}]);
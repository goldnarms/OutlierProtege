/// <reference path="../_all.ts" />
module App.Controllers {
    "use strict";
    export interface IFrontPageController {
        goToNextStep(): void;
        yearsToLog(years: number): any[];
        wizardFinished(): void;
        fields: Models.Field[];
        selectedField: string;
    }

    export class FrontPageConroller {
        public injection(): any[] { return ["resourceService", FrontPageConroller]; }
        static $inject = ["resourceService"];

        public fields: Models.Field[];
        public wizardStepIndex: number;
        public selectedField: string;
        public protegeViewModel: IProtegeViewModel;
        constructor(private resourceService: Services.IResourceService) {
            this.init();
        }

        public yearsToLog(years: number): any[] {
            return new Array(years);
        }

        public wizardFinished(viewModel: IProtegeViewModel): void {
            var protege = new Models.Protege(this.resourceService);
            protege.field = viewModel.selectedField;
            protege.saveToDb();
        }

        private init(): void {
            this.wizardStepIndex = 0;
            this.fields = this.resourceService.fields.query();
        }
    }

    export interface IProtegeViewModel {
        selectedField: any;
        years: number;
    }
}

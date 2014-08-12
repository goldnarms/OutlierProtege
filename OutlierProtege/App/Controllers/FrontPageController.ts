/// <reference path="../_all.ts" />
module App.Controllers {
    "use strict";
    export interface IFrontPageController {
        addYears(years: number): void;
        addPractice(year: number): void;
        wizardFinished(viewModel: IProtegeViewModel): void;
        fields: Models.Field[];
        sources: Models.Source[];
        tasks: Models.Task[];
        selectedField: string;
        hoursInWeek: IHourViewModel[];
        protegeViewModel: IProtegeViewModel;
    }

    export class FrontPageController implements IFrontPageController{
        public injection(): any[] { return ["$state", "resourceService", FrontPageController]; }
        static $inject = ["$state", "resourceService"];

        public fields: Models.Field[];
        public sources: Models.Source[];
        public tasks: Models.Task[];
        public wizardStepIndex: number;
        public selectedField: string;
        public protegeViewModel: IProtegeViewModel;
        public hoursInWeek: IHourViewModel[];
        constructor(private $state: ng.ui.IStateService, private resourceService: Services.IResourceService) {
            this.init();
        }

        public addYears(years: number): void{
            this.protegeViewModel.years = years;
            var practiceList: IPracticeViewModel[] = [];
            for(var i: number = 1; i <= years; i++){
                this.protegeViewModel.practiceVMs.push(<IPracticeViewModel>{ year: i, practices: <Interfaces.IPractice[]>[ null ] });
            }
        }

        public addPractice(year: number): void {
            var practice: IPracticeViewModel = _.find(this.protegeViewModel.practiceVMs, (pvm: IPracticeViewModel) => { return pvm.year === year; });
            if (practice) {
                practice.practices.push(<Interfaces.IPractice>{});
            }
        }

        public wizardFinished(viewModel: IProtegeViewModel): void {
            var protege = new Models.Protege(this.resourceService);
            protege.hoursLogged = 30;
            protege.field = viewModel.selectedField;
            var savedProtege = protege.saveToDb();
            this.$state.go("register", { pid: savedProtege.id });
        }

        private init(): void {
            this.wizardStepIndex = 0;
            this.fields = this.resourceService.fields.query();
            this.sources = this.resourceService.sources.query();
            this.tasks = this.resourceService.tasks.query();
            this.protegeViewModel = <IProtegeViewModel>{ practiceVMs: [] }
            this.hoursInWeek = [];
            for (var i = 1; i <= 100; i++) {
                this.hoursInWeek.push(<IHourViewModel>{ value: i, text: i + " h" });
            }
        }
    }

    export interface IProtegeViewModel {
        selectedField: any;
        years: number;
        practiceVMs: IPracticeViewModel[];
    }

    export interface IPracticeViewModel {
        year: number;
        practices: Interfaces.IPractice[];
    }

    export interface IHourViewModel {
        value: number;
        text: string;
    }
}

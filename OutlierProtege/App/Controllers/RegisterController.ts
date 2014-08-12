module App.Controllers {
    "use strict";

    export interface IRegisterController {
        protege: Models.Protege;
        hoursLogged: number;
        precentage: string;
    }

    export class RegisterController implements IRegisterController {
        public injection(): any[] { return ["$stateParams", "resourceService", FrontPageController]; }
        static $inject = ["$stateParams", "resourceService"];
        public protege: Models.Protege;
        public hoursLogged: number;
        public precentage: string;
        constructor(private $stateParams: IRegisterRouteParams, private resourceService: App.Services.IResourceService) {
            this.init();
        }

        private init(): void {
            this.protege = this.resourceService.proteges.get(parseInt(this.$stateParams.pid, 10));
            this.hoursLogged = this.protege.hoursLogged;
            var hoursPrecentage = this.hoursLogged / 100;
            this.precentage = "width: " + hoursPrecentage + "%";
        }
    }

    export interface IRegisterRouteParams extends ng.ui.IStateParamsService {
        pid: string;
    }
}

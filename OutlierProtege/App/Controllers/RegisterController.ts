/// <reference path="../_all.ts" />
module App.Controllers {
    "use strict";

    export interface IRegisterController {
        protege: Models.Protege;
        hoursLogged: number;
        precentage: string;
    }

    export class RegisterController implements IRegisterController {
        public injection(): any[] { return ["$routeParams", "resourceService", "Azureservice", RegisterController]; }
        static $inject = ["$routeParams", "resourceService", "Azureservice"];
        public protege: Models.Protege;
        public hoursLogged: number;
        public precentage: string;
        constructor(private $routeParams: IRegisterRouteParams, private resourceService: App.Services.IResourceService, private azureservice: Interfaces.IAzureService) {
            this.init();
        }

        private init(): void {
            this.resourceService.proteges.get({ id: parseInt(this.$routeParams.pid, 10) }, (data) => {
                this.protege = data;
                this.hoursLogged = this.protege.hoursLogged;
                var hoursPrecentage = this.hoursLogged / 100;
                this.precentage = "width: " + hoursPrecentage + "%";
            });
        }

        public register(providername: string): void {
            this.azureservice.login(providername);
        }
    }

    export interface IRegisterRouteParams extends ng.route.IRouteParamsService {
        pid: string;
    }
}

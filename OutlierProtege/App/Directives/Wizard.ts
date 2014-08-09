module App.Directives {
    "use strict";

    export class WizardInit implements ng.IDirective {
        public injection(): any[] { return [() => new WizardInit()]; }
        public restrict = "A";
        public link(scope: ng.IScope, element: any, attributes: any) {
            (<any>$)(element).steps();
        }

        constructor() { }
    }
}
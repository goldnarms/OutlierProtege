module App.Models {
    "use strict";

    export class Protege implements Interfaces.IProtege {
        public id: number;
        public yearsOfPractise: number;
        public hoursLogged: number;
        public userId: number;
        public fieldOfExperienceId: number;
        public field: Field = null;
        constructor(private resourceServiece: Services.IResourceService) {
        }

        public saveToDb(): Models.Protege {
            return this.resourceServiece.protege.save(this);
        }
    }
} 
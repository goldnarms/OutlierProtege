module App.Models {
    "use strict";

    export class Protege implements Interfaces.IProtege {
        public yearsOfPractise: number;
        public hoursLogged: number;
        public userId: number;
        private fieldOfExperienceId: number;
        private _field: Field = null;
        constructor(private resourceServiece: Services.IResourceService) {
        }

        public get field(): Models.Field {
            return this.resourceServiece.field.get(this.fieldOfExperienceId);
        }

        public set field(value: Models.Field) {
            this._field = value;
        }

        public saveToDb(): Models.Protege {
            return this.resourceServiece.protege.save(this);
        }
    }
} 
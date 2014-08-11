module App.Models {
    "use strict";

    export class Protege implements Interfaces.IProtege {
        private _yearsOfPractise: number;
        private _hoursLogged: number;
        private _userId: number;
        private fieldOfExperienceId: number;
        private _field: Field = null;
        constructor(private resourceServiece: Services.IResourceService) {
        }

        public get field(): Models.Field {
            return this._field || this.resourceServiece.field.get(this.fieldOfExperienceId);
        }

        public set field(value: Models.Field) {
            this._field = value;
        }

        public get yearsOfPractise(): number {
            return this._yearsOfPractise;
        }

        public set yearsOfPractise(value: number) {
            this._yearsOfPractise = value;
        }

        public get hoursLogged(): number {
            return this._hoursLogged;
        }

        public set hoursLogged(value: number) {
            this._hoursLogged = value;
        }

        public get userId(): number {
            return this._userId;
        }

        public set userId(value: number) {
            this._userId = value;
        }

        public saveToDb(): Models.Protege {
            return this.resourceServiece.protege.save(this);
        }
    }
} 
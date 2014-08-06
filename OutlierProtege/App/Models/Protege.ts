module App.Interfaces {
    "use strict";

    export class Protege implements Interfaces.IProtege {
        public fieldOfExpertice: Models.Field;
        public yearsOfPractise: number;
        public hoursLogged: number;
        private fieldOfExperienceId: number;

        constructor(private resourceServiece: Services.IResourceService) {
        }

        public setField(fieldId: number): void {
            this.fieldOfExperienceId = fieldId;
        }

        public getField(): Models.Field {
            return this.resourceServiece.field.get(this.fieldOfExperienceId);
        }

        public saveToDb(): Models.Field {
            return this.resourceServiece.field.save(this);
        }
    }
} 
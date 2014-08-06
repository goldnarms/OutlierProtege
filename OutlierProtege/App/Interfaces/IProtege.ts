module App.Interfaces {
    "use strict";

    export interface IProtege extends IDbModel<Models.Field>{
        setField(fieldId: number): void;
        getField(): Models.Field;
        fieldOfExpertice: Models.Field;
        yearsOfPractise: number;
        hoursLogged: number;

    }
}
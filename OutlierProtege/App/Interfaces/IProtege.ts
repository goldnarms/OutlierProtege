module App.Interfaces {
    "use strict";

    export interface IProtege extends IDbModel<Models.Protege>{
        field: Models.Field;
        yearsOfPractise: number;
        hoursLogged: number;
        userId: number;
    }
}
module App.Interfaces {
    "use strict";

    export interface IDbModel<T> {
        saveToDb(): ng.IPromise<T>;
    }
} 
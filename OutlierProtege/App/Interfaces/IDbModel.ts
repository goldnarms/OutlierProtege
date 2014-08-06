module App.Interfaces {
    "use strict";

    export interface IDbModel<T> {
        saveToDb(): T;
    }
} 
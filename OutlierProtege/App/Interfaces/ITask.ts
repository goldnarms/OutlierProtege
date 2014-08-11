module App.Interfaces {
    "use strict";

    export interface ITask extends IDbModel<Models.Task> {
        id: number;
        description: string;
    }
} 
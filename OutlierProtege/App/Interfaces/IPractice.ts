module App.Interfaces {
    "use strict";

    export interface IPractice extends IDbModel<Models.Practice>{
        id: number;
        hours: number;
        taskId: number;
        sourceId: number;
        protegeId: number;

        task: ITask;
        source: ISource;
        protege: IProtege;
    }
} 
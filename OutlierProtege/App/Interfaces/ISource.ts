module App.Interfaces {
    "use strict";

    export interface ISource extends IDbModel<Models.Source>{
        id: number;
        description: string;
    }
}
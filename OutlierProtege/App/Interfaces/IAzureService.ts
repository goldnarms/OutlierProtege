module App.Interfaces {
    "use strict";
    export interface IAzureService {
        query(tableName: string, parameters: any): any[];
        getAll(tableName: string): any[];
        getById(tableName: string, id: number): any[];
        insert(tableName:string, obj:any):void;
        update(tableName:string, obj:any);
        delete(tableName:string, obj:any);
        login(oauthProvider: string):ng.IPromise<any>;
        logout():void;
        isLoggedIn():boolean;
        invokeApi():void;
    }
}

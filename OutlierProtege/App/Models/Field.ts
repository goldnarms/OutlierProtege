/// <reference path="../_all.ts" />
module App.Models {
    export interface Field extends ng.resource.IResource<Field> {
        id: number;
        name: string;
        subjects: Subject[];
    }
}
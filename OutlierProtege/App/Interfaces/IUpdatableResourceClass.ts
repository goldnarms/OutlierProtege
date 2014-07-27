/// <reference path="../_all.ts" />
module App.Interfaces {
    'use strict';

    export interface IUpdatableResourceClass<T> extends ng.resource.IResourceClass<T> {
        update(params: any, data: any, success?: Function, error?: Function): ng.resource.IResource<T>;
    }
}
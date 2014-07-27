/// <reference path="../_all.ts" />
module App.Models {
	export interface Subject extends ng.resource.IResource<Subject> {
		id: number;
		name: string;
	}
}

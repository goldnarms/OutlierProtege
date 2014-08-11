module App.Models {
    "use strict";

    export class Task implements Interfaces.ITask {

        private _id: number;
        private _description: string;
        constructor(private resourceService: Services.IResourceService) {

        }

        public get id(): number {
            return this._id;
        }

        public set id(value: number) {
            this._id = value;
        }

        public get description(): string {
            return this._description;
        }

        public set description(value: string) {
            this._description = value;
        }

        public saveToDb(): Task {
            return this.resourceService.task.save(this);
        }
    }
} 
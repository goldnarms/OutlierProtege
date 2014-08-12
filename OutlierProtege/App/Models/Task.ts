module App.Models {
    "use strict";

    export class Task implements Interfaces.ITask {

        public id: number;
        public description: string;
        constructor(private resourceService: Services.IResourceService) {

        }

        public saveToDb(): Task {
            return this.resourceService.task.save(this);
        }
    }
} 
module App.Models {
    "use strict";

    export class Practice implements Interfaces.IPractice {
        public id: number;
        public hours: number;
        public taskId: number;
        public sourceId: number;
        public protegeId: number;

        public task: Interfaces.ITask;
        public source: Interfaces.ISource;
        public protege: Interfaces.IProtege;

        constructor(private resourceService: Services.IResourceService) {
        }

        public saveToDb(): Practice {
            return this.resourceService.practice.save(this);
        }
    }
} 
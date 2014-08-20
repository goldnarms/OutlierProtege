module App.Models {
    "use strict";

    export class Task implements Interfaces.ITask {

        public id: number;
        public description: string;
        constructor(private $q: ng.IQService, private resourceService: Services.IResourceService) {

        }

        public saveToDb(): ng.IPromise<Models.Task> {
            var deferred = this.$q.defer<Models.Task>();
            this.resourceService.task.save(this, (data) => {
                deferred.resolve(<Models.Task>data);
            });
            return deferred.promise;
        }
    }
} 
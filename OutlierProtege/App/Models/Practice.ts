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

        constructor(private $q: ng.IQService, private resourceService: Services.IResourceService) {
        }

        //public saveToDb(): Practice {
        //    return this.resourceService.practice.save(this);
        //}


        public saveToDb(): ng.IPromise<Models.Practice> {
            var deferred = this.$q.defer<Models.Practice>();
            this.resourceService.practice.save(this, (data) => {
                deferred.resolve(<Models.Practice>data);
            });
            return deferred.promise;
        }
    }
} 
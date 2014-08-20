module App.Models {
    "use strict";

    export class Source implements Interfaces.ISource {
        public id: number;
        public description: string;
        constructor(private $q: ng.IQService, private resourceService: Services.IResourceService) {
        }

        public saveToDb(): ng.IPromise<Models.Source> {
            var deferred = this.$q.defer<Models.Source>();
            this.resourceService.source.save(this, (data) => {
                deferred.resolve(<Models.Source>data);
            });
            return deferred.promise;
        }
    }
} 
module App.Models {
    "use strict";

    export class Protege implements Interfaces.IProtege {
        public id: number;
        public yearsOfPractise: number;
        public hoursLogged: number;
        public userId: number;
        public fieldOfExperienceId: number;
        public field: Field = null;
        public practices: Interfaces.IPractice[];
        constructor(private $q: ng.IQService, private resourceService: Services.IResourceService) {
        }

        public saveToDb(): ng.IPromise<Models.Protege> {
            var deferred = this.$q.defer<Models.Protege>();
            this.resourceService.protege.save(this, (data) => {
                deferred.resolve(<Models.Protege>data);
            });
            return deferred.promise;
        }
    }
} 
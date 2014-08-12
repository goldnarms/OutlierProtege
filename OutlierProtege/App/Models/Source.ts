module App.Models {
    "use strict";

    export class Source implements Interfaces.ISource {
        public id: number;
        public description: string;
        constructor(private resourceServiece: Services.IResourceService) {
        }

        public saveToDb(): Models.Source {
            return this.resourceServiece.source.save(this);
        }
    }
} 
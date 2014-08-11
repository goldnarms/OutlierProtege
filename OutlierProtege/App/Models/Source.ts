module App.Models {
    "use strict";

    export class Source implements Interfaces.ISource {
        private _id: number;
        private _description: string;
        constructor(private resourceServiece: Services.IResourceService) {
        }

        public get id(): number {
            return this._id;
        }

        public set description(value: string) {
            this._description = value;
        }

        public get description(): string {
            return this._description;
        }

        public set id(value: number) {
            this._id = value;
        }

        public saveToDb(): Models.Source {
            return this.resourceServiece.source.save(this);
        }
    }
} 
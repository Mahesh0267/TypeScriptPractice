"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    //   collection: number[] | string;
    //   constructor(collection: number[] | string) {
    //     this.collection = collection;
    //   }
    //Another way to defined parameter in constructor
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                //If collection is array of numbers
                //   if (this.collection instanceof Array) {  //type guard
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
                //   }
                //if collection is array of string
                //   if(typeof this.collection === 'string'){
                //   }
            }
        }
    }
}
exports.Sorter = Sorter;

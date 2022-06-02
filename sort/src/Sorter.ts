class Sorter {
    //   collection: number[] | string;
  
    //   constructor(collection: number[] | string) {
    //     this.collection = collection;
    //   }
  
    //Another way to defined parameter in constructor
    constructor(public collection: number[]|string) {}
    sort(): void {
      const { length } = this.collection;
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
          //If collection is array of numbers
          if (this.collection instanceof Array) {  //type guard
            if (this.collection[j] > this.collection[j + 1]) {
              const leftHand = this.collection[j];
            //   console.log(leftHand);
              this.collection[j] = this.collection[j + 1];
            //   console.log(this.collection[j]);
              this.collection[j + 1] = leftHand;
            }
          }
          //if collection is array of string
          if(typeof this.collection === 'string'){
              
          }
        }
      }
    }
  }
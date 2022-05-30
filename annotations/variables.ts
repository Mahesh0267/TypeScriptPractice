let apple: number = 5;
let speed: string = "fast";

let nothing: null = null;
let nothingDefined: undefined = undefined;

//built in object

const now: Date = new Date();

now.getTime();

// Arrays

let colors: string[] = ["green", "red", "yellow"];
let numbers: number[] = [25, -45, 1];

//classes

class Car {}

let car: Car = new Car();

//object literal

let point: { x: number; y: number } = {
  x: 20,
  y: 30,
};

//Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use Annotations
// 1) Function that returns the 'any' type
const json ='{"id":1,"userid":2}';
const jsonValue:{id:number,userid:number}=JSON.parse(json);

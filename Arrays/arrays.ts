const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carByMake: string[][] = [["f150"], ["corrola"], ["camaro"]];

//Help with inference when extarcting values

const car = carMakers[0];
const myCar = carMakers.pop();

// prevaent incompatible values
carMakers.push(100);

//Help with 'map'
carMakers.map((car: string): string => {
  return car;
});

//Flexable types
const importantDates=[new Date(),'2025-06-05'];
const singleDates=[new Date()];
const impDates:(Date|string)[]=[new Date()];
importantDates.push('2026-05-06');
importantDates.push(new Date());
importantDates.push(100)


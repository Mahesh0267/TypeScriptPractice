interface Vehicle {
  name: string;
  year: Date; // any type use interface property not primitive value
  broken: boolean;
  summary():string; // express functions
}; 

interface Reportable{
    summary():string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary():string {
      return `Name:${this.name}`;
  }
};

const Drink ={
    color:"Brown",
    corbonated: true,
    suger:40,
    summary():string{
        return `This Drink has ${this.suger} grams`
    }
}

const printSummary = (items: Reportable): void => {
    console.log(items.summary());
    
};

printSummary(oldCivic);
printSummary(Drink)




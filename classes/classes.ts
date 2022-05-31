class Vehicle {
  constructor(public color: string) {}

  // public drive(): void {
  //   console.log('i am in drive');
  // }
  protected speed(): void {
    console.log('120km');
  }
}

const vehicle = new Vehicle('yellow');
console.log(vehicle.color);

// vehicle.drive();
// vehicle.speed();

// inheritance in classes
class Car extends Vehicle {
  constructor(public wheels:number,color:string){
    //super() is reference of parent class
    super(color);
  }
  //overridden
  private drive(): void {
    console.log('i am not in drive');
  }
  startDrivingProcess(): void {
    console.log(
      'private call in method which create private method in same class'
    );
    this.drive();
    this.speed();
  }
}

const car = new Car(4,'red');

car.startDrivingProcess();
// car.speed();

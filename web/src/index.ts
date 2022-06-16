import { User } from './models/User';

const user = new User({ name: 'new brand name', age: 9999 });

// console.log(user.get('name'));   //get error

user.on('change', () => {
  console.log('user was changed');
});

user.trigger('change');

//quic remider on accerors

// class Person {
//   constructor(public firstName: string, public lastName) {}
//   get fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const person = new Person('firstname', 'lastname');
// person.fullName; eamplebelow

//Reminder on how to 'this' works in javascript

// const Colors = {
//   color: 'red',
//   printColor() {
//     console.log(this.color);
//   },
// };

// Colors.printColor(); // peint color 'red' in console

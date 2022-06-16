import { User } from './models/User';

const user = new User({ name: 'new brand name', age: 9999 });

// const on = user.on;
user.on('change', () => {
  console.log('user was crated');
});

//quic remider on accerors

// class Person {
//   constructor(public firstName: string, public lastName) {}
//   get fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const person = new Person('firstname', 'lastname');
// person.fullName;

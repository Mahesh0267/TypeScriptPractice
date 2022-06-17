import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildBuild({ name: 'NAME', age: 20 });

const root = document.getElementById('root');

if (root) {
  const userEdit = new UserEdit(root, user);

  userEdit.render();

  console.log(userEdit);
} else {
  throw new Error('Root element not found');
}

// import { User } from './models/User';

// const collection = User.buildUserCollection();

// collection.on('change', () => {
//   console.log(collection);
// });
// collection.fetch();

// import { User } from './models/User';

// const user = User.buildBuild({ id: 1 });

// // console.log(user.get('name'));   //get error

// user.on('change', () => {
//   console.log(user);
// });

// user.fetch();
// user.save();

// user.trigger('change');

// user.set({ name: 'New name' });

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

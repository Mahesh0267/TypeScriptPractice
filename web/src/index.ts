import { User } from './models/User';

const user = new User({ name: 'abc', age: 12 });

console.log(user.get('name'));
console.log(user.get('age'));

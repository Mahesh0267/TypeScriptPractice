import { User } from './models/User';

const user = new User({ name: 'abc', age: 12 });

user.on('change', () => {});

console.log(user);

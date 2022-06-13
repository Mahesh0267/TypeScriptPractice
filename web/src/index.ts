import { User } from './models/User';

const user = new User({ name: 'new brand name', age: 9999 });

user.save();

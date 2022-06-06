import { User } from './models/User';

const user = new User({ name: 'abc', age: 12 });

user.on('change', () => {
  console.log('change#1');
});
user.on('change', () => {
  console.log('change #2');
});
user.on('save', () => {
  console.log('Save');
});

user.trigger('change');

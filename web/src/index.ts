import { User } from './models/User';

const user = new User({ name: 'new brand name', age: 9999 });

user.events.on('change', () => {
  console.log('change!');
});

user.events.trigger('change');

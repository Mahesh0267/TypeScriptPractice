import axios from 'axios';

axios.post('http://localhost:3000/posts', {
  name: 'myname',
  age: 20,
});

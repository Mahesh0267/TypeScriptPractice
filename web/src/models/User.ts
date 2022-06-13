import axios, { AxiosResponse } from 'axios';

interface UserProps {
  name?: string; //null factor
  age?: number;
}

type callback = () => {};

export class User {
  events: { [Key: string]: callback[] } = {};
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventname: string, callback: callback) {
    //   this.events[eventname] //callback or undefined
    const handler = this.events[eventname] || [];
    handler.push(callback);
    this.events[eventname] = handler;
  }

  trigger(eventName: string): void {
    const handler = this.events[eventName];
    if (!handler || handler.length === 0) {
      return;
    }
    handler.forEach((callback) => {
      callback();
    });
  }

  fetch(): void {
    axios
      .get(`http://localhost:3000/posts/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get('id');
    if (this.get('id')) {
      //put
      axios.put(`http://localhost:3000/posts/${id}`, this.data);
    } else {
      //post
      axios.post(`http://localhost:3000/posts`, this.data);
    }
  }
}

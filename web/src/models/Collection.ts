import axios, { Axios, AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();
  constructor(public rootUrl: string, public deserilize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: K) => {
        const user = this.deserilize(value);
        this.models.push(user);
      });
    });
  }
}

import { UserProps } from './User';

export class Attributes<T> {
  constructor(private data: T) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}

const attrd = new Attributes<UserProps>({ id: 6, name: 'jsgdjf', age: 222 });

const id = attrd.get('id') as number;

if (typeof id === 'number') {
  id;
}

const name = attrd.get('name');

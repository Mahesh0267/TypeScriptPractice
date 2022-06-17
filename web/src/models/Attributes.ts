export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }
  getAll(): T {
    return this.data;
  }
}

// const attrs = new Attributes<UserProps>({
//   id: 5,
//   age: 20,
//   name: 'addsa',
// });

// const name = attrs.get('name');
// const age = attrs.get('age');
// const id = attrs.get('id');

// const attrd = new Attributes<UserProps>({ id: 6, name: 'jsgdjf', age: 222 });

// const id = attrd.get('id') as number;

// if (typeof id === 'number') {
//   id;
// }

// const name = attrd.get('name');

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

 
}

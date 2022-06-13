type callback = () => {};
export class Eventing {
  events: { [Key: string]: callback[] } = {};
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
}

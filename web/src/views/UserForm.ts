export class UserForm {
  constructor(public parent: Element) {}

  eventMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHeaderHover,
    };
  }

  onHeaderHover(): void {
    console.log('H1 was hover');
  }

  onButtonClick(): void {
    console.log('Hi there');
  }

  template(): string {
    return `
        <div>
          <h1>User Form</h1>
          <input />
          <button>Click Me</button>
        </div>
      `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventMap = this.eventMap();

    for (let eventKey in eventMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventMap[eventKey]);
      });
    }
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
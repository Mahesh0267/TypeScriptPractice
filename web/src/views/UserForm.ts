export class UserForm {
  constructor(public parent: Element) {}

  eventMap() {
    return {
      'click:button': this.onButtonClick,
      'hover:h1': this.onHoverHeader,
      'drag:div': this.onDragDiv,
    };
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

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }
}

import { User } from '../models/User';
import { View } from './view';

export class UserForm extends View {
  eventMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.change-name': this.onSetNameClick,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    const name = input?.value;
    this.model.set({ name });
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
        <div>
          <h1>User Form</h1>
          <div>name:${this.model.get('name')}</div>
          <div>age:${this.model.get('age')}</div>
          <input />
          <button class ='change-name'>Change Name</button>
          <button class = 'set-age'>Set Random Age</button>
        </div>
      `;
  }
}

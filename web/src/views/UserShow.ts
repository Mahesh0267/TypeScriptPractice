import { User, UserProps } from '../models/User';
import { View } from './view';

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
        <div>
        <div>User Details</div>
        <div>User Name:${this.model.get('name')}</div>
        <div>Age:${this.model.get('age')}</div>
        </div>`;
  }
}

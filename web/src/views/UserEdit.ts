import { User, UserProps } from '../models/User';
import { View } from './view';

export class UserEdit extends View<User, UserProps> {
  template(): string {
    return `
        <div class ="user-show"></div>
        <div class ="user-form"></div>`;
  }
}

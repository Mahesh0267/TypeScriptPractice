import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Model } from './Model';

export interface UserProps {
  id?: number;
  name?: string; //null factor
  age?: number;
}

const rootUrl = 'http://localhost:3000/posts/';

export class User extends Model<UserProps> {
  static buildBuild(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }
}

// const user = User.buildBuild({})
// user.get('id');
// user.get('name');
// user.get('age');

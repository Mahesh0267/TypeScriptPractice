import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
import { Collection } from './Collection';
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

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      'http://localhost:3000/posts/',
      (json: UserProps) => User.buildBuild(json)
    );
  }
}

// const user = User.buildBuild({})
// user.get('id');
// user.get('name');
// user.get('age');

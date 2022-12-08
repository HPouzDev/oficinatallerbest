import { User } from './user.interface';

export class UserClass implements User {
  id: string;
  mail: string;
  name: string;
}

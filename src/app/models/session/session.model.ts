import { Session } from './session.interface';

export class SessionClass implements Session {
  id: string;
  isValidUser: boolean;
  timeLogged: BigInteger;

  constructor(id: string, isValidUser: boolean, timeLogged: BigInteger) {
    this.id = id;
    this.isValidUser = isValidUser;
    this.timeLogged = timeLogged;
  }
}

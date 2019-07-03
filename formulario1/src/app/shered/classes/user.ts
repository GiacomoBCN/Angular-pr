import { tick } from '@angular/core/testing';

export class User {
 private _id: string;
 private _username: string;
 private _userpass: string;

   constructor() {
     this._id = this.uniqueId();
     this._username = '';
     this._userpass = '';
   }

/* Setters y Getters de la clase */
public setUser(username: string) {
  this._username = username;
}
public setPassword(userpass: string) {
  this._userpass = userpass;
}

public setId(id: string) {
  this._id = id;
}

public getUser() {
  return this._username;
}
public getPassword() {
  return this._userpass;
}

public getId() {
  return this._id;
}

private uniqueId() {
  const thisMS: number = Date.now();
  const shake = Math.random();
  let unique: string = Math.pow(thisMS, shake).toString();
  unique = unique.toString().replace('.', thisMS.toString());
  return unique;

}



}

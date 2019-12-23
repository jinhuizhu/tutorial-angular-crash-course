import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  username: string = null;
  loggedIn = false;

  constructor() { }
}

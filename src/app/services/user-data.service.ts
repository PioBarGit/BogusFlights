import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  userIsLoggedIn = false;

  loggedInUser = {
    email: '',
    firstName: '',
    lastName: '',
  }

  constructor() { }


}

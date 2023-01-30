import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInStatus: boolean = false;

  constructor() { }

  isAuthnticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.loggedInStatus = localStorage.getItem('token') ? true : false;
        resolve(this.loggedInStatus)
      }, 30)
    })
  }
  getLoggedInStatus() {
    return this.loggedInStatus;
  }
  logInToApplication() {
    // api call{email,password >> res>> success}
    this.loggedInStatus = true;
    //We get response
    let token = "JWT token";
    let userRole = "BYER"
    localStorage.setItem("token", token);
    localStorage.setItem('userRole', userRole);
  }

  logOutFormApplication() {
    this.loggedInStatus = false;
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");

  }
}

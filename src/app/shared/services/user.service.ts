import { Injectable } from '@angular/core';
import { Iuser } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Iuser[] = [
    {
      userName: "John",
      userId: 1
    },
    {
      userName: "June",
      userId: 2
    },
    {
      userName: "May",
      userId: 3
    },

  ]
  constructor() { }

  getAllUsers() {
    return this.users
  }
  getSingleUser(id: number) {
    return this.users.find(user => user.userId == id)
  }
  getUpdateUser(userName: string, id: number) {
    this.users.forEach((user) => {
      if (user.userId === id) {
        user.userName = userName
      }
    })
  }
}

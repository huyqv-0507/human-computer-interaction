import { Injectable } from '@angular/core';
import { User, UserList } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public listUser: User[];
  public userList: UserList;
  private result: boolean;

  constructor() {
    this.userList = new UserList;
    this.listUser = this.getListUser();
  }

  getListUser() {
    return [...this.userList.getListUser()];
  }

  getListUserExcept(status: boolean) {
    this.listUser = new Array();
    this.userList.getListUserExcept().forEach(element => {
      if (element.status == status) {
        this.listUser.push(element);
      }
    });
    return [...this.listUser];
  }

  getUser(username: string) { 
    this.listUser = this.getListUser();
    return {
      ...this.listUser.find(user => {
        return user.username === username;
      })
    }
  }

  checkLogin(username: string, password: string) {
    this.result = false;
    this.listUser = this.getListUser();
    this.listUser.forEach(user => {
      if (user.username === (username.trim()) && user.password === (password)) {
        this.result = true;
        if (typeof (Storage) !== "undefined") {
          sessionStorage.username = user.username;
          sessionStorage.role = user.role;
        }
        else {
          console.log("Not support in this app!!!")
        }
      }
    });
   
    return this.result;
  }

  logout() {
    if (typeof (sessionStorage) !== "undefined") {
      sessionStorage.clear();
    }
  }
}

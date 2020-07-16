import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public username: string = "";
  public password: string = "";
  public result: boolean;
  public notify: boolean = false;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  signIn() {
    this.result = this.userService.checkLogin(this.username, this.password);
    if (this.result == true) {
      if (sessionStorage.role !== "undefined") {
        if (sessionStorage.role == 2) {
          this.router.navigateByUrl('/admin');
        }
        else {
          if (sessionStorage.role == 0) {
            this.router.navigateByUrl('/tenant');
          }
          else if (sessionStorage.role == 1) {
            this.router.navigateByUrl('/host/host-home');
          }
        }
      }
      this.password = '';
    }
    else {
      this.notify = true;
      this.password = '';
    }
  }

}

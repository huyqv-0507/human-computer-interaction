import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-popover',
  templateUrl: './home-popover.component.html',
  styleUrls: ['./home-popover.component.scss'],
})
export class HomePopoverComponent implements OnInit {
  public user: User;
  public isShow: boolean = true;

  constructor(private userService: UserService, private router: Router) {
    this.user = this.userService.getUser(sessionStorage.username);
  }

  ngOnInit() {
    this.user = this.userService.getUser(sessionStorage.username);
   }

  logout() {
    this.userService.logout();
    this.isShow = false;
    this.router.navigateByUrl('/login');
  }

  disable() {
    this.isShow = false;
    this.router.navigateByUrl('/profile');
  }
}

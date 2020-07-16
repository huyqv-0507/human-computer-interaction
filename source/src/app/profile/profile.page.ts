import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public user: User;
  public userID: string;

  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute) {
    if (typeof (sessionStorage.username) !== "undefined") {
      this.userID = sessionStorage.username;
    }
    this.user = this.userService.getUser(this.userID);
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('userID')) {
        return;
      }
      this.userID = paramMap.get('userID');
      this.user = this.userService.getUser(this.userID);
    });
  }

}

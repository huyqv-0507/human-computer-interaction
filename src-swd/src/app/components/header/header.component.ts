import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { HomePopoverComponent } from '../home-popover/home-popover.component';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public notUser: boolean = true;
  public user: User;
  public searchValue: string = "";

  constructor(private popoverController: PopoverController,
    private userService: UserService) {
    if (typeof (sessionStorage.username) === 'undefined') {
      this.notUser = true;
    }
    else {
      this.notUser = false;
      this.user = this.userService.getUser(sessionStorage.username);
    }
  }

  ngOnInit() { }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: HomePopoverComponent,
      event: ev
    });
    return await popover.present();
  }

}

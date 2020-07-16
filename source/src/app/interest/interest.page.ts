import { Component, OnInit, Input } from '@angular/core';
import { InterestService } from '../services/interest.service';
import { Interest } from '../models/interest.model';
import { HouseEntity } from '../models/house.model';
import { PopoverController } from '@ionic/angular';
import { HomePopoverComponent } from '../components/home-popover/home-popover.component';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.page.html',
  styleUrls: ['./interest.page.scss'],
})
export class InterestPage implements OnInit {
  private interest: Interest;
  public listHouse: HouseEntity[];
  public statusFrom = {
    status: "interest"
  };
  public notUser: boolean = true;
  public user: User;
  public searchValue: string = "";

  constructor(private interestService: InterestService,
     private popoverController: PopoverController,
     private userService: UserService) {
    if (typeof (sessionStorage.username) !== "undefined") {
      this.interest = this.interestService.getInterest(sessionStorage.username);
      this.listHouse = this.interestService.getListHouse(this.interest);
    }
    if (typeof (sessionStorage.username) === 'undefined') {
      this.notUser = true;
    }
    else {
      this.notUser = false;
      this.user = this.userService.getUser(sessionStorage.username);
    }
  }

  ngOnInit() {
    
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: HomePopoverComponent,
      event: ev
    });
    return await popover.present();
  }
}

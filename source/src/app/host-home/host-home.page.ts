import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { PostHouseModalPage } from '../post-house-modal/post-house-modal.page';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { HomePopoverComponent } from '../components/home-popover/home-popover.component';

@Component({
  selector: 'app-host-home',
  templateUrl: './host-home.page.html',
  styleUrls: ['./host-home.page.scss'],
})
export class HostHomePage implements OnInit {
  public notUser: boolean = true;
  public user: User;

  constructor(private modalController: ModalController,
    private popoverController: PopoverController,
    private userService: UserService, ) {
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

  async postApartment() {
    const modal = await this.modalController.create({
      component: PostHouseModalPage,
      componentProps: {
        category: 'Chung cư'
      }

    });
    return await modal.present();
  }
  async postOffice() {
    const modal = await this.modalController.create({
      component: PostHouseModalPage,
      componentProps: {
        category: 'Văn phòng'
      }

    });
    return await modal.present();
  }
  async postEdc() {
    const modal = await this.modalController.create({
      component: PostHouseModalPage,
      componentProps: {
        category: 'Mặt bằng'
      }

    });
    return await modal.present();
  }
  async postHouse() {
    const modal = await this.modalController.create({
      component: PostHouseModalPage,
      componentProps: {
        category: 'Nhà nguyên căn'
      }

    });
    return await modal.present();
  }
  async postMotel() {
    const modal = await this.modalController.create({
      component: PostHouseModalPage,
      componentProps: {
        category: 'Nhà trọ'
      }

    });
    return await modal.present();
  }
  showMess() {

  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: HomePopoverComponent,
      event: ev
    });
    return await popover.present();
  }

}

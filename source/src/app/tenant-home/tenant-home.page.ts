import { Component, OnInit } from '@angular/core';
import { TenantService } from '../tenant/tenant.service';
import { ToastController, PopoverController } from '@ionic/angular';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { HomePopoverComponent } from '../components/home-popover/home-popover.component';
import { ModalController } from '@ionic/angular';
import { TenantNotificationModalPage } from '../tenant-notification-modal/tenant-notification-modal.page';
import { HouseEntity } from '../models/house.model';
import { InterestService } from '../services/interest.service';
import { Interest } from '../models/interest.model';
@Component({
  selector: 'app-tenant-home',
  templateUrl: './tenant-home.page.html',
  styleUrls: ['./tenant-home.page.scss'],
})
export class TenantHomePage implements OnInit {
  public houseTopPrice: HouseEntity[];
  public houseTop: HouseEntity[];
  public listStatusTop: any;
  public listStatusTopPrice: any;
  public notUser: boolean = true;
  public user: User;
  public searchValue: string = "";
  public interest: Interest;
  public isExisted: string = "Lưu tin";

  constructor(private houseService: TenantService,
    private toastController: ToastController,
    private popoverController: PopoverController,
    private userService: UserService,
    private modalController: ModalController,
    private interestService: InterestService, ) {
    this.listStatusTop = new Array();
    this.listStatusTopPrice = new Array();
    this.houseTopPrice = this.houseService.getAllHousesTopPrice();
    this.houseTop = this.houseService.getAllHousesTop();
    this.interest = this.interestService.getInterest(sessionStorage.username);

    this.houseTop.forEach(element => {
      if (this.interestService.checkExist(element.id, this.interest)) {
        this.isExisted = "Hủy Lưu";
      }
      this.listStatusTop.push({
        houseID: element.id,
        status: this.isExisted
      });
      this.isExisted = "Lưu tin";
    });

    this.houseTopPrice.forEach(element => {
      if (this.interestService.checkExist(element.id, this.interest)) {
        this.isExisted = "Hủy Lưu";
      }
      this.listStatusTopPrice.push({
        houseID: element.id,
        status: this.isExisted
      });
      this.isExisted = "Lưu tin";
    });

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

  slidesOpts = {
    spaceBetween: 10,
    slidesPerView: 2.8,
  }

  slideOpts = {
    spaceBetween: 3,
    slidesPerView: 1.6,
    loop: true
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  changeInterestStatus(index: number, type: string) {
    if (type === "topPrice") {
      if (this.listStatusTopPrice[index].status === "Lưu tin") {
        this.listStatusTopPrice[index].status = "Hủy lưu";
        this.presentToast("Đã lưu!")
      }
      else {
        this.listStatusTopPrice[index].status = "Lưu tin";
        this.presentToast("Đã hủy!")
      }
    }
    else {
      if (this.listStatusTop[index].status === "Lưu tin") {
        this.listStatusTop[index].status = "Hủy lưu";
        this.presentToast("Đã lưu!")
      }
      else {
        this.listStatusTop[index].status = "Lưu tin";
        this.presentToast("Đã hủy!")
      }
    }
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: HomePopoverComponent,
      event: ev
    });
    return await popover.present();
  }

  async showNotifications() {
    const modal = await this.modalController.create({
      component: TenantNotificationModalPage,
    });
    await modal.present();
  }
}

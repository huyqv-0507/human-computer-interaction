import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { HouseEntity } from '../models/house.model';
import { PopoverController, ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { HomeServiceService } from '../home/home-service.service';
import { ActivatedRoute } from '@angular/router';
import { HomePopoverComponent } from '../components/home-popover/home-popover.component';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.page.html',
  styleUrls: ['./approved.page.scss'],
})
export class ApprovedPage implements OnInit {

  public user: User;
  public listHouse: any;
  public houseId: String = "";
  public mess: string = "";
  public tmp: any;
  public timeSelected: string = "active";
  public statusSelected: string = "active";

  constructor(private popoverController: PopoverController,
    private userService: UserService,
    private houseService: HomeServiceService,
    public toastController: ToastController,
    private activatedRoute: ActivatedRoute) {
    if (typeof (sessionStorage.username) !== 'undefined') {
      this.user = this.userService.getUser(sessionStorage.username);
    }
    this.listHouse = new Array();
    this.houseService.getAllHousesTopPrice().forEach(element => {
      this.listHouse.push(element);
    });
    this.tmp = this.houseService.getAllHousesTop();
    for (let i = this.tmp.length - 1; i >= 0; i--) {
      this.listHouse.push(this.tmp[i]);
    }
    this.listHouse = this.filter(this.listHouse);
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('houseId')) {
        return;
      }
      this.houseId = paramMap.get('houseId');

    });
    if (this.houseId !== "") {
      for (let i = 0; i < this.listHouse.length; i++) {
        if (this.listHouse[i].id === (this.houseId)) {
          this.listHouse.splice(i, 1);
        }
      }
    }
  }

  filter(list: any) {
    let array = new Array();
    for (let i = 1; i < list.length + 1; i++) {
      list.forEach(element => {
        if (element.order == i) {
          array.push(element);
        }
      });
    }
    return array;
  }

  filter2(list: any) {
    let array = new Array();
    for (let i = list.length + 1; i > 0; i--) {
      list.forEach(element => {
        if (element.order == i) {
          array.push(element);
        }
      });
    }
    return array;
  }

  // filterStatus2(list: any) {
  //   let array = new Array();
  //   for (let i = list.length +1; i > 0; i--) {
  //     list.forEach(element => {
  //       if (element.order == i) {
  //         array.push(element);
  //       }
  //     });
  //   }
  //   return array;
  // }

  filterStatus(list: any, status: boolean) {
    let array = new Array();
    for (let i = 1; i < list.length + 1; i++) {
      list.forEach(element => {
        if (element.status == status) {
          let check = true;
          array.forEach(element2 => {
            if (element2.id == element.id) {
              check = false;
            }
          });
          if (check) {
            array.push(element);
          }
        }
      });
    }
    return array;
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: HomePopoverComponent,
      event: ev
    });
    return await popover.present();
  }

  changeStatus(index: number) {
    this.listHouse.splice(index, 1);
    this.mess = "Đã ẩn bài đăng!";
    this.presentToast(this.mess);
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async onChangeStatus() {
    this.listHouse = new Array();
    this.houseService.getAllHousesTopPrice().forEach(element => {
      this.listHouse.push(element);
    });
    this.tmp = this.houseService.getAllHousesTop();
    for (let i = this.tmp.length - 1; i >= 0; i--) {
      this.listHouse.push(this.tmp[i]);
    }
    if (this.statusSelected === "active") {
      if (this.timeSelected === "active") {
        this.listHouse = this.filter(this.listHouse);
      }
      else {
        this.listHouse = this.filter2(this.listHouse);
      }
    }
    else {
      if (this.statusSelected === "show") {
        this.listHouse = this.filterStatus(this.listHouse, true);
        if (this.timeSelected === "active") {
          this.listHouse = this.filter(this.listHouse);
        }
        else {
          this.listHouse = this.filter2(this.listHouse);
        }
      }
      else {
        this.listHouse = this.filterStatus(this.listHouse, false);
        if (this.timeSelected === "active") {
          this.listHouse = this.filter(this.listHouse);
        }
        else {
          this.listHouse = this.filter2(this.listHouse);
        }
      }
    }
  }

  async onChangeTime() {
    this.listHouse = new Array();
    this.houseService.getAllHousesTopPrice().forEach(element => {
      this.listHouse.push(element);
    });
    this.tmp = this.houseService.getAllHousesTop();
    for (let i = this.tmp.length - 1; i >= 0; i--) {
      this.listHouse.push(this.tmp[i]);
    }
    if (this.statusSelected === "active") {
      if (this.timeSelected === "active") {
        this.listHouse = this.filter(this.listHouse);
      }
      else {
        this.listHouse = this.filter2(this.listHouse);
      }
    }
    else {
      if (this.statusSelected === "show") {
        this.listHouse = this.filterStatus(this.listHouse, true);
        if (this.timeSelected === "active") {
          this.listHouse = this.filter(this.listHouse);
        }
        else {
          this.listHouse = this.filter2(this.listHouse);
        }
      }
      else {
        this.listHouse = this.filterStatus(this.listHouse, false);
        if (this.timeSelected === "active") {
          this.listHouse = this.filter(this.listHouse);
        }
        else {
          this.listHouse = this.filter2(this.listHouse);
        }
      }
    }
  }

}

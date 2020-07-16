import { Component, OnInit } from '@angular/core';
import { PopoverController, ToastController, AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { HomePopoverComponent } from '../components/home-popover/home-popover.component';
import { HouseEntity } from '../models/house.model';
import { HomeServiceService } from '../home/home-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  public user: User;
  public listHouse: HouseEntity[];
  public accept: String = "Duyệt tin";
  public decline: String = "Loại bỏ tin";
  public houseId: String = "";
  public mess: string = "";
  public timeSelected: string = "active";

  constructor(private popoverController: PopoverController,
    private userService: UserService,
    private houseService: HomeServiceService,
    public toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController) {
    if (typeof (sessionStorage.username) !== 'undefined') {
      this.user = this.userService.getUser(sessionStorage.username);
    }
    this.listHouse = this.houseService.getAllHousesTop();
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

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: HomePopoverComponent,
      event: ev
    });
    return await popover.present();
  }

  async changeStatus(value: string, index: number) {
    if (value.match('accept')) {
      this.listHouse.splice(index, 1);
      this.mess = "Đã duyệt tin!";
      this.presentToast(this.mess);
    }
    else {
      let alert = await this.alertCtrl.create({
        header: 'Loại bỏ tin',
        inputs: [
          {
            name: 'content',
            type: 'text',
            placeholder: 'Lý do'
          }

        ],
        buttons: [
          {
            text: 'Loại bỏ',
            role: 'ok',
            handler: data => {
              this.mess = "Đã loại bỏ tin!";
              this.presentToast(this.mess);
              this.listHouse.splice(index, 1);
            }
          },
          {
            text: 'Hủy',
            role: 'cancel',
            cssClass: 'text-align',
            handler: data => {
            }
          }
        ]
      });
      await alert.present();
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  filter(list: any) {
    let array = new Array();
    for (let i = 6; i < 11; i++) {
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
    for (let i = 10; i > 5; i--) {
      list.forEach(element => {
        if (element.order == i) {
          array.push(element);
        }
      });
    }
    return array;
  }

  onChangeTime(){
    this.listHouse = this.houseService.getAllHousesTop();
      if (this.timeSelected === "active") {
        this.listHouse = this.filter(this.listHouse);
      }
      else {
        this.listHouse = this.filter2(this.listHouse);
      }
  }
}


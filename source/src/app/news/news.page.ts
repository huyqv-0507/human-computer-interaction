import { Component, OnInit } from '@angular/core';
import { HouseEntity } from '../models/house.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeServiceService } from '../home/home-service.service';
import { UserService } from '../services/user.service';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  public house: HouseEntity;
  public numberPhone: string;
  private houseId: string;
  public mess: string = "";
  public name: string = "";

  constructor(private activatedRoute: ActivatedRoute,
    private houseService: HomeServiceService,
    private userService: UserService,
    public toastController: ToastController,
    private alertCtrl: AlertController,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('houseId')) {
        return;
      }
      this.houseId = paramMap.get('houseId');
    });
    this.house = this.houseService.getHouse(this.houseId);

    this.numberPhone = this.userService.getUser(this.house.username).phone1;
    this.name = this.userService.getUser(this.house.username).fullName;

  }

  slideOpts = {
    zoom: true,
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  // onClick(value: string) {
  //   if (value.match('accept')) {
  //     this.mess = "Đã duyệt tin!";
  //   }
  //   else {
  //     this.mess = "Đã loại bỏ tin!";
  //   }
  //   this.presentToast(this.mess);
  // }
  async onClick(value: string) {
    if (value.match('accept')) {
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
              this.router.navigateByUrl('/admin');
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
}

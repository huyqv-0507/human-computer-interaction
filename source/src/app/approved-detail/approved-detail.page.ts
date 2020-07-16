import { Component, OnInit } from '@angular/core';
import { HouseEntity } from '../models/house.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeServiceService } from '../home/home-service.service';
import { UserService } from '../services/user.service';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-approved-detail',
  templateUrl: './approved-detail.page.html',
  styleUrls: ['./approved-detail.page.scss'],
})
export class ApprovedDetailPage implements OnInit {

  public house: HouseEntity;
  public numberPhone: string;
  private houseId: string;
  public mess: string = "";
  public name: string = "";
  public tag: string = "Đẩy tin";
  public hint: string = "Ẩn tin";

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
      duration: 2000
    });
    toast.present();
  }

  async onClick(value: string) {
    let alert = await this.alertCtrl.create({
      header: this.house.status === true ? 'Ẩn tin' : 'Hiện tin',
      inputs: [
        {
          name: 'content',
          type: 'text',
          placeholder: 'Lý do'
        }

      ],
      buttons: [
        {
          text: 'Ẩn',
          role: 'ok',
          handler: data => {
            // this.mess = "Đã ẩn tin!";
            // this.presentToast(this.mess);
            // // this.router.navigateByUrl('/approved');
            if (this.house.status === true) {
              this.house.status = false;
            }
            else{
              this.house.status = true;
            }
            // this.hint="Hiện tin"
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

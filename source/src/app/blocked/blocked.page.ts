import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { PopoverController, ToastController, AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { HomePopoverComponent } from '../components/home-popover/home-popover.component';

@Component({
  selector: 'app-blocked',
  templateUrl: './blocked.page.html',
  styleUrls: ['./blocked.page.scss'],
})
export class BlockedPage implements OnInit {

  public user: User;
  public mess: string = "";
  public searchValue: string = "";
  public list: User[];
  public listBK: User[] = new Array();
  public listBK2: User[];

  constructor(private popoverController: PopoverController,
    private userService: UserService,
    public toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController) {
    if (typeof (sessionStorage.username) !== 'undefined') {
      this.user = this.userService.getUser(sessionStorage.username);
    }
    this.list = userService.getListUserExcept(false);
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('userID')) {
        return;
      }
      this.searchValue = paramMap.get('userID');
    });

    if (this.searchValue !== "") {
      this.search();
    }
    else {
      this.listBK = this.list;
    }
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: HomePopoverComponent,
      event: ev
    });
    return await popover.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  search() {
    this.listBK2 = new Array();
    if (this.searchValue === "" || typeof (this.searchValue) === "undefined") {
      this.listBK = this.list;
    }
    else {
      this.list.forEach(element => {
        if (element.username.includes(this.searchValue)) {
          this.listBK2.push(element);
        }
      });
      this.listBK = this.listBK2;
    }
    return [...this.listBK];
  }

  unlock(index: number) {
    this.presentPrompt(index);
  }

  async presentPrompt(index: number) {
    let alert = await this.alertCtrl.create({
      header: 'Xác nhận mở khóa',
      buttons: [
        {
          text: 'Đồng ý',
          role: 'ok',
          handler: data => {
            this.listBK.splice(index, 1);
            this.mess = "Mở khóa tài khoản thành công!"
            this.presentToast(this.mess);
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

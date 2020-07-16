import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { PopoverController, ToastController, AlertController } from '@ionic/angular';
import { User } from '../models/user.model';
import { HomePopoverComponent } from '../components/home-popover/home-popover.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-management',
  templateUrl: './management.page.html',
  styleUrls: ['./management.page.scss'],
})
export class ManagementPage implements OnInit {
  public user: User;
  public mess: string = "";
  public searchValue: string = "";
  public list: User[];
  public listBK: User[] = new Array();
  public listBK2: User[];
  public statusSelected: string = "active";
  public roleSelected: string = "active";

  constructor(private popoverController: PopoverController,
    private userService: UserService,
    public toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController) {
    if (typeof (sessionStorage.username) !== 'undefined') {
      this.user = this.userService.getUser(sessionStorage.username);
    }
    this.list = userService.getListUserExcept(true);
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

  unlock(index: number) {
    this.presentPrompt2(index);
  }

  async presentPrompt2(index: number) {
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

  block(index: number) {
    this.presentPrompt(index);
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

  async presentPrompt(index: number) {
    let alert = await this.alertCtrl.create({
      header: 'Khóa tài khoản',
      inputs: [
        {
          name: 'content',
          type: 'text',
          placeholder: 'Lý do'
        }

      ],
      buttons: [
        {
          text: 'Khóa',
          role: 'ok',
          handler: data => {
            this.listBK.splice(index, 1);
            this.mess = "Khóa tài khoản thành công!"
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

  async presentPromptWarning() {
    let alert = await this.alertCtrl.create({
      header: 'Cảnh báo',
      inputs: [
        {
          name: 'content',
          type: 'text',
          placeholder: 'Nội dung'
        }

      ],
      buttons: [
        {
          text: 'Gửi',
          role: 'ok',
          handler: data => {
            this.mess = "Gửi cảnh báo thành công!"
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

  onChangeStatus() {
    if (this.statusSelected === "inactive") {
      this.list = this.userService.getListUserExcept(false);
      this.listBK = this.list;
      if (this.roleSelected !== "active") {
        if (this.roleSelected === "tenant") {
          this.listBK2 = new Array();
          this.listBK.forEach(element => {
            if (element.role == 0) {
              this.listBK2.push(element);
            }
          });
          this.listBK = this.listBK2;
        }
        else {
          this.listBK2 = new Array();
          this.listBK.forEach(element => {
            if (element.role == 1) {
              this.listBK2.push(element);
            }
          });
          this.listBK = this.listBK2;
        }
      }
    }
    else {
      this.list = this.userService.getListUserExcept(true);
      this.listBK = this.list;
      if (this.roleSelected !== "active") {
        if (this.roleSelected === "tenant") {
          this.listBK2 = new Array();
          this.listBK.forEach(element => {
            if (element.role == 0) {
              this.listBK2.push(element);
            }
          });
          this.listBK = this.listBK2;
        }
        else {
          this.listBK2 = new Array();
          this.listBK.forEach(element => {
            if (element.role == 1) {
              this.listBK2.push(element);
            }
          });
          this.listBK = this.listBK2;
        }
      }
    }
  }

  onChangeRole() {
    if (this.statusSelected === "inactive") {
      this.list = this.userService.getListUserExcept(false);
      this.listBK = this.list;
      if (this.roleSelected !== "active") {
        if (this.roleSelected === "tenant") {
          this.listBK2 = new Array();
          this.listBK.forEach(element => {
            if (element.role == 0) {
              this.listBK2.push(element);
            }
          });
          this.listBK = this.listBK2;
        }
        else {
          this.listBK2 = new Array();
          this.listBK.forEach(element => {
            if (element.role == 1) {
              this.listBK2.push(element);
            }
          });
          this.listBK = this.listBK2;
        }
      }
    }
    else {
      this.list = this.userService.getListUserExcept(true);
      this.listBK = this.list;
      if (this.roleSelected !== "active") {
        if (this.roleSelected === "tenant") {
          this.listBK2 = new Array();
          this.listBK.forEach(element => {
            if (element.role == 0) {
              this.listBK2.push(element);
            }
          });
          this.listBK = this.listBK2;
        }
        else {
          this.listBK2 = new Array();
          this.listBK.forEach(element => {
            if (element.role == 1) {
              this.listBK2.push(element);
            }
          });
          this.listBK = this.listBK2;
        }
      }
    }
  }

}

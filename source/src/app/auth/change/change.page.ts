import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-change',
  templateUrl: './change.page.html',
  styleUrls: ['./change.page.scss'],
})
export class ChangePage implements OnInit {
  public password: string = "";
  public passwordErr: string;
  public confirm: string = "";
  public confirmErr: string;
  public mess: string = "";

  constructor(private router: Router,
    public toastController: ToastController) { }

  ngOnInit() {
  }

  change() {
    this.passwordErr = "";
    this.confirmErr = "";
    if (this.password.length < 1) {
      this.passwordErr = "Mật khẩu trống!";
    }
    else {
      if (this.password.length < 8) {
        this.passwordErr = "Mật khẩu phải ít nhất 8 ký tự!"
      }
    }
    if (this.confirm.length < 1) {
      this.confirmErr = "Mật khẩu xác nhận trống!";
    }
    else {
      if (this.password !== this.confirm) {
        this.confirm = "";
        this.confirmErr = "Mật khẩu xác nhận không đúng!"
      }
    }
    if (this.passwordErr.length < 1 && this.confirmErr.length < 1) {
      this.mess = "Đổi mật khẩu thành công!";
      this.presentToast(this.mess);
      this.router.navigateByUrl('/login');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}

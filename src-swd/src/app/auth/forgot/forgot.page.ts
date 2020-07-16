import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  private username: string = "";
  private password: string = "";
  private phone: string = "";
  private token: string = "";

  private usernameErr: string;
  private passwordErr: string;
  private phoneErr: string;
  private tokenErr: string;
  public mess: string = "";

  constructor(private router: Router,
    public toastController: ToastController) { }

  ngOnInit() {
  }

  checkForgot() {
    this.usernameErr = "";
    this.passwordErr = "";
    this.phoneErr = "";
    this.tokenErr = "";
    if (this.password.length < 1) {
      this.passwordErr = "Mật khẩu trống!";
    }
    else {
      if (this.password.length < 8) {
        this.passwordErr = "Ít nhất 8 kí tự!";
        this.password = "";
      }
    }
    if (this.username.length < 1) {
      this.usernameErr = "Tài khoản trống!";
      this.password = "";
    }
    else {
      if (this.username !== "user") {
        this.usernameErr = "Tài khoản không đúng!";
        this.password = "";
      }
    }
    if (this.phone.toString().length < 1) {
      this.phoneErr = "Số điện thoại trống!";
    }
    else {
      if (this.phone.toString() !== "363095151") {
        this.phoneErr = "Số điện thoại không khớp!";
      }
    }
    if (this.token.length < 1) {
      this.tokenErr = "Mã xác nhận trống!";
    }
    else {
      if (this.token.toString() !== "123456") {
        this.tokenErr = "Mã xác nhận sai!";
      }
    }
    if (this.usernameErr.length < 1 &&
      this.passwordErr.length < 1 &&
      this.phoneErr.length < 1 &&
      this.tokenErr.length < 1
    ) {
      this.presentToast("Lấy lại mật khẩu thành công!");
      return this.router.navigateByUrl('/login');
    }
  }

  resend() {
    this.presentToast("Gửi lại mã xác nhận thành công!");
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}

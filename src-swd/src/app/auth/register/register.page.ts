import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  private username: string = "";
  private password: string = "";
  private fullName: string = "";
  private address: string = "";
  private phone: string = "";

  private usernameErr: string;
  private passwordErr: string;
  private fullNameErr: string;
  private addressErr: string;
  private phoneErr: string;
  public mess: string = "";

  constructor(private router: Router,
    public toastController: ToastController) { }

  ngOnInit() {
  }

  checkRegister() {
    this.usernameErr = "";
    this.passwordErr = "";
    this.fullNameErr = "";
    this.addressErr = "";
    this.phoneErr = "";

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
      if (this.username === "user") {
        this.usernameErr = "Tài khoản đã tồn tại!";
        this.password = "";
      }
    }
    if (this.fullName.length < 1) {
      this.fullNameErr = "Tên trống!";
    }
    if (this.address.length < 1) {
      this.addressErr = "Địa chỉ trống!";
    }
    if (this.phone.toString().length < 1) {
      this.phoneErr = "Số điện thoại trống!";
    }
    else {
      if (this.phone.toString().length < 10) {
        this.phoneErr = "Số điện thoại sai!";
      }
    }

    if (this.usernameErr.length < 1 &&
      this.passwordErr.length < 1 &&
      this.fullNameErr.length < 1 &&
      this.addressErr.length < 1 &&
      this.passwordErr.length < 1
    ) {
      this.presentToast("Đăng ký thành công!");
      return this.router.navigateByUrl('/login');
    }
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}

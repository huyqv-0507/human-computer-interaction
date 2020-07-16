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
  private phone: string = "";

  private usernameErr: string;
  private phoneErr: string;
  constructor(private router: Router,
    public toastController: ToastController) { }

  ngOnInit() {
  }

  checkForgot() {

  }

  send() {
    this.usernameErr = "";
    this.phoneErr = "";
    if (this.username.length < 1) {
      this.usernameErr = "Tài khoản trống!";
    }
    else {
      if (this.username !== "phuhd") {
        this.usernameErr = "Tài khoản không đúng!";
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
    if (this.usernameErr.length < 1 &&
      this.phoneErr.length < 1
    ) {
      return this.router.navigateByUrl('/token');
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

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home-popover',
  templateUrl: './home-popover.component.html',
  styleUrls: ['./home-popover.component.scss'],
})
export class HomePopoverComponent implements OnInit {
  public user: User;
  public isShow: boolean = true;
  public mess: string = "";

  constructor(private userService: UserService,
    private router: Router,
    private toastController: ToastController) {
    this.user = this.userService.getUser(sessionStorage.username);
  }

  ngOnInit() {
    this.user = this.userService.getUser(sessionStorage.username);
  }

  logout() {
    this.userService.logout();
    this.isShow = false;
    this.router.navigateByUrl('/login');
  }

  disable() {
    this.isShow = false;
    this.router.navigateByUrl('/profile');
  }

  update() {
    this.isShow = false;
    this.router.navigateByUrl('/edit');
  }

  change() {
    this.isShow = false;
    this.mess = "Mã xác thực đã gửi đến số điện thoại của bạn!";
    this.presentToast(this.mess);
    this.router.navigateByUrl('/token');
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }
}

import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-warning',
  templateUrl: './warning.page.html',
  styleUrls: ['./warning.page.scss'],
})
export class WarningPage implements OnInit {
  public content: string = "";
  public notify: boolean = false;
  public mess: string = "";
  public userID: string = "";

  constructor(public toastController: ToastController,
    private activatedRoute: ActivatedRoute) {
   
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('userID')) {
        return;
      }
      this.userID = paramMap.get('userID');;
    });
  }

  submit() {
    if (this.content === "") {
      this.notify = true;
    }
    else {
      this.mess = "Gửi cảnh báo thành công!";
      this.presentToast(this.mess);
      this.notify = false;
      this.content = "";
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

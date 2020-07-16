import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from './home-service.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PostHouseModalPage } from '../post-house-modal/post-house-modal.page';
import { PostedHouseModalPage } from '../posted-house-modal/posted-house-modal.page';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public housesTopPrice: any;
  public housesTop: any;
   listStatusTop: any;
   listStatusTopPrice: any;
  public mess: string = "";

  constructor(private homeService: HomeServiceService, 
              private router: Router,
              private modalController: ModalController,
              private toastController: ToastController) {
    this.listStatusTop = new Array();
    this.listStatusTopPrice = new Array();
    this.housesTopPrice = this.homeService.getAllHousesTopPrice();
    this.housesTop = this.homeService.getAllHousesTop();
    this.housesTop.forEach(element => {
      this.listStatusTop.push({
        houseID: element.houseID,
        status: "Lưu tin"
      })
    });
    this.housesTopPrice.forEach(element => {
      this.listStatusTopPrice.push({
        houseID: element.houseID,
        status: "Lưu tin"
      })
    });
  }

  ngOnInit() {
  }

  slideOpts = {
    spaceBetween: 3,
    slidesPerView: 1.6,
    loop: true
  }

  changeInterestStatus(index: number, type: string) {
    if (type === "topPrice") {
      if (this.listStatusTopPrice[index].status === "Lưu tin") {
        this.listStatusTopPrice[index].status = "Hủy lưu";
        this.presentToast("Đã lưu!")
      }
      else {
        this.listStatusTopPrice[index].status = "Lưu tin";
        this.presentToast("Đã hủy!")
      }
    }
    else {
      if (this.listStatusTop[index].status === "Lưu tin") {
        this.listStatusTop[index].status = "Hủy lưu";
        this.presentToast("Đã lưu!")
      }
      else {
        this.listStatusTop[index].status = "Lưu tin";
        this.presentToast("Đã hủy!")
      }
    }

  }
  async presentToast(msg: string){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  onNavGoogleMaps() {
    this.router.navigate(['google-map']);
  }

  async postHouse() {
    const modal = await this.modalController.create({
      component: PostHouseModalPage
    });
    return await modal.present();
  }
  async postedHouse() {
    const modal = await this.modalController.create({
      component: PostedHouseModalPage
    });
    return await modal.present();
  }
}

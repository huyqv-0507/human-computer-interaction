import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { GoogleMapService } from '../google-map/google-map.service';
import { HouseEntity } from '../models/house.model';
import { UserService } from '../services/user.service';
import { GoogleHousePage } from '../google-house/google-house.page';
@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.page.html',
  styleUrls: ['./modal-detail.page.scss'],
})
export class ModalDetailPage implements OnInit {
  
  @Input() houseId: string;
  host: string;
  
  public isExisted: string = "Lưu tin";
  house: HouseEntity;  
  numberPhone: string;

  constructor(private modalController: ModalController, 
              private callNumber: CallNumber,
              private googleMapService: GoogleMapService,
              private userService: UserService) { }

  ngOnInit() {
    this.house = this.googleMapService.getHouse(this.houseId);
  }

  closeModal() {
    this.modalController.dismiss();
  }
  onCall() {
    this.callNumber.callNumber("0961564432", true);
    this.numberPhone = this.userService.getUser(this.house.username).phone1;
  }
  changeInterestStatus() {
    if (this.isExisted === "Lưu tin") {
      this.isExisted = "Hủy lưu";
    }
    else {
      this.isExisted = "Lưu tin";
    }
  }
  slideOpts = {
    zoom: true,
  }
  async openMap() {
    const modal = await this.modalController.create({
      component: GoogleHousePage,
      componentProps: {
        'houseId': this.houseId,
      }
    });
    return await modal.present();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeServiceService } from 'src/app/home/home-service.service';
import { HouseEntity } from 'src/app/models/house.model';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { InterestService } from '../services/interest.service';
import { Interest } from '../models/interest.model';
import { UserService } from '../services/user.service';
import { ModalController } from '@ionic/angular';
import { GoogleHousePage } from '../google-house/google-house.page';
import { TenantService } from '../tenant/tenant.service';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.page.html',
  styleUrls: ['./house-detail.page.scss'],
})
export class HouseDetailPage implements OnInit {
  public isExisted: string = "Lưu tin";
  private interest: Interest;
  private houseId: string;
  public house: HouseEntity;
  public status: string = "/tenant";
  public searchValue = "";
  private houseTopPrice: HouseEntity;
  public host: string
  public name: string = "";
  public numberPhone: string;

  constructor(private activatedRoute: ActivatedRoute,
    private houseService: TenantService,
    private interestService: InterestService,
    private callNumber: CallNumber,
    private userService: UserService,
    private modalController: ModalController) {
      
  }

  ngOnInit() {
    if (typeof (Storage) !== "undefined") {
      sessionStorage.isActiveTab = "home";
    }

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('houseId')) {
        return;
      }
      this.houseId = paramMap.get('houseId');
      if (paramMap.has('status')) {
        this.status = "/tenant/" + paramMap.get('status');
        if (typeof (Storage) !== "undefined") {
          sessionStorage.isActiveTab = "interest";
        }
        if (paramMap.get('searchValue') !== "undefined" &&
          paramMap.get('searchValue') !== null
        ) {
          this.searchValue = paramMap.get('searchValue');
        }
      }
    });
    
    this.house = this.houseService.getHouse(this.houseId);
    this.host = this.house.username;

    this.numberPhone = this.userService.getUser(this.house.username).phone1;
    this.name = this.userService.getUser(this.house.username).fullName;

    if (typeof (sessionStorage.username) !== "undefined") {
      this.interest = this.interestService.getInterest(sessionStorage.username);
      if (this.interestService.checkExist(this.houseId, this.interest)) {
        this.isExisted = "Hủy Lưu";
      }
      else {
        this.isExisted = "Lưu tin";
      }
    }
  }


  onCall() {
    this.callNumber.callNumber(this.numberPhone, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  slideOpts = {
    zoom: true,
  }

  changeInterestStatus() {
    if (this.isExisted === "Lưu tin") {
      this.isExisted = "Hủy lưu";
    }
    else {
      this.isExisted = "Lưu tin";
    }
  }

  closeModal() {
    this.modalController.dismiss();
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
//install CallNumber and Cordova
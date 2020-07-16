import { Component, OnInit, ErrorHandler } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { GoogleMapService } from '../google-map/google-map.service';
import { HouseEntity } from '../models/house.model';
import { ActionSheetController } from '@ionic/angular';
import { RefuseModalPage } from '../refuse-modal/refuse-modal.page';
import { ViewpostedModalPage } from '../viewposted-modal/viewposted-modal.page';
import { ViewpostedsuccessModalPage } from '../viewpostedsuccess-modal/viewpostedsuccess-modal.page';

import { AlertController } from '@ionic/angular';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { HomePopoverComponent } from '../components/home-popover/home-popover.component';

@Component({
  selector: 'app-posted-house-modal',
  templateUrl: './posted-house-modal.page.html',
  styleUrls: ['./posted-house-modal.page.scss'],
})
export class PostedHouseModalPage implements OnInit {
  deletePosted: boolean = true;
  deleteePosted: boolean = true;
  deleteeePosted: boolean = true;
  houseList: HouseEntity[];
  public notUser: boolean = true;
  public postSegment: string = "Tất cả"
  public user: User;

  constructor(private modalController: ModalController,
    private googleMapService: GoogleMapService,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private popoverController: PopoverController,
    private userService: UserService, ) {
    if (typeof (sessionStorage.username) === 'undefined') {
      this.notUser = true;
    }
    else {
      this.notUser = false;
      this.user = this.userService.getUser(sessionStorage.username);
    }
  }

  ngOnInit() {
    this.houseList = this.googleMapService.getAllHouse();
  }

  closeModal() {
    this.modalController.dismiss();
  }

  segmentChange(ev: any) {

  }
  async onOptsPosted() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Tuỳ chọn',
      buttons: [{
        text: 'Xem',
        role: 'detail',
        icon: 'eye',
        handler: () => {
          this.onViewPosted();
        }
      },
      {
        text: 'Xoá',
        role: 'delete',
        icon: 'trash',
        handler: () => {
          this.deleteAlert();
        }
      },]
    });
    await actionSheet.present();
  }

  async onOptRefuse() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Tuỳ chọn',
      buttons: [{
        text: 'Xem lý do',
        role: 'detail',
        icon: 'eye',
        handler: () => {
          this.onRefuse();
        }
      },
      {
        text: 'Xoá',
        role: 'delete',
        icon: 'trash',
        handler: () => {
          this.deleteAlert();
        }
      }]
    });
    await actionSheet.present();
  }

  async onRefuse() {
    const modal = await this.modalController.create({
      component: RefuseModalPage
    });
    modal.present();
  }

  async onViewPosted() {
    const modal = await this.modalController.create({
      component: ViewpostedModalPage
    });
    modal.present();
  }

  async onOptPostedSuccess() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Tuỳ chọn',
      buttons: [{
        text: 'Xem',
        role: 'detail',
        icon: 'eye',
        handler: () => {
          this.onViewPostedSuccess();
        }
      },
      {
        text: 'Xoá',
        role: 'delete',
        icon: 'trash',
        handler: () => {
          this.deleteAlert();
        }
      },]
    });
    await actionSheet.present();
  }

  async onViewPostedSuccess() {
    const modal = await this.modalController.create({
      component: ViewpostedsuccessModalPage
    });
    modal.present();
  }

  async deleteAlert() {
    const alert = await this.alertController.create({
      header: 'Thông báo',
      message: 'Bạn có muốn xoá tin',
      buttons: [
        {
          text: 'Xoá',
          handler: () => {
            this.deleteePosted = false;
          }
        },
        {
          text: 'Thoát',
          handler: () => {

          }

        }
      ]
    });

    await alert.present();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: HomePopoverComponent,
      event: ev
    });
    return await popover.present();
  }
}

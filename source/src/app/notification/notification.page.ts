import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { ModalController, PopoverController } from '@ionic/angular';
import { RefuseModalPage } from '../refuse-modal/refuse-modal.page';
import { ViewpostedsuccessModalPage } from '../viewpostedsuccess-modal/viewpostedsuccess-modal.page';
import { HomePopoverComponent } from '../components/home-popover/home-popover.component';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { PostWarningModalPage } from '../post-warning-modal/post-warning-modal.page';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  public listNotification: any;
  public isNotYet: Boolean = true;
  public notUser: boolean = true;
  public user: User;

  constructor(private notificationService: NotificationService,
    private modalController: ModalController,
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
  }

  async openPostSuccess() {
    const modal = await this.modalController.create({
      component: ViewpostedsuccessModalPage
    });
    await modal.present();
  }

  async openPostRefuse() {
    const modal = await this.modalController.create({
      component: RefuseModalPage
    });
    await modal.present();
  }
  async openPostWarning() {
    const modal = await this.modalController.create({
      component: PostWarningModalPage
    });
    await modal.present();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: HomePopoverComponent,
      event: ev
    });
    return await popover.present();
  }

}

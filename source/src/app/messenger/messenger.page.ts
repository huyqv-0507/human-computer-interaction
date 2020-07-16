import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDetailPage } from '../modal-detail/modal-detail.page';
import { ModalController } from '@ionic/angular';
import { UserService } from '../services/user.service';

//npm install ngx-autosize

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.page.html',
  styleUrls: ['./messenger.page.scss'],
})
export class MessengerPage implements OnInit {
  public listMessage: any;
  public currentUser: string = "";
  public newMsg = "";
  public userIDTo: string;
  public tmp: string;
  public nameTo: string;

  constructor(private notificationService: NotificationService,
    private activatedRouter: ActivatedRoute,
    private modalController: ModalController,
    private router: Router,
    private userService: UserService) {
    this.currentUser = sessionStorage.username;
  }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) {
        return;
      }
      this.listMessage = this.notificationService.getListMessage(paramMap.get('id'));
      this.userIDTo = paramMap.get('id');
      this.tmp = paramMap.get('id');
      this.nameTo = this.userService.getUser(this.userIDTo).fullName;
    });
  }

  sendMessage() {
    this.listMessage.push({
      userIDTo: this.userIDTo,
      message: this.newMsg,
      from: this.currentUser,
      status: false,
      img: "",
      userIDFrom: sessionStorage.username,
      createAt: 1583691766243,
    });
    this.newMsg = "";
  }

  async openModal() {
    if (this.tmp.match('user2') || this.tmp.match('user1')) {
      this.router.navigateByUrl('/notification');
    }
    else {
      const modal = await this.modalController.create({
        component: ModalDetailPage,
        componentProps: {
          'houseId': 'map2'
        }
      });
      return await modal.present();
    }
  }
}

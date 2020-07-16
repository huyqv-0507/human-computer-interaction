import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-tenant-notification-modal',
  templateUrl: './tenant-notification-modal.page.html',
  styleUrls: ['./tenant-notification-modal.page.scss'],
})
export class TenantNotificationModalPage implements OnInit {
  public isNotYet: Boolean = true;
  
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  closeNotification() {
    this.modalController.dismiss();
  }
  
}

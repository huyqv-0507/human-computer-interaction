import { Injectable } from '@angular/core';
import { NotificationList } from '../models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationList: NotificationList;
  private listResult: any;
  private listNotification: any;

  constructor() {
    this.notificationList = new NotificationList();
    this.listNotification = this.notificationList.getListNotification();
  }

  getListNotificationByUserID(userIDTo: string) {
    this.listResult = new Array();
    this.listNotification.forEach(element => {
      if (element.userIDTo === userIDTo) {
        this.listResult.push(element);
      }
    });
    return [...this.listResult];
  }

  getListMessage(userIDFrom: string) {
    this.listResult = new Array();
    this.listNotification.forEach(element => {
      if (element.userIDTo === userIDFrom || element.userIDFrom === userIDFrom) {
        this.listResult.push(element);
      }
    });
    return [...this.listResult];
  }
}

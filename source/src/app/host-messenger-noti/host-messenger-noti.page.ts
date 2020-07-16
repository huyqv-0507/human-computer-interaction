import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-messenger-noti',
  templateUrl: './host-messenger-noti.page.html',
  styleUrls: ['./host-messenger-noti.page.scss'],
})
export class HostMessengerNotiPage implements OnInit {
  public isNotYet: Boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

}

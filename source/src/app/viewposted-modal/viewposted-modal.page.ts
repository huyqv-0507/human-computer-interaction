import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-viewposted-modal',
  templateUrl: './viewposted-modal.page.html',
  styleUrls: ['./viewposted-modal.page.scss'],
})
export class ViewpostedModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  closeViewPosted() {
    this.modalController.dismiss();
  }
}

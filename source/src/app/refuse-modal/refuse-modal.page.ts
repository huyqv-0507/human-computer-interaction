import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-refuse-modal',
  templateUrl: './refuse-modal.page.html',
  styleUrls: ['./refuse-modal.page.scss'],
})
export class RefuseModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async closeRefuse() {
    this.modalController.dismiss();
  }
}

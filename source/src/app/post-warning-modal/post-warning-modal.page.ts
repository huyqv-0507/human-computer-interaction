import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-post-warning-modal',
  templateUrl: './post-warning-modal.page.html',
  styleUrls: ['./post-warning-modal.page.scss'],
})
export class PostWarningModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async closeWarning() {
    this.modalController.dismiss();
  }
}

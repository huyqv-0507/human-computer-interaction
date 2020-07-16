import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-viewpostedsuccess-modal',
  templateUrl: './viewpostedsuccess-modal.page.html',
  styleUrls: ['./viewpostedsuccess-modal.page.scss'],
})
export class ViewpostedsuccessModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  closeViewPostedSuccess() {
    this.modalController.dismiss();
  }
   
  
}

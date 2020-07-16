import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-post-house-modal',
  templateUrl: './post-house-modal.page.html',
  styleUrls: ['./post-house-modal.page.scss'],
})
export class PostHouseModalPage implements OnInit {

  district: string[];
  subdistrict: string[];
  street: string[];
  chooseImg: any;
  imgArr = [];
  @Input() category: string;

  constructor(private modalController: ModalController,
              private alertController: AlertController,
              private toastController: ToastController,
              private camera: Camera,
              private imagePicker: ImagePicker) { }


  ngOnInit() {
  }
  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
  choosePhoto() {
    const options: ImagePickerOptions = {
      title: 'Chọn ảnh',
      quality: 25,
      outputType: 1,
      maximumImagesCount: 5,
    }
    this.imagePicker.getPictures(options).then((results) => {
      for(var i = 0; i < results.length; i++){
        this.imgArr.push('data:image/jpeg;base64,' + results[i]);
      }
    }, (err) => {
      alert('Fail' + err);
     });
  }
  continueModal() {
    
  }
  async showToast() {
    const toast = await this.toastController.create({
      message: 'Đang chờ xét duyệt',
      position: 'bottom',
      duration: 4000
    });
    toast.present();
  }

  closeModal() {
    this.modalController.dismiss();
  }
  onPost() {
    
  }
  async exitPost() {
    const alert = await this.alertController.create({
      header: 'Thông báo',
      message: 'Bạn có muốn tiếp tục đăng nhà?',
      buttons: [
        {
          text: 'Huỷ đăng',
          role: 'exit',
          handler: () => {
            this.closeModal();
          }
        },
        {
          text: 'Tiếp tục'
        }
      ]
    });

    await alert.present();
  }
}

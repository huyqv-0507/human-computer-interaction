import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GoogleMap, GoogleMaps, GoogleMapsMapTypeId, MarkerIcon, PolylineOptions, ILatLng } from '@ionic-native/google-maps';
declare var google;
@Component({
  selector: 'app-google-house',
  templateUrl: './google-house.page.html',
  styleUrls: ['./google-house.page.scss'],
})
export class GoogleHousePage implements OnInit {
  @Input() houseId: string;
  map: GoogleMap
  current = {
    lat: 10.8069096,
    lng: 106.7867085
  }
  jamila = {
    lat: 10.794846,
    lng: 106.783668
  }


  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.initMap();

  }

  initMap() {
    this.map = GoogleMaps.create('map', {
      camera: {
        duration: 3000,
        target: this.jamila,
        zoom: 14
      },
      mapType: GoogleMapsMapTypeId.NORMAL
    });

    let icon: MarkerIcon = {
      url: '../assets/imgs/user.svg',
      size: {
        width: 50,
        height: 50
      }
    }
    var current = this.map.addMarkerSync({
      title: 'Vị trí của bạn',
      icon: icon,
      position: this.current
    }).showInfoWindow();
    let iconn: MarkerIcon = {
      url: '../assets/icon/mappointer.png',
      size: {
        width: 40,
        height: 40
      }
    }
    var marker0 = this.map.addMarkerSync({
      position: this.jamila,
      icon: iconn,
      draggable: false,
      disableAutoPan: true,
      title: '2,6km'
    }).showInfoWindow();
    let MARKER_POINT: ILatLng[] = [
      { lat: 10.807507, lng: 106.787548 },
      { lat: 10.807904, lng: 106.786614 },
      { lat: 10.807975, lng: 106.786177 },
      { lat: 10.807969, lng: 106.785902 },
      { lat: 10.807938, lng: 106.785634 },
      { lat: 10.807736, lng: 106.785118 },
      { lat: 10.807677, lng: 106.785063 },
      { lat: 10.806587, lng: 106.783019 },
      { lat: 10.805559, lng: 106.781330 },
      { lat: 10.805473, lng: 106.781262 },
      { lat: 10.804268, lng: 106.779352 },
      { lat: 10.804010, lng: 106.778827 },
      { lat: 10.803828, lng: 106.778350 },
      { lat: 10.797305, lng: 106.780273 },
      { lat: 10.796606, lng: 106.780440 },
      { lat: 10.796265, lng: 106.780542 },
      { lat: 10.795717, lng: 106.780670 },
      { lat: 10.795759, lng: 106.780857 },
      { lat: 10.795814, lng: 106.782976 },
      { lat: 10.795700, lng: 106.782963 },
      { lat: 10.795625, lng: 106.782971 },
      { lat: 10.795548, lng: 106.782986 },
      { lat: 10.795459, lng: 106.783029 },
      { lat: 10.794947, lng: 106.783450 },
      this.jamila
    ]
    let options: PolylineOptions = {
      points: MARKER_POINT,
      color: '#4287f5',
      width: 5,
      geodesic: true,

    };
    this.map.addPolylineSync(options);
  }
  closeModal() {
    this.modalController.dismiss();
  }
}

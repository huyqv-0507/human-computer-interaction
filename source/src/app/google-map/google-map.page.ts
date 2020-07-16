import { Component, OnInit, Injectable } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions, MarkerIcon, Marker, Polyline, ILatLng, Polygon, PolylineOptions,
} from '@ionic-native/google-maps';
import { GoogleMapService } from './google-map.service';
import { HouseEntity } from '../models/house.model';
import { ModalController } from '@ionic/angular';
import { ModalDetailPage } from '../modal-detail/modal-detail.page';
declare var google;


@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.page.html',
  styleUrls: ['./google-map.page.scss'],
})
export class GoogleMapPage {
  
  map: GoogleMap;
  housesList: HouseEntity[];
  housesListLatLng: any[];
  isShowDetail: boolean = false;


  imgpopup: string;
  titlepopup: string;
  pricepopup: string;
  addresspopup: string;
  distancepopup: string;
  currentLocation: any;
  houseId: string;

  current = {
    lat: 10.8069096,
    lng: 106.7867085
  }
  jamila = {
    lat: 10.794846,
    lng: 106.783668
  }
  theEastern = {
    lat: 10.8054234,
    lng: 106.7944858
  }
  sky9 = {
    lat: 10.8043719,
    lng: 106.788914
  }
  greenBuilding = {
    lat: 10.8275594,
    lng: 106.7616915
  }
  flora = {
    lat: 10.8073563,
    lng: 106.7756696
  }
  constructor(private googleService: GoogleMapService,
    private modalController: ModalController) {
    this.initMap();
  }

  initMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: this.current,
        zoom: 13
      }
    };

    this.map = GoogleMaps.create('map', mapOptions);

    let icon: MarkerIcon = {
      url: '../assets/imgs/user.svg',
      size: {
        width: 50,
        height: 50
      }
    }

    this.addMarkerToMap();
    var current = this.map.addMarkerSync({
      title: 'Vị trí của bạn',
      icon: icon,
      position: this.current
    }).showInfoWindow();
    this.currentLocation = current;
  }
  addMarkerToMap() {
    this.housesList = this.googleService.houseMap;
    let icon: MarkerIcon = {
      url: '../assets/icon/mappointer.png',
      size: {
        width: 40,
        height: 40
      }
    }
    var marker0 = this.map.addMarkerSync({
      position: this.jamila,
      icon: icon,
      draggable: false,
      disableAutoPan: true
    });
    var marker1 = this.map.addMarkerSync({
      position: this.theEastern,
      icon: icon,
      draggable: false,
      disableAutoPan: true
    });
    var marker2 = this.map.addMarkerSync({
      position: this.sky9,
      icon: icon,
      draggable: false,
      disableAutoPan: true
    });
    var marker3 = this.map.addMarkerSync({
      position: this.greenBuilding,
      icon: icon,
      draggable: false,
      disableAutoPan: true
    });
    var marker4 = this.map.addMarkerSync({
      position: this.flora,
      icon: icon,
      draggable: false,
      disableAutoPan: true
    });


    this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe(() => {
      this.isShowDetail = false;
      marker0.hideInfoWindow();
      marker1.hideInfoWindow();
      marker2.hideInfoWindow();
      marker3.hideInfoWindow();
      marker4.hideInfoWindow();
      
    });
    marker0.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      this.isShowDetail = true;
      marker0.showInfoWindow();
      this.distancepopup = '2.6km';
      this.houseId = this.housesList[0].id;
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
    });
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: ModalDetailPage,
      componentProps: {
        'houseId': this.houseId,
      }
    });
    return await modal.present();
  }
}






/*
  ionic cordova plugin add cordova-plugin-googlemaps
  npm install --save @ionic-native/core@latest @ionic-native/google-maps@latest
  lat: 10.8043772,
  lng: 106.788914
 */

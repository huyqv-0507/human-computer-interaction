import { Injectable } from '@angular/core';
import { HouseList, HouseEntity } from '../models/house.model';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  public house: HouseEntity;
  private check: boolean;
  public listHouse: any;

  housesTopPrice: any;
  houseList = new HouseList();
  housesTop: any;

  constructor() {
    this.housesTopPrice = this.houseList.getListHouseTopPrice();
    this.housesTop = this.houseList.getListHousesTop();
  }

  getAllHousesTopPrice() {
    return [...this.housesTopPrice];
  }

  getAllHousesTop() {
    return [...this.housesTop];
  }
  // getHouseTop(houseId: string) {
  //   return {
  //     ...this.housesTop.find(house => {
  //       return house.id === houseId;
  //     })
  //   }
  // }
  getHouse(houseId: string) {
    this.housesTop = this.houseList.getListHousesTop();
    this.housesTopPrice = this.houseList.getListHouseTopPrice();
    this.check = false;
    this.housesTop.forEach(element => {
      if (element.id === houseId) {
        this.check = true;
        this.house = element;
      }
    });

    if (!this.check) {
      this.housesTopPrice.forEach(element => {
        if (element.id === houseId) {
          this.house = element;
        }
      });
    }
    return this.house;
  }

  findHouses(value: string) {
    this.listHouse = new Array();
    this.findHousesByPrice(value);
    this.findHousesByAddress(value);
    this.findHousesByArea(value);
    this.findHousesByDesc(value);
    return [...this.listHouse];
  }

  findHousesByDesc(value: string) {
    this.housesTop.forEach(element => {
      if (element.description.includes(value)) {
        if (this.listHouse.length > 0) {
          this.listHouse.forEach(e => {
            if (e.id !== element.id) {
              this.listHouse.push(element);
            }
          });
        }
        else {
          this.listHouse.push(element);
        }
      }
    });
    this.housesTopPrice.forEach(element => {
      if (element.description.includes(value)) {
        if (this.listHouse.length > 0) {
          this.listHouse.forEach(e => {
            if (e.id !== element.id) {
              this.listHouse.push(element);
            }
          });
        }
        else {
          this.listHouse.push(element);
        }
      }
    });
  }

  findHousesByPrice(value: string) {
    this.housesTop.forEach(element => {
      if (element.price.includes(value)) {
        if (this.listHouse.length > 0) {
          this.listHouse.forEach(e => {
            if (e.id !== element.id) {
              this.listHouse.push(element);
            }
          });
        }
        else {
          this.listHouse.push(element);
        }
      }
    });
    this.housesTopPrice.forEach(element => {
      if (element.price.includes(value)) {
        if (this.listHouse.length > 0) {
          this.listHouse.forEach(e => {
            if (e.id !== element.id) {
              this.listHouse.push(element);
            }
          });
        }
        else {
          this.listHouse.push(element);
        }
      }
    });
  }

  findHousesByAddress(value: string) {
    this.housesTop.forEach(element => {
      if (element.addressDetail.includes(value)) {
        if (this.listHouse.length > 0) {
          this.listHouse.forEach(e => {
            if (e.id !== element.id) {
              this.listHouse.push(element);
            }
          });
        }
        else {
          this.listHouse.push(element);
        }
      }
    });
    this.housesTopPrice.forEach(element => {
      if (element.addressDetail.includes(value)) {
        if (this.listHouse.length > 0) {
          this.listHouse.forEach(e => {
            if (e.id !== element.id) {
              this.listHouse.push(element);
            }
          });
        }
        else {
          this.listHouse.push(element);
        }
      }
    });
  }

  findHousesByArea(value: string) {
    this.housesTop.forEach(element => {
      if (element.area.includes(value)) {
        if (this.listHouse.length > 0) {
          this.listHouse.forEach(e => {
            if (e.id !== element.id) {
              this.listHouse.push(element);
            }
          });
        }
        else {
          this.listHouse.push(element);
        }
      }
    });
    this.housesTopPrice.forEach(element => {
      if (element.area.includes(value)) {
        if (this.listHouse.length > 0) {
          this.listHouse.forEach(e => {
            if (e.id !== element.id) {
              this.listHouse.push(element);
            }
          });
        }
        else {
          this.listHouse.push(element);
        }
      }
    });
  }
}

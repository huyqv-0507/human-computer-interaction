import { Injectable } from '@angular/core';
import { HouseEntity, HouseList } from '../models/house.model';

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  public house: HouseEntity;
  private check: boolean;
  public listHouse: any;

  housesTopPrice: any;
  houseList = new HouseList();
  housesTop: any;
  listApartment: any;
  listMotel: any;
  listOffice: any;
  listHouses: any;

  constructor() {
    this.housesTopPrice = this.houseList.getListHouseTopPrice();
    this.housesTop = this.houseList.getListHousesTop();
    this.listApartment = this.houseList.getListApartment();
    this.listMotel = this.houseList.getListMotel();
    this.listOffice = this.houseList.getListOffice();
    this.listHouses = this.houseList.getListHouses();
  }

  getAllHousesTopPrice() {
    return [...this.housesTopPrice];
  }

  getAllHousesTop() {
    return [...this.housesTop];
  }

  getlistApartment() {
    return [...this.listApartment];
  }

  getlistMotel() {
    return [...this.listMotel];
  }

  getlistOffice() {
    return [...this.listOffice];
  }

  getlistHouses() {
    return [...this.listHouses];
  }

  // getHouseTop(houseId: string) {
  //   return {
  //     ...this.housesTop.find(house => {
  //       return house.id === houseId;
  //     })
  //   }
  // }
  getHouse(houseId: string) {
    this.check = false;
    this.housesTop.forEach(element => {
      if (element.id === houseId) {
        this.check = true;
        this.house = element;
        return this.house;
      }
    });

    if (!this.check) {
      this.housesTopPrice.forEach(element => {
        if (element.id === houseId) {
          this.house = element;
          this.check = true;
          return this.house;
        }
      });
    }

    if (!this.check) {
      this.listApartment.forEach(element => {
        if (element.id === houseId) {
          this.house = element;
          this.check = true;
          return this.house;
        }
      });
    }

    if (!this.check) {
      this.listMotel.forEach(element => {
        if (element.id === houseId) {
          this.house = element;
          this.check = true;
          return this.house;
        }
      });
    }

    if (!this.check) {
      this.listOffice.forEach(element => {
        if (element.id === houseId) {
          this.house = element;
          this.check = true;
          return this.house;
        }
      });
    }

    if (!this.check) {
      this.listHouses.forEach(element => {
        if (element.id === houseId) {
          this.house = element;
          return this.house;
        }
      });
    }
    return this.house;
  }

  filterByPrice(priceFrom: number, priceTo: number, list: HouseEntity[]) {
    let array = new Array();
    list.forEach(element => {
      if (parseInt(element.priceNumber.toString()) >= parseInt(priceFrom.toString())
        && parseInt(element.priceNumber.toString()) <= parseInt(priceTo.toString())) {
        array.push(element);
      }
    });
    return array;
  }

  filterByArea(areaFrom: number, areaTo: number, list: any) {
    let array = new Array();
    list.forEach(element => {
      if (parseInt(element.areaNumber.toString()) >= parseInt(areaFrom.toString())
        && parseInt(element.areaNumber.toString()) <= parseInt(areaTo.toString())) {
        array.push(element);
      }
    });
    return array;
  }

  filterByNearMe(nearMe: number, list: any) {
    let array = new Array();
    list.forEach(element => {
      if (parseInt(element.nearMe.toString()) <= parseInt(nearMe.toString())) {
        array.push(element);
      }
    });
    return array;
  }

  filterByDistric(area: string, list: any) {
    let array = new Array();
    if (area === "Tất cả") {
      array = list;
    }
    else {
      list.forEach(element => {
        if (element.addressDetail.includes(area)) {
          array.push(element);
        }
      });
    }
    return array;
  }

  filterHouses(type: string, priceFrom: number, priceTo: number, areaFrom: number,
    areaTo: number, nearMe: number, area: string) {
    // this.listApartment = this.houseList.getListApartment();
    // this.listMotel = this.houseList.getListMotel();
    // this.listOffice = this.houseList.getListOffice();
    // this.listHouses = this.houseList.getListHouses();
    this.listHouse = new Array();
    if (type === "Chung cư") {
      if (priceTo != 0 && areaTo != 0 && nearMe != 0) {
        this.listHouse = this.filterByPrice(priceFrom, priceTo, this.listApartment);
        this.listHouse = this.filterByArea(areaFrom, areaTo, this.listHouse);
        this.listHouse = this.filterByNearMe(nearMe, this.listHouse);
        this.listHouse = this.filterByDistric(area, this.listHouse);
      }
      else {
        if (priceTo == 0 && areaTo == 0 && nearMe == 0) {
          this.listHouse = this.listApartment;
          this.listHouse = this.filterByDistric(area, this.listHouse);
        }
        else {
          if (priceTo != 0 && areaTo != 0) {
            this.listHouse = this.filterByPrice(priceFrom, priceTo, this.listApartment);
            this.listHouse = this.filterByArea(areaFrom, areaTo, this.listHouse);
            this.listHouse = this.filterByDistric(area, this.listHouse);
          }
          else {
            if (priceTo != 0 && nearMe != 0) {
              this.listHouse = this.filterByPrice(priceFrom, priceTo, this.listApartment);
              this.listHouse = this.filterByNearMe(nearMe, this.listHouse);
              this.listHouse = this.filterByDistric(area, this.listHouse);
            }
            else {
              if (areaTo != 0 && nearMe != 0) {
                this.listHouse = this.filterByArea(areaFrom, areaTo, this.listApartment);
                this.listHouse = this.filterByNearMe(nearMe, this.listHouse);
                this.listHouse = this.filterByDistric(area, this.listHouse);
              }
              else {
                if (areaTo != 0) {
                  this.listHouse = this.filterByArea(areaFrom, areaTo, this.listApartment);
                  this.listHouse = this.filterByDistric(area, this.listHouse);
                }
                else {
                  if (nearMe != 0) {
                    this.listHouse = this.filterByNearMe(nearMe, this.listApartment);
                    this.listHouse = this.filterByDistric(area, this.listHouse);
                  }
                  else {
                    if (priceTo != 0) {
                      this.listHouse = this.filterByPrice(priceFrom, priceTo, this.listApartment);
                      this.listHouse = this.filterByDistric(area, this.listHouse);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    else {
      if (type === "Nhà trọ") {
        if (priceTo != 0 && areaTo != 0 && nearMe != 0) {
          this.listHouse = this.filterByPrice(priceFrom, priceTo, this.listMotel);
          this.listHouse = this.filterByArea(areaFrom, areaTo, this.listHouse);
          this.listHouse = this.filterByNearMe(nearMe, this.listHouse);
          this.listHouse = this.filterByDistric(area, this.listHouse);
        }
        else {
          if (priceTo == 0 && areaTo == 0 && nearMe == 0) {
            this.listHouse = this.listMotel;
            this.listHouse = this.filterByDistric(area, this.listHouse);
          }
          else {
            if (priceTo != 0 && areaTo != 0) {
              this.listHouse = this.filterByPrice(priceFrom, priceTo, this.listMotel);
              this.listHouse = this.filterByArea(areaFrom, areaTo, this.listHouse);
              this.listHouse = this.filterByDistric(area, this.listHouse);
            }
            else {
              if (priceTo != 0 && nearMe != 0) {
                this.listHouse = this.filterByPrice(priceFrom, priceTo, this.listMotel);
                this.listHouse = this.filterByNearMe(nearMe, this.listHouse);
                this.listHouse = this.filterByDistric(area, this.listHouse);
              }
              else {
                if (areaTo != 0 && nearMe != 0) {
                  this.listHouse = this.filterByArea(areaFrom, areaTo, this.listMotel);
                  this.listHouse = this.filterByNearMe(nearMe, this.listHouse);
                  this.listHouse = this.filterByDistric(area, this.listHouse);
                }
                else {
                  if (areaTo != 0) {
                    this.listHouse = this.filterByArea(areaFrom, areaTo, this.listMotel);
                    this.listHouse = this.filterByDistric(area, this.listHouse);
                  }
                  else {
                    if (nearMe != 0) {
                      this.listHouse = this.filterByNearMe(nearMe, this.listMotel);
                      this.listHouse = this.filterByDistric(area, this.listHouse);
                    }
                    else {
                      if (priceTo != 0) {
                        this.listHouse = this.filterByPrice(priceFrom, priceTo, this.listMotel);
                        this.listHouse = this.filterByDistric(area, this.listHouse);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      else {
        if (type === "Văn phòng") {
          if (priceTo != 0 && areaTo != 0 && nearMe != 0) {
            this.listHouse = this.filterByPrice(priceFrom, priceTo, this.listOffice);
            this.listHouse = this.filterByArea(areaFrom, areaTo, this.listHouse);
            this.listHouse = this.filterByNearMe(nearMe, this.listHouse);
            this.listHouse = this.filterByDistric(area, this.listHouse);
          }
          else {
            if (priceTo == 0 && areaTo == 0 && nearMe == 0) {
              this.listHouse = this.listOffice;
              this.listHouse = this.filterByDistric(area, this.listHouse);
            }
            else {
              if (priceTo != 0 && areaTo != 0) {
                this.listHouse = this.filterByPrice(priceFrom, priceTo, this.listOffice);
                this.listHouse = this.filterByArea(areaFrom, areaTo, this.listHouse);
                this.listHouse = this.filterByDistric(area, this.listHouse);
              }
              else {
                if (priceTo != 0 && nearMe != 0) {
                  this.listHouse = this.filterByPrice(priceFrom, priceTo, this.listOffice);
                  this.listHouse = this.filterByNearMe(nearMe, this.listHouse);
                  this.listHouse = this.filterByDistric(area, this.listHouse);
                }
                else {
                  if (areaTo != 0 && nearMe != 0) {
                    this.listHouse = this.filterByArea(areaFrom, areaTo, this.listOffice);
                    this.listHouse = this.filterByNearMe(nearMe, this.listHouse);
                    this.listHouse = this.filterByDistric(area, this.listHouse);
                  }
                  else {
                    if (areaTo != 0) {
                      this.listHouse = this.filterByArea(areaFrom, areaTo, this.listOffice);
                      this.listHouse = this.filterByDistric(area, this.listHouse);
                    }
                    else {
                      if (nearMe != 0) {
                        this.listHouse = this.filterByNearMe(nearMe, this.listOffice);
                        this.listHouse = this.filterByDistric(area, this.listHouse);
                      }
                      else {
                        if (priceTo != 0) {
                          this.listHouse = this.filterByPrice(priceFrom, priceTo, this.listOffice);
                          this.listHouse = this.filterByDistric(area, this.listHouse);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        else {
          if (type === "Nhà nguyên căn") {
            if (priceTo != 0 && areaTo != 0 && nearMe != 0) {
              this.listHouse = this.filterByPrice(priceFrom, priceTo, this.listHouses);
              this.listHouse = this.filterByArea(areaFrom, areaTo, this.listHouse);
              this.listHouse = this.filterByNearMe(nearMe, this.listHouse);
              this.listHouse = this.filterByDistric(area, this.listHouse);
            }
            else {
              if (priceTo == 0 && areaTo == 0 && nearMe == 0) {
                this.listHouse = this.listHouses;
                this.listHouse = this.filterByDistric(area, this.listHouse);
              }
              else {
                if (priceTo != 0 && areaTo != 0) {
                  this.listHouse = this.filterByPrice(priceFrom, priceTo, this.listHouses);
                  this.listHouse = this.filterByArea(areaFrom, areaTo, this.listHouse);
                  this.listHouse = this.filterByDistric(area, this.listHouse);
                }
                else {
                  if (priceTo != 0 && nearMe != 0) {
                    this.listHouse = this.filterByPrice(priceFrom, priceTo, this.listHouses);
                    this.listHouse = this.filterByNearMe(nearMe, this.listHouse);
                    this.listHouse = this.filterByDistric(area, this.listHouse);
                  }
                  else {
                    if (areaTo != 0 && nearMe != 0) {
                      this.listHouse = this.filterByArea(areaFrom, areaTo, this.listHouses);
                      this.listHouse = this.filterByNearMe(nearMe, this.listHouse);
                      this.listHouse = this.filterByDistric(area, this.listHouse);
                    }
                    else {
                      if (areaTo != 0) {
                        this.listHouse = this.filterByArea(areaFrom, areaTo, this.listHouses);
                        this.listHouse = this.filterByDistric(area, this.listHouse);
                      }
                      else {
                        if (nearMe != 0) {
                          this.listHouse = this.filterByNearMe(nearMe, this.listHouses);
                          this.listHouse = this.filterByDistric(area, this.listHouse);
                        }
                        else {
                          if (priceTo != 0) {
                            this.listHouse = this.filterByPrice(priceFrom, priceTo, this.listHouses);
                            this.listHouse = this.filterByDistric(area, this.listHouse);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return this.listHouse;
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

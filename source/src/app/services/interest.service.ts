import { Injectable } from '@angular/core';
import { InterestList, Interest } from '../models/interest.model';
import { HouseEntity } from '../models/house.model';
import { HomeServiceService } from '../home/home-service.service';

@Injectable({
  providedIn: 'root'
})
export class InterestService {
  public listInterest: Interest[];
  public interest: Interest;
  public interestList: InterestList;
  public listHouse: HouseEntity[];
  public result: boolean;

  constructor(private homeService: HomeServiceService) {
    this.interestList = new InterestList();
    this.listInterest = this.interestList.getListInterest();
  }

  public getInterest(userID: string) {
    return {
      ...this.listInterest.find(interest => {
        return interest.userID === userID;
      })
    }
  }

  public getListHouse(interest: Interest) {
    this.listHouse = new Array;
    interest.listHouse.forEach(element => {
      this.listHouse.push(this.homeService.getHouse(element.id));
    });
    return [...this.listHouse];
  }

  public checkExist(houseID: string, interest: Interest) {
    this.result = false;
    interest.listHouse.forEach(element => {
      if (element.id === houseID) {
        this.result = true;
      }
    });
    return this.result;
  }
}

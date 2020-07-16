import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TenantService } from '../tenant/tenant.service';
import { ToastController, AlertController } from '@ionic/angular';
import { HouseEntity } from '../models/house.model';
import { Area, AreaList } from '../models/area.model';
import { PriceList, Price } from '../models/price.model';
import { Acreage, AcreageList } from '../models/acreage.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public priceLabel: string = "Chọn khoảng giá";
  public areaLabel: string = "Diện tích tổng";
  public nearLabel: string = "Gần đây";
  public type: string = "";
  public listStatusTop: any;
  public list: HouseEntity[];
  public priceFrom: number = 0;
  public areaFrom: number = 0;
  public priceTo: number = 0;
  public areaTo: number = 0;
  public nearMe: number = 0;
  public listArea: Area[];
  public areaSelected: string = "Tất cả";
  private listPrice: Price[];
  private priceList: PriceList;
  private listAcreage: Acreage[];
  private acreageList: AcreageList;

  constructor(private activatedRoute: ActivatedRoute,
    private houseService: TenantService,
    private toastController: ToastController,
    private alertCtrl: AlertController,
  ) {
    let areaList: AreaList = new AreaList();
    this.listArea = areaList.getList();
    this.priceList = new PriceList();
    this.listPrice = this.priceList.getList();
    this.acreageList = new AcreageList();
    this.listAcreage = this.acreageList.getList();
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('type')) {
        return;
      }
      this.type = paramMap.get('type');
    });

    this.listStatusTop = new Array();
    if (this.type === "Chung cư") {
      this.list = this.houseService.getlistApartment();
    }
    else {
      if (this.type === "Nhà trọ") {
        this.list = this.houseService.getlistMotel();
      }
      else {
        if (this.type === "Văn phòng") {
          this.list = this.houseService.getlistOffice();
        }
        else {
          this.list = this.houseService.getlistHouses();
        }
      }
    }

    this.list.forEach(element => {
      this.listStatusTop.push({
        houseID: element.id,
        status: "Lưu tin"
      })
    });
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  changeInterestStatus(index: number, type: string) {
    if (this.listStatusTop[index].status === "Lưu tin") {
      this.listStatusTop[index].status = "Hủy lưu";
      this.presentToast("Đã lưu!")
    }
    else {
      this.listStatusTop[index].status = "Lưu tin";
      this.presentToast("Đã hủy!")
    }
  }

  handleClick() {
    this.list = this.houseService.filterHouses(this.type, this.priceFrom, this.priceTo,
      this.areaFrom, this.areaTo, this.nearMe, this.areaSelected);
  }

  async presentPromptPrice() {
    let alert = await this.alertCtrl.create({
      header: 'Chọn khoảng giá(VND)',
      inputs:
        [
          {
            name: 'check1',
            type: 'checkbox',
            label: this.listPrice[0].fromText + " - " + this.listPrice[0].toText,
            value: 'check01',
            checked: this.listPrice[0].isChecked
          },
          {
            name: 'check2',
            type: 'checkbox',
            label: this.listPrice[1].fromText + " - " + this.listPrice[1].toText,
            value: 'check02',
            checked: this.listPrice[1].isChecked
          },
          {
            name: 'check3',
            type: 'checkbox',
            label: this.listPrice[2].fromText + " - " + this.listPrice[2].toText,
            value: 'check03',
            checked: this.listPrice[2].isChecked
          },
          {
            name: 'check4',
            type: 'checkbox',
            label: this.listPrice[3].fromText + " " + this.listPrice[3].toText,
            value: 'check04',
            checked: this.listPrice[3].isChecked
          }
        ],
      buttons: [
        {
          text: 'Áp dụng',
          role: 'ok',
          handler: data => {
            let from: number = 0;
            let to: number = 0;
            let fromText = "";
            let toText = "";
            if (data.length === 4) {
              from = this.listPrice[0].from;
              to = this.listPrice[3].to;
              fromText = this.listPrice[0].fromText;
              toText = this.listPrice[3].toText.slice(0,7)+"...";
              this.listPrice[0].isChecked = true;
              this.listPrice[1].isChecked = true;
              this.listPrice[2].isChecked = true;
              this.listPrice[3].isChecked = true;
            }
            else {
              if (data.length === 3 && data[0] === 'check01' && data[1] === 'check02' && data[2] === 'check03') {
                from = this.listPrice[0].from;
                to = this.listPrice[2].to;
                fromText = this.listPrice[0].fromText;
                toText = this.listPrice[2].toText;
                this.listPrice[0].isChecked = true;
                this.listPrice[1].isChecked = true;
                this.listPrice[2].isChecked = true;
                this.listPrice[3].isChecked = false;
              }
              else {
                if (data.length === 3 && data[0] === 'check02' && data[1] === 'check03' && data[2] === 'check04') {
                  from = this.listPrice[1].from;
                  to = this.listPrice[3].to;
                  fromText = this.listPrice[1].fromText;
                  toText = this.listPrice[3].toText.slice(0,7)+"...";
                  this.listPrice[3].isChecked = true;
                  this.listPrice[1].isChecked = true;
                  this.listPrice[2].isChecked = true;
                  this.listPrice[0].isChecked = false;
                }
                else {
                  if (data.length === 2 && data[0] === 'check03' && data[1] === 'check04') {
                    from = this.listPrice[2].from;
                    to = this.listPrice[3].to;
                    fromText = this.listPrice[2].fromText;
                    toText = this.listPrice[3].toText.slice(0,7)+"...";
                    this.listPrice[2].isChecked = true;
                    this.listPrice[3].isChecked = true;
                    this.listPrice[0].isChecked = false;
                    this.listPrice[1].isChecked = false;
                  }
                  else {
                    if (data.length === 2 && data[0] === 'check02' && data[1] === 'check03') {
                      from = this.listPrice[1].from;
                      to = this.listPrice[2].to;
                      fromText = this.listPrice[1].fromText;
                      toText = this.listPrice[2].toText;
                      this.listPrice[2].isChecked = true;
                      this.listPrice[1].isChecked = true;
                      this.listPrice[0].isChecked = false;
                      this.listPrice[3].isChecked = false;
                    }
                    else {
                      if (data.length === 2 && data[0] === 'check01' && data[1] === 'check02') {
                        from = this.listPrice[0].from;
                        to = this.listPrice[1].to;
                        fromText = this.listPrice[0].fromText;
                        toText = this.listPrice[1].toText;
                        this.listPrice[0].isChecked = true;
                        this.listPrice[1].isChecked = true;
                        this.listPrice[2].isChecked = false;
                        this.listPrice[3].isChecked = false;
                      }
                      else {
                        if (data.length === 1 && data[0] === 'check01') {
                          from = this.listPrice[0].from;
                          to = this.listPrice[0].to;
                          fromText = this.listPrice[0].fromText;
                          toText = this.listPrice[0].toText;
                          this.listPrice[0].isChecked = true;
                          this.listPrice[1].isChecked = false;
                          this.listPrice[2].isChecked = false;
                          this.listPrice[3].isChecked = false;
                        }
                        else {
                          if (data.length === 1 && data[0] === 'check02') {
                            from = this.listPrice[1].from;
                            to = this.listPrice[1].to;
                            fromText = this.listPrice[1].fromText;
                            toText = this.listPrice[1].toText;
                            this.listPrice[1].isChecked = true;
                            this.listPrice[0].isChecked = false;
                            this.listPrice[2].isChecked = false;
                            this.listPrice[3].isChecked = false;
                          }
                          else {
                            if (data.length === 1 && data[0] === 'check03') {
                              from = this.listPrice[2].from;
                              to = this.listPrice[2].to;
                              fromText = this.listPrice[2].fromText;
                              toText = this.listPrice[2].toText;
                              this.listPrice[2].isChecked = true;
                              this.listPrice[1].isChecked = false;
                              this.listPrice[0].isChecked = false;
                              this.listPrice[3].isChecked = false;
                            }
                            else {
                              if (data.length === 1 && data[0] === 'check04') {
                                from = this.listPrice[3].from;
                                to = this.listPrice[3].to;
                                fromText = this.listPrice[3].fromText;
                                toText = this.listPrice[3].toText;
                                this.listPrice[3].isChecked = true;
                                this.listPrice[1].isChecked = false;
                                this.listPrice[2].isChecked = false;
                                this.listPrice[0].isChecked = false;
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
            this.priceFrom = from;
            this.priceTo = to;
            if (this.priceTo != 0) {
              let tmp = fromText + " - " + toText;
              this.priceLabel = tmp;
              this.handleClick();
            }
          }
        },
        {
          text: 'Hủy',
          role: 'cancel',
          cssClass: 'text-align',
          handler: data => {
          }
        }
      ]
    });
    await alert.present();
  }

  async presentPromptArea() {
    let alert = await this.alertCtrl.create({
      header: 'Diện tích tổng(m²)',
      inputs:
        [
          {
            name: 'check1',
            type: 'checkbox',
            label: this.listAcreage[0].fromText + " - " + this.listAcreage[0].toText,
            value: 'check01',
            checked: this.listAcreage[0].isChecked
          },
          {
            name: 'check2',
            type: 'checkbox',
            label: this.listAcreage[1].fromText + " - " + this.listAcreage[1].toText,
            value: 'check02',
            checked: this.listAcreage[1].isChecked
          },
          {
            name: 'check3',
            type: 'checkbox',
            label: this.listAcreage[2].fromText + " - " + this.listAcreage[2].toText,
            value: 'check03',
            checked: this.listAcreage[2].isChecked
          },
          {
            name: 'check4',
            type: 'checkbox',
            label: this.listAcreage[3].fromText + " " + this.listAcreage[3].toText,
            value: 'check04',
            checked: this.listAcreage[3].isChecked
          }
        ],
      buttons: [
        {
          text: 'Áp dụng',
          role: 'ok',
          handler: data => {
            let from: number = 0;
            let to: number = 0;
            let fromText = "";
            let toText = "";
            if (data.length === 4) {
              from = this.listAcreage[0].from;
              to = this.listAcreage[3].to;
              fromText = this.listAcreage[0].fromText;
              toText = this.listAcreage[3].toText.slice(0,7)+"...";
              this.listAcreage[0].isChecked = true;
              this.listAcreage[1].isChecked = true;
              this.listAcreage[2].isChecked = true;
              this.listAcreage[3].isChecked = true;
            }
            else {
              if (data.length === 3 && data[0] === 'check01' && data[1] === 'check02' && data[2] === 'check03') {
                from = this.listAcreage[0].from;
                to = this.listAcreage[2].to;
                fromText = this.listAcreage[0].fromText;
                toText = this.listAcreage[2].toText;
                this.listAcreage[0].isChecked = true;
                this.listAcreage[1].isChecked = true;
                this.listAcreage[2].isChecked = true;
                this.listAcreage[3].isChecked = false;
              }
              else {
                if (data.length === 3 && data[0] === 'check02' && data[1] === 'check03' && data[2] === 'check04') {
                  from = this.listAcreage[1].from;
                  to = this.listAcreage[3].to;
                  fromText = this.listAcreage[1].fromText;
                  toText = this.listAcreage[3].toText.slice(0,7)+"...";
                  this.listAcreage[3].isChecked = true;
                  this.listAcreage[1].isChecked = true;
                  this.listAcreage[2].isChecked = true;
                  this.listAcreage[0].isChecked = false;
                }
                else {
                  if (data.length === 2 && data[0] === 'check03' && data[1] === 'check04') {
                    from = this.listAcreage[2].from;
                    to = this.listAcreage[3].to;
                    fromText = this.listAcreage[2].fromText;
                    toText = this.listAcreage[3].toText.slice(0,7)+"...";
                    this.listAcreage[2].isChecked = true;
                    this.listAcreage[3].isChecked = true;
                    this.listAcreage[0].isChecked = false;
                    this.listAcreage[1].isChecked = false;
                  }
                  else {
                    if (data.length === 2 && data[0] === 'check02' && data[1] === 'check03') {
                      from = this.listAcreage[1].from;
                      to = this.listAcreage[2].to;
                      fromText = this.listAcreage[1].fromText;
                      toText = this.listAcreage[2].toText;
                      this.listAcreage[2].isChecked = true;
                      this.listAcreage[1].isChecked = true;
                      this.listAcreage[0].isChecked = false;
                      this.listAcreage[3].isChecked = false;
                    }
                    else {
                      if (data.length === 2 && data[0] === 'check01' && data[1] === 'check02') {
                        from = this.listAcreage[0].from;
                        to = this.listAcreage[1].to;
                        fromText = this.listAcreage[0].fromText;
                        toText = this.listAcreage[1].toText;
                        this.listAcreage[0].isChecked = true;
                        this.listAcreage[1].isChecked = true;
                        this.listAcreage[2].isChecked = false;
                        this.listAcreage[3].isChecked = false;
                      }
                      else {
                        if (data.length === 1 && data[0] === 'check01') {
                          from = this.listAcreage[0].from;
                          to = this.listAcreage[0].to;
                          fromText = this.listAcreage[0].fromText;
                          toText = this.listAcreage[0].toText;
                          this.listAcreage[0].isChecked = true;
                          this.listAcreage[1].isChecked = false;
                          this.listAcreage[2].isChecked = false;
                          this.listAcreage[3].isChecked = false;
                        }
                        else {
                          if (data.length === 1 && data[0] === 'check02') {
                            from = this.listAcreage[1].from;
                            to = this.listAcreage[1].to;
                            fromText = this.listAcreage[1].fromText;
                            toText = this.listAcreage[1].toText;
                            this.listAcreage[1].isChecked = true;
                            this.listAcreage[0].isChecked = false;
                            this.listAcreage[2].isChecked = false;
                            this.listAcreage[3].isChecked = false;
                          }
                          else {
                            if (data.length === 1 && data[0] === 'check03') {
                              from = this.listAcreage[2].from;
                              to = this.listAcreage[2].to;
                              fromText = this.listAcreage[2].fromText;
                              toText = this.listAcreage[2].toText;
                              this.listAcreage[2].isChecked = true;
                              this.listAcreage[1].isChecked = false;
                              this.listAcreage[0].isChecked = false;
                              this.listAcreage[3].isChecked = false;
                            }
                            else {
                              if (data.length === 1 && data[0] === 'check04') {
                                from = this.listAcreage[3].from;
                                to = this.listAcreage[3].to;
                                fromText = this.listAcreage[3].fromText;
                                toText = this.listAcreage[3].toText;
                                this.listAcreage[3].isChecked = true;
                                this.listAcreage[1].isChecked = false;
                                this.listAcreage[2].isChecked = false;
                                this.listAcreage[0].isChecked = false;
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
            this.areaFrom = from;
            this.areaTo = to;
            if (this.areaTo != 0) {
              let tmp = fromText + " - " + toText;
              this.areaLabel = tmp;
              this.handleClick();
            }
          }
        },
        {
          text: 'Hủy',
          role: 'cancel',
          cssClass: 'text-align',
          handler: data => {
          }
        }
      ]
    });
    await alert.present();
  }

  async presentPromptNearMe() {
    let alert = await this.alertCtrl.create({
      header: 'Gần đây(Km)',
      inputs: [
        {
          name: 'near',
          type: 'number',
          placeholder: 'Phạm vi'
        }
      ],
      buttons: [
        {
          text: 'Áp dụng',
          role: 'ok',
          handler: data => {
            this.nearMe = data.near == "" ? 0 : data.near;
            if (this.nearMe != 0) {
              let tmp = this.nearMe + "Km";
              let sub = "";
              if (tmp.length > 15) {
                sub = tmp.slice(0, 14) + "...";
              }
              else {
                sub = tmp;
              }
              this.nearLabel = sub;
              this.handleClick();
            }
          }
        },
        {
          text: 'Hủy',
          role: 'cancel',
          cssClass: 'text-align',
          handler: data => {
          }
        }
      ]
    });
    await alert.present();
  }

  onCancel() {
    // console.log("cancel");
  }

  onChange() {
    this.handleClick();
  }

}

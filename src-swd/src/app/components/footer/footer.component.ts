import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  public isActiveHome: string;
  public isActiveInterest: string;
  public isActiveNotification: string;
  private sub: string;

  constructor(private router: Router) {
    if (typeof (sessionStorage.isActiveTab) !== "undefined") {
      if (sessionStorage.isActiveTab === "interest") {
        this.isActiveInterest = "active-tab";
      }
      else {
        if (sessionStorage.isActiveTab === "home") {
          this.isActiveHome = "active-tab";
        }
        else {
          this.isActiveNotification = "active-tab";
        }
      }
    }

    this.initial();
  }

  initial() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.length > 1) {
          this.sub = event.url.substring(1, 5);
          if (this.sub === "inte") {
            this.isActiveHome = "inactive-tab";
            this.isActiveInterest = "active-tab";
            this.isActiveNotification = "inactive-tab";
          }
          else {
            if (this.sub === "noti") {
              this.isActiveNotification = "active-tab";
              this.isActiveHome = "inactive-tab";
              this.isActiveInterest = "inactive-tab";
            }
            else {
              if (event.url.length <= 6) {
                this.isActiveHome = "active-tab";
                this.isActiveInterest = "inactive-tab";
                this.isActiveNotification = "inactive-tab";
              }
            }
          }
        }
        else {
          this.isActiveHome = "active-tab";
          this.isActiveInterest = "inactive-tab";
          this.isActiveNotification = "inactive-tab";
        }
      }
    });
  }

  ngOnInit() {
  }

  setActiveTab(value: string) {
    if (value.match("home")) {
      this.isActiveHome = "active-tab";
      this.isActiveInterest = "inactive-tab";
      this.isActiveNotification = "inactive-tab";
    }
    else {
      if (value.match("interest")) {
        this.isActiveHome = "inactive-tab";
        this.isActiveInterest = "active-tab";
        this.isActiveNotification = "inactive-tab";
      }
      else {
        this.isActiveNotification = "active-tab";
        this.isActiveHome = "inactive-tab";
        this.isActiveInterest = "inactive-tab";
      }
    }
  }

  checkActive(value: string) {
    if (value === "interest") {
      if (typeof (sessionStorage.username) === "undefined") {
        return this.router.navigateByUrl('/login');
      }
      else {
        return this.router.navigateByUrl('/interest');
      }
    }
    else {
      if (typeof (sessionStorage.username) === "undefined") {
        return this.router.navigateByUrl('/login');
      }
      else {
        return this.router.navigateByUrl('/notification');
      }
    }
  }

}




import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public isShow: boolean = true;
  private sub: string = "";

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.sub = event.url.substring(1, 5);
        if (this.sub.match("tenant")) {
          if (event.url.length > 5) {
            if (event.url.substring(6, 8) === ("se")) {
              sessionStorage.isActiveTab = "home";
              this.isShow = true;
            }
            else {
              this.isShow = false;
            }
          }
          else {
            this.isShow = true;
            sessionStorage.isActiveTab = "home";
          }
        }
        else {
          if (this.sub.match("logi")) {
            this.isShow = false;
          }
          else {
            if (this.sub.match("prof")) {
              this.isShow = false;
            }
            else {
              if (this.sub.match("regi")) {
                this.isShow = false;
              }
              else {
                if (this.sub.match("forg")) {
                  this.isShow = false;
                }
                else {
                  if (this.sub.match("inte")) {
                    this.isShow = true;
                    sessionStorage.isActiveTab = "interest"
                  }
                  else {
                    if (this.sub.match("noti")) {
                      this.isShow = true;
                      sessionStorage.isActiveTab = "notification";
                      if (event.url.length > 14) {
                        this.isShow = false;
                      }
                    }
                    else {
                      if (this.sub.match("goog")) {
                        this.isShow = false;
                      }
                      else {
                        if (this.sub.match("admi")) {
                          this.isShow = false;
                        }
                        else {
                          if (this.sub.match("mana")) {
                            this.isShow = false;
                          }
                          else {
                            if (this.sub.match("appr")) {
                              this.isShow = false;
                            }
                            else {
                              if (this.sub.match("warn")) {
                                this.isShow = false;
                              }
                              else {
                                if (this.sub.match("bloc")) {
                                  this.isShow = false;
                                }
                                else {
                                  this.isShow = true;
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
        }
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}

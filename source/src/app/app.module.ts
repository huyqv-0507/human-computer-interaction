import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePopoverComponent } from './components/home-popover/home-popover.component';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ModalController } from '@ionic/angular';
import { ModalDetailPageModule } from './modal-detail/modal-detail.module';
import { ModalDetailPage } from './modal-detail/modal-detail.page';
import { PostHouseModalPage } from './post-house-modal/post-house-modal.page';
import { PostHouseModalPageModule } from './post-house-modal/post-house-modal.module';
import { GoogleHousePage } from './google-house/google-house.page';
import { RefuseModalPage } from './refuse-modal/refuse-modal.page';
import { ViewpostedModalPage } from './viewposted-modal/viewposted-modal.page';
import { ViewpostedsuccessModalPage } from './viewpostedsuccess-modal/viewpostedsuccess-modal.page';
import { TenantNotificationModalPage } from './tenant-notification-modal/tenant-notification-modal.page';
import { PostWarningModalPage } from './post-warning-modal/post-warning-modal.page';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePopoverComponent,
    ModalDetailPage,
    PostHouseModalPage,
    GoogleHousePage,
    RefuseModalPage,
    ViewpostedModalPage,
    ViewpostedsuccessModalPage,
    TenantNotificationModalPage,
    PostWarningModalPage,
  ],
  entryComponents: [
    HomePopoverComponent,
    ModalDetailPage,
    PostHouseModalPage,
    GoogleHousePage,
    RefuseModalPage,
    ViewpostedModalPage,
    ViewpostedsuccessModalPage,
    TenantNotificationModalPage,
    PostWarningModalPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgxIonicImageViewerModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    ImagePicker,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CallNumber,
    ModalController,
    ModalDetailPageModule,
    PostHouseModalPageModule,
    GoogleHousePage,
    RefuseModalPage,
    ViewpostedModalPage,
    ViewpostedsuccessModalPage,
    TenantNotificationModalPage,
    PostWarningModalPage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HostMessengerNotiPage } from './host-messenger-noti.page';

describe('HostMessengerNotiPage', () => {
  let component: HostMessengerNotiPage;
  let fixture: ComponentFixture<HostMessengerNotiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostMessengerNotiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HostMessengerNotiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

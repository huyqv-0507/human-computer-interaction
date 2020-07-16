import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TenantMessengerNotiPage } from './tenant-messenger-noti.page';

describe('TenantMessengerNotiPage', () => {
  let component: TenantMessengerNotiPage;
  let fixture: ComponentFixture<TenantMessengerNotiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantMessengerNotiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TenantMessengerNotiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

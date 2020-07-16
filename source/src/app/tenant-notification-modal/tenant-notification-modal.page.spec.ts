import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TenantNotificationModalPage } from './tenant-notification-modal.page';

describe('TenantNotificationModalPage', () => {
  let component: TenantNotificationModalPage;
  let fixture: ComponentFixture<TenantNotificationModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantNotificationModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TenantNotificationModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

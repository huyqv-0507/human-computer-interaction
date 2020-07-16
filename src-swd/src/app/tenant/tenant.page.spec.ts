import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TenantPage } from './tenant.page';

describe('TenantPage', () => {
  let component: TenantPage;
  let fixture: ComponentFixture<TenantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TenantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

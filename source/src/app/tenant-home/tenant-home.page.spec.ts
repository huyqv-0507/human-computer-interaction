import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TenantHomePage } from './tenant-home.page';

describe('TenantHomePage', () => {
  let component: TenantHomePage;
  let fixture: ComponentFixture<TenantHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TenantHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

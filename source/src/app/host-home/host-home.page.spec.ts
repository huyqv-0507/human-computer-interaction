import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HostHomePage } from './host-home.page';

describe('HostHomePage', () => {
  let component: HostHomePage;
  let fixture: ComponentFixture<HostHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HostHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoogleHousePage } from './google-house.page';

describe('GoogleHousePage', () => {
  let component: GoogleHousePage;
  let fixture: ComponentFixture<GoogleHousePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleHousePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoogleHousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

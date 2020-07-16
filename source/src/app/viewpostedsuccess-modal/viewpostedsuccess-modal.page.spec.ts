import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewpostedsuccessModalPage } from './viewpostedsuccess-modal.page';

describe('ViewpostedsuccessModalPage', () => {
  let component: ViewpostedsuccessModalPage;
  let fixture: ComponentFixture<ViewpostedsuccessModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpostedsuccessModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewpostedsuccessModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

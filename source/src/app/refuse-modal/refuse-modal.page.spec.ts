import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RefuseModalPage } from './refuse-modal.page';

describe('RefuseModalPage', () => {
  let component: RefuseModalPage;
  let fixture: ComponentFixture<RefuseModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefuseModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RefuseModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

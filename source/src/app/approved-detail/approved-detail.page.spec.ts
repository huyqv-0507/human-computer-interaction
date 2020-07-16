import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApprovedDetailPage } from './approved-detail.page';

describe('ApprovedDetailPage', () => {
  let component: ApprovedDetailPage;
  let fixture: ComponentFixture<ApprovedDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApprovedDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

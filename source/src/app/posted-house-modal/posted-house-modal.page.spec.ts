import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostedHouseModalPage } from './posted-house-modal.page';

describe('PostedHouseModalPage', () => {
  let component: PostedHouseModalPage;
  let fixture: ComponentFixture<PostedHouseModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedHouseModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostedHouseModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

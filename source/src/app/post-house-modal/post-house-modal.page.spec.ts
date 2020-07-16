import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostHouseModalPage } from './post-house-modal.page';

describe('PostHouseModalPage', () => {
  let component: PostHouseModalPage;
  let fixture: ComponentFixture<PostHouseModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostHouseModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostHouseModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

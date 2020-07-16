import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostWarningModalPage } from './post-warning-modal.page';

describe('PostWarningModalPage', () => {
  let component: PostWarningModalPage;
  let fixture: ComponentFixture<PostWarningModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostWarningModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostWarningModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

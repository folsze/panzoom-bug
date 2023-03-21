import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnvakaPanzoomPage } from './anvaka-panzoom.page';

describe('AnvakaPanzoomPage', () => {
  let component: AnvakaPanzoomPage;
  let fixture: ComponentFixture<AnvakaPanzoomPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnvakaPanzoomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnvakaPanzoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScreeningPage } from './screening.page';

describe('ScreeningPage', () => {
  let component: ScreeningPage;
  let fixture: ComponentFixture<ScreeningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreeningPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScreeningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

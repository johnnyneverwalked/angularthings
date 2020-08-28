import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourGuideViewComponent } from './tour-guide-view.component';

describe('TourGuideViewComponent', () => {
  let component: TourGuideViewComponent;
  let fixture: ComponentFixture<TourGuideViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourGuideViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourGuideViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

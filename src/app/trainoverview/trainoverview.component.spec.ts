import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainoverviewComponent } from './trainoverview.component';

describe('TrainoverviewComponent', () => {
  let component: TrainoverviewComponent;
  let fixture: ComponentFixture<TrainoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

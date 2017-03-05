import { TestBed, inject } from '@angular/core/testing';

import { TrainoverviewService } from './trainoverview.service';

describe('TrainoverviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainoverviewService]
    });
  });

  it('should ...', inject([TrainoverviewService], (service: TrainoverviewService) => {
    expect(service).toBeTruthy();
  }));
});

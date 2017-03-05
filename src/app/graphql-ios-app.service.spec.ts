import { TestBed, inject } from '@angular/core/testing';

import { GraphqlIosAppService } from './graphql-ios-app.service';

describe('GraphqlIosAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphqlIosAppService]
    });
  });

  it('should ...', inject([GraphqlIosAppService], (service: GraphqlIosAppService) => {
    expect(service).toBeTruthy();
  }));
});

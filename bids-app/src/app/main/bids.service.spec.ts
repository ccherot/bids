/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BidsService } from './bids.service';

describe('BidsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BidsService]
    });
  });

  it('should ...', inject([BidsService], (service: BidsService) => {
    expect(service).toBeTruthy();
  }));
});

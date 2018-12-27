/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BirdFinderService } from './bird-finder.service';

describe('BirdFinderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BirdFinderService]
    });
  });

  it('should ...', inject([BirdFinderService], (service: BirdFinderService) => {
    expect(service).toBeTruthy();
  }));
});

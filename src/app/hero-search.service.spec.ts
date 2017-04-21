import { TestBed, inject } from '@angular/core/testing';

import { HeroSearchService } from './hero-search.service';
import { HttpModule } from "@angular/http";

describe('HeroSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [HeroSearchService]
    });
  });

  it('should ...', inject([HeroSearchService], (service: HeroSearchService) => {
    expect(service).toBeTruthy();
  }));
});

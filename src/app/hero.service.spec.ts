import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { HeroSearchService } from "app/hero-search.service";

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService, HeroSearchService]
    });
  });

  it('should ...', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});

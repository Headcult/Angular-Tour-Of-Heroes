import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { HeroSearchService } from "app/hero-search.service";
import { HttpModule } from "@angular/http";

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [HeroService, HeroSearchService]
    });
  });

  it('should ...', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});

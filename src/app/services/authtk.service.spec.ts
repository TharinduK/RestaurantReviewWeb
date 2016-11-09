/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthtkService } from './authtk.service';

describe('Service: Authtk', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthtkService]
    });
  });

  it('should ...', inject([AuthtkService], (service: AuthtkService) => {
    expect(service).toBeTruthy();
  }));
});

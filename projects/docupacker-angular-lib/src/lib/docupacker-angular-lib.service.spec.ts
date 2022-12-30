import { TestBed } from '@angular/core/testing';

import { DocupackerAngularLibService } from './docupacker-angular-lib.service';

describe('DocupackerAngularLibService', () => {
  let service: DocupackerAngularLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocupackerAngularLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

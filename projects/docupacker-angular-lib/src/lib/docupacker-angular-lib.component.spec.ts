import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocupackerAngularLibComponent } from './docupacker-angular-lib.component';

describe('DocupackerAngularLibComponent', () => {
  let component: DocupackerAngularLibComponent;
  let fixture: ComponentFixture<DocupackerAngularLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocupackerAngularLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocupackerAngularLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

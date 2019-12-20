import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUploadImgComponent } from './form-upload-img.component';

describe('FormUploadImgComponent', () => {
  let component: FormUploadImgComponent;
  let fixture: ComponentFixture<FormUploadImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUploadImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUploadImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

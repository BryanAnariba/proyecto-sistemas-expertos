import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankOfImagesComponent } from './bank-of-images.component';

describe('BankOfImagesComponent', () => {
  let component: BankOfImagesComponent;
  let fixture: ComponentFixture<BankOfImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankOfImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankOfImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

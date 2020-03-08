import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePhotographyComponent } from './change-photography.component';

describe('ChangePhotographyComponent', () => {
  let component: ChangePhotographyComponent;
  let fixture: ComponentFixture<ChangePhotographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePhotographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePhotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

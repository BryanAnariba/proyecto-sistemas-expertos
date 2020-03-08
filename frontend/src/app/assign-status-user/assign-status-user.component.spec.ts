import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignStatusUserComponent } from './assign-status-user.component';

describe('AssignStatusUserComponent', () => {
  let component: AssignStatusUserComponent;
  let fixture: ComponentFixture<AssignStatusUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignStatusUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignStatusUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

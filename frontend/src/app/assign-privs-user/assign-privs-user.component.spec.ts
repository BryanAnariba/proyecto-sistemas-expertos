import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPrivsUserComponent } from './assign-privs-user.component';

describe('AssignPrivsUserComponent', () => {
  let component: AssignPrivsUserComponent;
  let fixture: ComponentFixture<AssignPrivsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignPrivsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignPrivsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

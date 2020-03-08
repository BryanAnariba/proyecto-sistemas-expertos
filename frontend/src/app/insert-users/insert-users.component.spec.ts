import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertUsersComponent } from './insert-users.component';

describe('InsertUsersComponent', () => {
  let component: InsertUsersComponent;
  let fixture: ComponentFixture<InsertUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

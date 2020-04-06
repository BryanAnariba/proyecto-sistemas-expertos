import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertNewBlogComponent } from './insert-new-blog.component';

describe('InsertNewBlogComponent', () => {
  let component: InsertNewBlogComponent;
  let fixture: ComponentFixture<InsertNewBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertNewBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertNewBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

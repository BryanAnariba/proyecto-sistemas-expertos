import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCmsComponent } from './panel-cms.component';

describe('PanelCmsComponent', () => {
  let component: PanelCmsComponent;
  let fixture: ComponentFixture<PanelCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelCmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

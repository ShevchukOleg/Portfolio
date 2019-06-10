import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborActivityComponent } from './labor-activity.component';

describe('LaborActivityComponent', () => {
  let component: LaborActivityComponent;
  let fixture: ComponentFixture<LaborActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaborActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaborActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

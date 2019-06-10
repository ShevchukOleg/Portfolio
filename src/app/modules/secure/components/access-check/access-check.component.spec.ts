import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessCheckComponent } from './access-check.component';

describe('AccessCheckComponent', () => {
  let component: AccessCheckComponent;
  let fixture: ComponentFixture<AccessCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

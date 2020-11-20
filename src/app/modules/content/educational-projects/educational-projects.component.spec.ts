import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EducationalProjectsComponent } from './educational-projects.component';

describe('EducationalProjectsComponent', () => {
  let component: EducationalProjectsComponent;
  let fixture: ComponentFixture<EducationalProjectsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationalProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

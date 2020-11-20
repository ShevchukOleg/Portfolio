import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PersonalQualitiesComponent } from './personal-qualities.component';

describe('PersonalQualitiesComponent', () => {
  let component: PersonalQualitiesComponent;
  let fixture: ComponentFixture<PersonalQualitiesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalQualitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalQualitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

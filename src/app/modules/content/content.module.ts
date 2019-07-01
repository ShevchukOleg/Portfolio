import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { EducationalProjectsComponent } from './educational-projects/educational-projects.component';
import { LaborActivityComponent } from './labor-activity/labor-activity.component';
import { EducationComponent } from './education/education.component';
import { PersonalQualitiesComponent } from './personal-qualities/personal-qualities.component';
import { ContentRoutingModule } from './content-routing.module';
// import { Router, ActivatedRoute } from '@angular/router';

@NgModule({
  declarations: [SkillsComponent, EducationalProjectsComponent, LaborActivityComponent, EducationComponent, PersonalQualitiesComponent],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { EducationalProjectsComponent } from './educational-projects/educational-projects.component';
import { PersonalQualitiesComponent } from './personal-qualities/personal-qualities.component';
import { ContentRoutingModule } from './content-routing.module';

@NgModule({
  declarations: [SkillsComponent, EducationalProjectsComponent, PersonalQualitiesComponent],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }

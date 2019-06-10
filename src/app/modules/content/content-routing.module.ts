import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { EducationalProjectsComponent } from './educational-projects/educational-projects.component';
import { LaborActivityComponent } from './labor-activity/labor-activity.component';
import { EducationComponent } from './education/education.component';
import { PersonalQualitiesComponent } from './personal-qualities/personal-qualities.component';

const routes: Routes = [
  {path: 'skills', component: SkillsComponent },
  {path: 'projects', component: EducationalProjectsComponent },
  {path: 'work-experience', component: LaborActivityComponent },
  {path: 'education', component: EducationComponent },
  {path: 'personality', component: PersonalQualitiesComponent },
  {path: '', component: SkillsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }

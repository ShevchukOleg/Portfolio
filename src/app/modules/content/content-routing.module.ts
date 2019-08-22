import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { EducationalProjectsComponent } from './educational-projects/educational-projects.component';
import { LaborActivityComponent } from './labor-activity/labor-activity.component';
import { EducationComponent } from './education/education.component';
import { PersonalQualitiesComponent } from './personal-qualities/personal-qualities.component';

const routes: Routes = [
  {path: 'skills', component: SkillsComponent, data: {animation: 'first'} },
  {path: 'projects', component: EducationalProjectsComponent, data: {animation: 'second'} },
  {path: 'work-experience', component: LaborActivityComponent, data: {animation: 'first'} },
  {path: 'education', component: EducationComponent, data: {animation: 'second'} },
  {path: 'personality', component: PersonalQualitiesComponent, data: {animation: 'first'} },
  {path: '', redirectTo: 'skills', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }

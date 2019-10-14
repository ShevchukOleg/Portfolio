import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { EducationalProjectsComponent } from './educational-projects/educational-projects.component';
import { PersonalQualitiesComponent } from './personal-qualities/personal-qualities.component';

const routes: Routes = [
  {path: 'skills', component: SkillsComponent, data: {animation: 'first'} },
  {path: 'projects', component: EducationalProjectsComponent, data: {animation: 'second'} },
  {path: 'personality', component: PersonalQualitiesComponent, data: {animation: 'first'} },
  {path: '', redirectTo: 'skills', pathMatch: 'full', data: {animation: 'first'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }

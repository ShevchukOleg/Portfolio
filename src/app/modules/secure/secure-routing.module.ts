import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessCheckComponent } from './components/access-check/access-check.component';

const routes: Routes = [
  {
    path: 'access',
    component: AccessCheckComponent
  },
  {
    path: '',
    redirectTo: '/secure/access'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }

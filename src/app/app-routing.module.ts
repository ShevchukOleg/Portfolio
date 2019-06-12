import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'secure',
    loadChildren: () => import('./modules/secure/secure.module').then( mod => mod.SecureModule)},
  { path: 'content',
    loadChildren: () => import('./modules/content/content.module').then( mod => mod.ContentModule), canActivate: [AuthGuard]},
  {
    path: '',
    loadChildren: () => import('./modules/content/content.module').then( mod => mod.ContentModule), canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { ControlAccessService } from '../global-services/control-access.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

 constructor(
    private access: ControlAccessService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.access.keeper()) {
      return true;
    } else {
      this.router.navigate([`/secure`]);
      return false;
    }
  }
}

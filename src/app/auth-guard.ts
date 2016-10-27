import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authSvc: AuthService,
        private router: Router
    ) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authSvc.authenticated()) {
            console.log('Auth guard passed');
            return true;
        }
        else {
            console.log('Blocked by auth guard');
            this.router.navigate(['/']);
            return false;
        }
    }
}

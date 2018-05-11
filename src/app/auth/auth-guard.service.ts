import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    console.log(this.auth.getAuthenticatedUser());
    if (!this.auth.isAuthenticated()) {
     console.log('WTF!');
      this.router.navigate(['signin']);
      return false;
    }
    return true;
  }
}
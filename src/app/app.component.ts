import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  isAuthenticated = false;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.authService.authStatusChanged.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;
        if (authenticated) {
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/']);
        }
      }
    );
   
  }

  onLogout() {
    this.authService.logout();
  }
}

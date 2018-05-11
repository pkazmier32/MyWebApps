import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth//auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authStatusChanged.subscribe(
      (authenticated) => {
        
        if (authenticated) {
          console.log("Authenticated!");
        } else {
          console.log("Not authenticated!");
        }
      }
    );
    
  }

}

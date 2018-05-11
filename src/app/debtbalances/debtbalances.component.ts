import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-debtbalances',
  templateUrl: './debtbalances.component.html',
  styleUrls: ['./debtbalances.component.css']
})
export class DebtbalancesComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    
  }

}

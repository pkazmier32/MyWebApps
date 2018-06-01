import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { DebtBalanceService } from './debtbalances.service';

@Component({
  selector: 'app-debtbalances',
  templateUrl: './debtbalances.component.html',
  styleUrls: ['./debtbalances.component.css']
})
export class DebtbalancesComponent implements OnInit {

  constructor(private authService: AuthService, private dbService: DebtBalanceService) { }

  ngOnInit() {
    
  }

}

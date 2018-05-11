import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';

import { HomeComponent } from './home/home.component';
import { SigninComponent } from './auth/signin.component';
import { DebtbalancesComponent } from './debtbalances/debtbalances.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'debtbalances' , component: DebtbalancesComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
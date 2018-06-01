import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './auth/signin.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { DebtbalancesComponent } from './debtbalances/debtbalances.component';
import { DebtBalanceService } from './debtbalances/debtbalances.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    DebtbalancesComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuardService, DebtBalanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

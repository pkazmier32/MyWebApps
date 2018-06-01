import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { DebtBalance } from './debtbalance.model';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../environments/environment';

@Injectable()
export class DebtBalanceService {
    dbData: DebtBalance;

    constructor(private http: HttpClient, private authService: AuthService) {

    }

    onGetMostRecentBalance(cardName: string) {
        var apiMthd = '/getmostrecentbalance';
        var sUrl = environment.apiUrl + apiMthd + '?cardName=' + cardName;
        return this.http.get(sUrl);
    }
}
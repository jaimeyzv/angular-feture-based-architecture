import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoanListModel } from '../models/loan-list.model';
import { LoanCreateModel } from '../models/loan-create.model';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  private baseUrl = 'https://localhost:7263/api/loans/';
  constructor(private http: HttpClient) {}

  createLoan(loan: LoanCreateModel): Observable<LoanCreateModel> {
    console.log('from service:', loan);
    return this.http.post<LoanCreateModel>(this.baseUrl, loan);
  }

  getLoans(): Observable<{ loans: LoanListModel[] }> {
    return this.http.get<{ loans: LoanListModel[] }>(this.baseUrl);
  }
}

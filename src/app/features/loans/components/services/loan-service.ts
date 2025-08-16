import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoanListModel } from '../models/loan-list.model';
import { LoanCreateModel } from '../models/loan-create.model';
import { environment } from '../../../../../environments/environment.ts';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  private apiUrl = `${environment.apiBaseUrl}/api/loans/`;
  constructor(private http: HttpClient) {}

  createLoan(loan: LoanCreateModel): Observable<LoanCreateModel> {
    return this.http.post<LoanCreateModel>(this.apiUrl, loan);
  }

  getLoans(): Observable<{ loans: LoanListModel[] }> {
    return this.http.get<{ loans: LoanListModel[] }>(this.apiUrl);
  }
}

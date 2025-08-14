import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoanList } from '../loan-list/loan-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  private baseUrl = 'https://localhost:7263/api/loans/';
  constructor(private http: HttpClient) {}

  getLoans(): Observable<{ loans: LoanList[] }> {
    return this.http.get<{ loans: LoanList[] }>(this.baseUrl);
  }
}

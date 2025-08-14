import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoanListModel } from '../models/loan-list.model';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  private baseUrl = 'https://localhost:7263/api/loans/';
  constructor(private http: HttpClient) {}

  getLoans(): Observable<{ loans: LoanListModel[] }> {
    return this.http.get<{ loans: LoanListModel[] }>(this.baseUrl);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InstallmentListModel } from '../models/InstallmentListModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstallmentService {
  private baseUrl = 'https://localhost:7263/api/loans/';
  constructor(private http: HttpClient) {}

  getInstallments(loanId: number): Observable<{ installments: InstallmentListModel[] }> {
    const url = `${this.baseUrl}${loanId}/installments`;
    console.log(url);
    return this.http.get<{ installments: InstallmentListModel[] }>(url);
  }
}

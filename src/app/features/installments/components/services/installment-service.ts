import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InstallmentListModel } from '../models/Installment-list.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InstallmentService {
  private apiUrl = `${environment.apiBaseUrl}/api/loans/`;
  constructor(private http: HttpClient) {}

  getInstallments(loanId: number): Observable<{ installments: InstallmentListModel[] }> {
    const url = `${this.apiUrl}${loanId}/installments`;
    return this.http.get<{ installments: InstallmentListModel[] }>(url);
  }

  payInstallment(loanId: number, installmentId: number): Observable<any> {
    const url = `${this.apiUrl}${loanId}/installments/${installmentId}`;
    return this.http.patch(url, null);
  }
}

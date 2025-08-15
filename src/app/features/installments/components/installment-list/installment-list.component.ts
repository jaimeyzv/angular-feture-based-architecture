import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InstallmentListModel } from '../models/InstallmentListModel';
import { InstallmentService } from '../services/installment-service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-installment-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './installment-list.component.html',
  styleUrl: './installment-list.component.scss',
})
export class InstallmentListComponent implements OnInit {
  showConfirm = false;
  isProcessing = false;
  loanId!: number;
  errorMessage!: string;
  selectedInstallment: InstallmentListModel | null = null;
  installments: InstallmentListModel[] = [];

  constructor(
    private installmentService: InstallmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loanId = Number(this.route.snapshot.paramMap.get('loanId'));
    this.installmentService.getInstallments(this.loanId).subscribe({
      next: (data) => (this.installments = data.installments),
      error: (err) => console.error('Error fetching installments:', err),
    });
  }

  closeConfirm(): void {
    if (this.isProcessing) return;
    this.showConfirm = false;
    this.selectedInstallment = null;
  }

  openConfirm(installment: InstallmentListModel): void {
    this.selectedInstallment = installment;
    this.showConfirm = true;
  }

  async confirmPay(): Promise<void> {
    if (!this.selectedInstallment) return;

    this.isProcessing = true;
    try {
      await firstValueFrom(
        this.installmentService.payInstallment(this.loanId, this.selectedInstallment.installmentId)
      );

      const now = new Date();

      this.installments = this.installments.map((i) =>
        i.installmentId === this.selectedInstallment!.installmentId
          ? { ...i, isPaid: true, paymentDate: now } // update fields you show in the table
          : i
      );

      this.showConfirm = false;
      this.selectedInstallment = null;
    } catch (err) {
      console.error('Payment error', err);
    } finally {
      this.isProcessing = false;
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InstallmentListModel } from '../models/InstallmentListModel';
import { InstallmentService } from '../services/installment-service';

@Component({
  selector: 'app-installment-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './installment-list.component.html',
  styleUrl: './installment-list.component.scss',
})
export class InstallmentListComponent implements OnInit {
  loanId!: number;
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
}

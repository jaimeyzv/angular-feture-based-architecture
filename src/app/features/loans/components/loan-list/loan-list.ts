import { Component } from '@angular/core';
import { LoanService } from '../services/loan-service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LoanListModel } from '../models/loan-list.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loan-list',
  imports: [CommonModule],
  templateUrl: './loan-list.html',
  styleUrl: './loan-list.scss',
})
export class LoanList {
  loans: LoanListModel[] = [];

  constructor(
    private loanService: LoanService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loanService.getLoans().subscribe({
      next: (data) => (this.loans = data.loans),
      error: (err) => console.error('Error fetching loans:', err),
    });
  }
}

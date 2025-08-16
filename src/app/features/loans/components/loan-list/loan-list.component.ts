import { Component, OnInit } from '@angular/core';
import { LoanListModel } from '../models/loan-list.model';
import { LoanService } from '../services/loan-service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loan-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './loan-list.component.html',
  styleUrl: './loan-list.component.scss',
})
export class LoanListComponent implements OnInit {
  loans: LoanListModel[] = [];

  constructor(private loanService: LoanService) {}

  ngOnInit(): void {
    this.loanService.getLoans().subscribe({
      next: (data) => (this.loans = data.loans),
      error: (err) => console.error('Error fetching loans:', err),
    });
  }
}

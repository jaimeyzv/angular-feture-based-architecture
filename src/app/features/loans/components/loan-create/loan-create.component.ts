import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoanService } from '../services/loan-service';
import { RepaymentModality } from '../models/repayment-modality.type';

@Component({
  selector: 'app-loan-create',
  imports: [FormsModule, CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './loan-create.component.html',
  styleUrl: './loan-create.component.scss',
})
export class LoanCreateComponent implements OnInit {
  amount: string = '';
  loanForm!: FormGroup;
  errorMessage: string | null = null;
  submitted = false;
  repaymentModalityOptions: Array<{ value: RepaymentModality; label: string }> = [
    { value: RepaymentModality.Weekly, label: 'Weekly' },
    { value: RepaymentModality.Every15Days, label: 'Every 15 days' },
    { value: RepaymentModality.Monthly, label: 'Monthly' },
  ];

  constructor(private fb: FormBuilder, private loanService: LoanService, private router: Router) {}

  ngOnInit(): void {
    this.loanForm = this.fb.group({
      // amount: numeric value we will send to the backend
      amount: [null, [Validators.required]],
      // amountDisplay: what the user types/sees (formatted)
      amountDisplay: ['', [Validators.required]],
      borrowerName: ['', Validators.required],
      durationMonths: [
        null,
        [
          Validators.required,
          Validators.pattern(/^\d+$/), // only whole numbers allowed
        ],
      ],
      repaymentModality: [null as RepaymentModality | null, Validators.required],
    });
  }

  onAmountInput(evt: Event) {
    const input = evt.target as HTMLInputElement;

    // 1) sanitize to digits + optional single dot
    let raw = input.value.replace(/,/g, '').replace(/[^\d.]/g, '');
    const parts = raw.split('.');
    if (parts.length > 2) raw = parts[0] + '.' + parts.slice(1).join('');

    // 2) update numeric control
    const num = Number(raw);
    this.loanForm.get('amount')!.setValue(isNaN(num) ? null : num, { emitEvent: false });

    // 3) format display (commas) but preserve decimals typed
    const [intPart, decPart] = raw.split('.');
    const intFmt = intPart ? Number(intPart).toLocaleString('en-US') : '';
    const formatted = decPart !== undefined ? `${intFmt}.${decPart}` : intFmt;

    // 4) reflect formatted in UI (display control)
    this.loanForm.get('amountDisplay')!.setValue(formatted, { emitEvent: false });
  }

  onAmountBlur(evt: Event) {
    const input = evt.target as HTMLInputElement;
    const value = this.loanForm.get('amount')!.value as number | null;

    // Ensure two decimals on blur if you want fixed money format
    if (value !== null && !isNaN(value)) {
      const formatted = value.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      this.loanForm.get('amountDisplay')!.setValue(formatted, { emitEvent: false });
      input.value = formatted;
    }
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loanForm.valid) {
      this.loanService.createLoan(this.loanForm.value).subscribe({
        next: () => this.router.navigate(['/loans']),
        error: (err) => {
          this.errorMessage = err.error || 'An error occurred while creating the loan.';
        },
      });
    }
  }
}

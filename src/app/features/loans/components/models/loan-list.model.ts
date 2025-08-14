export interface LoanList {
  loanId: number;
  principal: number;
  currentBalance: number;
  borrowerName: string;
  durationMonths: number;
  interestRate: number;
  totalPayment: number;
  status: string;
}

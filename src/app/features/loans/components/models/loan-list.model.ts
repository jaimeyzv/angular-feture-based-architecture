export interface LoanListModel {
  loanId: number;
  principal: number;
  currentBalance: number;
  borrowerName: string;
  durationMonths: number;
  interestRate: number;
  totalPayment: number;
  repaymentModality: string;
  status: string;
  overdueCount: number;
}

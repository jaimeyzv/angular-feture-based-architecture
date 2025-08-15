export interface InstallmentListModel {
  loanId: number;
  installmentId: number;
  installmentNumber: number;
  amount: number;
  dueDate: Date;
  paymentDate: Date;
  isPaid: boolean;
  isPastDue: boolean;
}

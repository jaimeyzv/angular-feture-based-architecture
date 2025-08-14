export interface InstallmentListModel {
  loanId: number;
  installmentId: number;
  installmentNumber: number;
  amount: number;
  dueDate: Date;
  isPaid: boolean;
}

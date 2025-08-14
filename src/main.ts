import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter, Routes } from '@angular/router';
import { LoanListComponent } from './app/features/loans/components/loan-list/loan-list.component';
import { LoanCreateComponent } from './app/features/loans/components/loan-create/loan-create.component';
import { InstallmentListComponent } from './app/features/installments/components/installment-list/installment-list.component';
import { InstallmentPayComponent } from './app/features/installments/components/installment-pay/installment-pay.component';

const routes: Routes = [
  {
    path: 'loans',
    children: [
      { path: '', component: LoanListComponent },
      { path: 'create', component: LoanCreateComponent },
      {
        path: ':loanId', // /loans/:loanId
        children: [
          { path: 'installments', component: InstallmentListComponent }, // /loans/:loanId/installments
          { path: 'installments/:installmentId/pay', component: InstallmentPayComponent },
        ],
      },
      { path: '', redirectTo: 'loans', pathMatch: 'full' }, // default redirect
    ],
  },
];

bootstrapApplication(App, {
  ...appConfig,
  providers: [...(appConfig.providers ?? []), provideRouter(routes)],
}).catch((err) => console.error(err));

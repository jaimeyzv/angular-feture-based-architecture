import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter, Routes } from '@angular/router';
import { LoanListComponent } from './app/features/loans/components/loan-list/loan-list.component';
import { LoanCreateComponent } from './app/features/loans/components/loan-create/loan-create.component';

const routes: Routes = [
  {
    path: '',
    //component: App,
    children: [
      { path: 'loans', component: LoanListComponent },
      { path: 'loans/create', component: LoanCreateComponent },
      { path: '', redirectTo: 'loans', pathMatch: 'full' }, // default redirect
    ],
  },
];

bootstrapApplication(App, {
  ...appConfig,
  providers: [...(appConfig.providers ?? []), provideRouter(routes)],
}).catch((err) => console.error(err));

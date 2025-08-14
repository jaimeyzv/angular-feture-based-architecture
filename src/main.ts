import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { LoadCreate } from './app/features/loans/components/load-create/load-create';
import { provideRouter, Routes } from '@angular/router';
import { LoanList } from './app/features/loans/components/loan-list/loan-list';

const routes: Routes = [
  {
    path: '',
    //component: App,
    children: [
      { path: 'loans', component: LoanList },
      { path: 'loans/create', component: LoadCreate },
      { path: '', redirectTo: 'loans', pathMatch: 'full' }, // default redirect
    ],
  },
];

bootstrapApplication(App, {
  ...appConfig,
  providers: [...(appConfig.providers ?? []), provideRouter(routes)],
}).catch((err) => console.error(err));

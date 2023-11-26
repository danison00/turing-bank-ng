import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import { AuthorizedGuard } from './security/authorized.guard';
import { AccountDataComponent } from './pages/fragments/account-data/account-data.component';
import { HistoryComponent } from './pages/history/history.component';
import { TransferComponent } from './pages/transfer/transfer.component';
import { FavComponent } from './pages/fav/fav.component';


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthorizedGuard],
    children:[
      {path: "account-data", component: AccountDataComponent},
      {path: "deposit", component: DepositComponent},
      {path: "history", component: HistoryComponent},
      {path: "transfer", component: TransferComponent},
      {path: "favs", component: FavComponent}

    ]
  },
  { path: "create-account", component: CreateAccountComponent },
  { path: "deposit", component: DepositComponent },
  { path: "**", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

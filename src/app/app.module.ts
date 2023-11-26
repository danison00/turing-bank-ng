import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MenuFuncComponent } from './pages/fragments/menu-func/menu-func.component';
import { AccountInfoComponent } from './pages/fragments/account-info/account-info.component';
import { CarrousselComponent } from './components/carroussel/carroussel.component';
import { AccountDataComponent } from './pages/fragments/account-data/account-data.component';
import { ModalComponent } from './components/modal/modal.component';
import { HistoryComponent } from './pages/history/history.component';
import { TransferComponent } from './pages/transfer/transfer.component';
import { FavComponent } from './pages/fav/fav.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    LoginComponent,
    CreateAccountComponent,
    DepositComponent,
    HeaderComponent,
    HomeComponent,
    CardComponent,
    MenuFuncComponent,
    AccountInfoComponent,
    CarrousselComponent,
    AccountDataComponent,
    ModalComponent,
    HistoryComponent,
    TransferComponent,
    FavComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, catchError, interval, map, of, switchMap, throwError } from 'rxjs';
import { AccountData } from "../models/accountData.js"
import { DepositDataAccount } from '../models/DepositDataAccount.js';
import { Transfer } from '../models/transfer.js';

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  accountData: AccountData = {
    name: '',
    cpf: '',
    email: '',
    telephone: '',
    number: '',
    balance: '',
    openingDate: '',
    deposits: [],
    tranfersReceived: [],
    tranfersSend: [],
    favoritesAccounts: []
  };


  constructor(private http: HttpClient) {
  }



  public getData(): Observable<AccountData> {

    return interval(2500).pipe(
      switchMap(() =>


        this.http.get("/api/my-account", { observe: 'response' }).pipe(
          map((res: HttpResponse<any>) => {


            if (res.ok) {


              const data = res.body;

              this.accountData = {
                name: data.name,
                cpf: data.cpf,
                email: data.email,
                telephone: data.telephone,
                number: data.number,
                openingDate: data.openingDate,
                balance: data.balance,
                deposits: data.deposits,
                favoritesAccounts: data.favoritesAccounts,
                tranfersReceived: data.tranfersReceived,
                tranfersSend: data.tranfersSend
              };
            }

            return this.accountData;
          }),
          catchError((error) => {
            console.log(error);
            return of(error);
          })
        )
      )
    );

  }
  public checkAccoutExist(accountNumber: string): Observable<DepositDataAccount | boolean | Transfer> {



    return this.http.get("/api/public/transaction/deposit/check?accountNumber=" + accountNumber, { observe: "response" }).pipe(
      map((response: HttpResponse<any>) => {



        const depositAccountData: DepositDataAccount = {
          name: response.body.name,
          accountNumber: response.body.accountNumber,
          value: 0
        }

        return depositAccountData;



      }), catchError((error) => {
        return of(false);

      })
    );

  }
  public depositar(deposit: DepositDataAccount): Observable<boolean> {
    return this.http.post('/api/public/transaction/deposit', deposit, { observe: "response" }).pipe(
      map((response: HttpResponse<any>) => {

        return true;

      }), catchError((error) => {
        return of(false);

      })
    );
  }


  public transferir(transfer: Transfer): Observable<boolean> {

    const data = {
      accountDestination: transfer.accountDestination,
      value: transfer.value,
      saveDestination: transfer.saveDestination

    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });



    return this.http.post('/api/transaction/transfer', data, { headers, observe: "response" }).pipe(
      map((res: HttpResponse<any>) => {

        return true;

      }), catchError((error) => {
        console.log(error);

        throw new Error(error.error.message);

      })
    );
  }

}

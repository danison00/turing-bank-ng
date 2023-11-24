import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { AccountData } from "../interfaces/accountData.js"

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  accountData! : AccountData;

  constructor(private http: HttpClient) {

  }

  public getData(): Observable<AccountData>{




    return this.http.get("/api/my-account", {observe: 'response'}).pipe(
      map((res:  HttpResponse<any>)=>{


          const data = res.body;

         this.accountData = {
              name : data.name,
              cpf : data.cpf,
              email : data.email,
              telephone : data.telephone,
              number : data.number,
              openingDate: data.openingDate,
              balance : data.balance,
              deposits : data.deposits,
              favoritesAccounts : data.favoritesAccounts,
              tranfersReceived : data.tranfersReceived,
              tranfersSend: data.tranfersSend

          }

           return this.accountData;


      }), catchError((error)=>{
        alert(error);
        console.log(error);

        return of(error);
      })

    );
  }
}

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { CreateAccData } from '../models/createAcc';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {


  constructor(private httpcliente: HttpClient) { }

  verifyUsernameAlreadyExists(username: string): Observable<boolean> {
    const url: string = "/api/public/username-not-exists/";
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.httpcliente.get(url+username, { headers, observe: 'response' })
      .pipe(
        map((res: HttpResponse<any>) => {
          console.log(res);
          
          return true;

        }),
        catchError(e => {
          throw new Error(e);
        })
      );

  }

  createAcc(data: CreateAccData): Observable<boolean> {

    const url: string = "/api/public/account";
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });


    console.log(data);

    
    return this.httpcliente.post(url, data, { headers, observe: 'response' })
      .pipe(
        map((resp) => {
          
          return true;

        }),
        catchError(e => {
          throw new Error(e);
        })
      );

  }
}

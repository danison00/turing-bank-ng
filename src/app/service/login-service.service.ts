import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { ResponseDto } from '../models/responseDto';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  url: string = "/api/public/auth/login";

   constructor(private httpcliente: HttpClient) { }

  public login(username: string, pasword: string): Observable<ResponseDto> {


    const user = {
      username: username,
      password: pasword
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Adicione outros cabeçalhos se necessário
    });


    return this.httpcliente.post(this.url, user, {headers, observe: 'response'})
     .pipe(
       map((res: HttpResponse<any>) => {



          const response : ResponseDto = {
            statusCode : res.status,
            message : "OK"
          }

          return response;

       }),
      catchError(e => {

        const response : ResponseDto = {
          statusCode : e.error.statusCode,
          message : e.error.message
        }

        return of(response); // Retorna um Observable indicando que o login falhou
      })
     );
  }
  public logout(): Observable<boolean>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.httpcliente.get("/api/auth/logout",  {headers, observe: 'response'}).pipe(
      map((res=>{
          return true;
      }))

    );
  }
}

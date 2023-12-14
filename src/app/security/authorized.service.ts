import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedService {

  constructor() { }


  public isAuthenticated(): boolean {
    if (this.getCookie("isAuth"))
      return true;
    return false;
  }

  public logout() {

  }

  getCookie(name: string) {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();

      if (cookie.startsWith(name + '=')) {

        return cookie.substring(name.length + 1);
      }
    }

    // Retorna null se o cookie não for encontrado
    return null;
  }




}

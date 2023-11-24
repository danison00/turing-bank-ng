import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedAccountDataHomeService {

  constructor() { }

  private evento$ = new Subject<void>();

  emitirEvento() {
    this.evento$.next();
  }

  getEvento$() {
    return this.evento$.asObservable();
  }
}

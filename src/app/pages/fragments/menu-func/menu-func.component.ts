import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-func',
  templateUrl: './menu-func.component.html',
  styleUrls: ['./menu-func.component.scss']
})
export class MenuFuncComponent {

  constructor(private router: Router){}
  @Output() slide2$ : EventEmitter<void> = new EventEmitter<void>();

  slide2(){
    this.slide2$.emit();
  }
  view(view: string){
    this.router.navigate(["home", view]);
    this.slide2();
  }
}

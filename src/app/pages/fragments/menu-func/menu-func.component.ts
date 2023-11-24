import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-func',
  templateUrl: './menu-func.component.html',
  styleUrls: ['./menu-func.component.scss']
})
export class MenuFuncComponent {

  @Output() viewDataEvent : EventEmitter<number> = new EventEmitter<number>();

  view(event: number){
    this.viewDataEvent.emit(event);
  }

}

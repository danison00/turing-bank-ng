import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() text : string = "";
  @Input() typeBtn : "primary" | "secondary" | "terciary" | "circle" = "primary";
  @Input() size : "normal" | "small"  = "normal";

  @Input() icon: string = "";
  @Input() pathIcon = "";
  width = 0;
  @Input() classe = "";

  @Output() eventClick: EventEmitter<void> = new EventEmitter<void> ();


  clickEvent(){

    this.eventClick.emit();
  }

}

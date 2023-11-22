import { Component, Input, OnInit, Output } from '@angular/core';

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
  @Input() icon: string = "";
  @Input() pathIcon = "";
  width = 0;
  @Input() classe = "";


  clickEvent(){
  

  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() type: string = "text";
  @Input() textAlert: string = "";
  @Input() alertInput = false;
  @Input() isMoed = false;
  @Output() eventChange: EventEmitter<string> = new EventEmitter<string>();

  content: string = "";

  emitirContent() {

    if (this.isMoed) {
      this.mascaraMoeda();
    }


    this.eventChange.emit(this.content);

  }
  removeAlert() {
    this.textAlert = "";
    this.alertInput = false;
  }


  mascaraMoeda() {
    // if (this.content == "") {

    //   this.content = "R$ 0,00";
    //   return;
    // }
    // if (this.content == "R$ 0,0") {
    //   this.content = "R$ 0,00";
    //   return;
    // }
    const value = parseFloat(this.content.replace(/\D/g, '')); // Remove todos os não-dígitos
    if (Number.isNaN(value)) { this.content = "R$ "; return; }

    var formattedValue = "R$ " + (value / 100).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    this.content = formattedValue;

  }
}

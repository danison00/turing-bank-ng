import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() show = false;

  @Input() typeModal: "success" | "danger" | "normal" = "normal";

  @Output() eventClose: EventEmitter<void> = new EventEmitter<void>();
  @Output() eventConfirm: EventEmitter<void> = new EventEmitter<void>();



  close() {
    this.eventClose.emit();
  }
  confirm() {
    this.eventConfirm.emit();
  }
}

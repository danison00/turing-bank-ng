import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent  implements OnDestroy{
  ngOnDestroy(): void {
    this.spinnerOn = false;
  }

  @Input() show = false;

  @Input() typeModal: "success" | "danger" | "normal" = "normal";

  @Output() eventClose: EventEmitter<void> = new EventEmitter<void>();
  @Output() eventConfirm: EventEmitter<void> = new EventEmitter<void>();

  spinnerOn = false;

  close() {
    this.eventClose.emit();
  }
  confirm() {
    this.spinnerOn = true;
    this.eventConfirm.emit();
  }
}

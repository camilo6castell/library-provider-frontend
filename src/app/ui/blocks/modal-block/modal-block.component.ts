import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-block',
  standalone: true,
  imports: [],
  templateUrl: './modal-block.component.html',
  styleUrl: './modal-block.component.css',
})
export class ModalBlockComponent {
  @Input() dataSave: any;
  @Output() visible = new EventEmitter<boolean>();

  closeModal() {
    this.visible.emit(false);
  }
}

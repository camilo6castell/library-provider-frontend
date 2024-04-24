import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-block',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './modal-block.component.html',
  styleUrl: './modal-block.component.css',
})
export class ModalBlockComponent {
  @Input() dataSave: any;
  @Input() dataWholesaleQuoteModal: any;
  @Input() dataBudgetSale: any;
  @Output() visible = new EventEmitter<boolean>();

  closeModal() {
    localStorage.removeItem('resultWholesaleQuoteModal');
    this.visible.emit(false);
  }
}

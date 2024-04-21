import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-element',
  standalone: true,
  imports: [],
  templateUrl: './button-element.component.html',
  styleUrl: './button-element.component.css',
})
export class ButtonElementComponent {
  @Input() textButton: String = '';
  @Output() activateButtonEvent = new EventEmitter<Boolean>();

  activateButton() {
    this.activateButtonEvent.emit(true);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonElementComponent } from '../../elements/button-element/button-element.component';

@Component({
  selector: 'app-navbar-block',
  standalone: true,
  imports: [ButtonElementComponent],
  templateUrl: './navbar-block.component.html',
  styleUrl: './navbar-block.component.css',
})
export class NavbarBlockComponent {
  @Input() isUser: Boolean;
  @Output() closeSessionEvent = new EventEmitter<Boolean>();
  closeSession(closeSession: Boolean) {
    this.closeSessionEvent.emit(closeSession);
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-element',
  standalone: true,
  imports: [],
  templateUrl: './button-element.component.html',
  styleUrl: './button-element.component.css',
})
export class ButtonElementComponent {
  @Input() textButton: String = '';
}

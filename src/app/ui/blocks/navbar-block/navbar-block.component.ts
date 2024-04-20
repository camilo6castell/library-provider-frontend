import { Component } from '@angular/core';
import { ButtonElementComponent } from '../../elements/button-element/button-element.component';

@Component({
  selector: 'app-navbar-block',
  standalone: true,
  imports: [ButtonElementComponent],
  templateUrl: './navbar-block.component.html',
  styleUrl: './navbar-block.component.css',
})
export class NavbarBlockComponent {}

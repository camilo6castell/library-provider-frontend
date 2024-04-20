import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../ui/layouts/main-layout/main-layout.component';
import { NavbarBlockComponent } from '../../ui/blocks/navbar-block/navbar-block.component';
import { ButtonElementComponent } from '../../ui/elements/button-element/button-element.component';

@Component({
  selector: 'app-home-container',
  standalone: true,
  imports: [MainLayoutComponent, NavbarBlockComponent, ButtonElementComponent],
  templateUrl: './home-container.component.html',
})
export class HomeContainerComponent {}

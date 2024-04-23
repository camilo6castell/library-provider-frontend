import { Component, EventEmitter, Output } from '@angular/core';
import { NavbarBlockComponent } from '../../blocks/navbar-block/navbar-block.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {}

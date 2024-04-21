import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-menu.component.html',
  styleUrl: './home-menu.component.css',
})
export class HomeMenuComponent {}

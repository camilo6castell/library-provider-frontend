import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-block',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './result-block.component.html',
  styleUrl: './result-block.component.css',
})
export class ResultBlockComponent {
  @Input() booksQuote: any[];
  @Input() novelsQuote: any[];
  @Input() summary: any;

  @Input() isResult: string;
}

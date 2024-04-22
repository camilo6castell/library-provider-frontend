import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { IItemTextBatchModel } from '../../../core/models/item-text-batch.model';
import { ITextModel } from '../../../core/models/text.model';

@Component({
  selector: 'app-whole-sale-texts-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './whole-sale-texts-form.component.html',
  styleUrl: './whole-sale-texts-form.component.css',
})
export class WholeSaleTextsFormComponent {
  @Input() textObjects: ITextModel[];
  @Output() createQuote = new EventEmitter<{
    books: IItemTextBatchModel[];
    novels: IItemTextBatchModel[];
  }>();

  quoteForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.quoteForm = this.formBuilder.group({
      textObjects: this.formBuilder.array([]),
    });
  }

  onSubmit() {
    const books: IItemTextBatchModel[] = [];
    const novels: IItemTextBatchModel[] = [];

    const textObjectsFormArray = this.quoteForm.get('textObjects') as FormArray;

    textObjectsFormArray.controls.forEach((control: FormGroup) => {
      const quantity = control.get('quantity').value;
      const type = control.get('type').value;

      if (quantity > 0) {
        if (type === 0) {
          books.push({ index: control.get('id').value, quantity });
        } else if (type === 1) {
          novels.push({ index: control.get('id').value, quantity });
        }
      }
    });

    this.createQuote.emit({ books, novels });
  }
}

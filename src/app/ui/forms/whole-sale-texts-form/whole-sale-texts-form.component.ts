import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IItemTextBatchModel } from '../../../core/models/item-text-batch.model';
import { ITextModel } from '../../../core/models/text.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-whole-sale-texts-form',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './whole-sale-texts-form.component.html',
  styleUrl: './whole-sale-texts-form.component.css',
})
export class WholeSaleTextsFormComponent {
  @Input() texts: ITextModel[];
  @Output() submitForm = new EventEmitter<{
    books: IItemTextBatchModel[];
    novels: IItemTextBatchModel[];
  }>();

  textForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.textForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.texts.forEach((text, index) => {
      this.textForm.addControl(
        `text_${index + 1}`,
        this.formBuilder.control('', Validators.min(1))
      );
    });
  }

  onSubmit(): void {
    const books: IItemTextBatchModel[] = [];
    const novels: IItemTextBatchModel[] = [];

    this.texts.forEach((text) => {
      var indexOf = this.texts.indexOf(text);
      const control = this.textForm.get(`text_${indexOf + 1}`);
      const quantity = control.value;
      if (quantity > 0) {
        const item: IItemTextBatchModel = { index: text.id, quantity };
        if (text.type === 0) {
          novels.push(item);
        } else if (text.type === 1) {
          books.push(item);
        }
      }
    });

    this.submitForm.emit({ books, novels });
  }

  // @Input() textObjects: ITextModel[];
  // @Output() createQuote = new EventEmitter<{
  //   books: IItemTextBatchModel[];
  //   novels: IItemTextBatchModel[];
  // }>();

  // quoteForm: FormGroup;

  // constructor(private formBuilder: FormBuilder) {
  //   this.quoteForm = this.formBuilder.group({
  //     textObjects: this.formBuilder.array([]),
  //   });
  // }

  // onSubmit() {
  //   const books: IItemTextBatchModel[] = [];
  //   const novels: IItemTextBatchModel[] = [];

  //   const textObjectsFormArray = this.quoteForm.get('textObjects') as FormArray;

  //   textObjectsFormArray.controls.forEach((control: FormGroup) => {
  //     const quantity = control.get('quantity').value;
  //     const type = control.get('type').value; // Asegúrate de tener un control 'type' en tu formulario

  //     if (quantity > 0) {
  //       if (type === 0) {
  //         books.push({ index: control.get('id').value, quantity });
  //       } else if (type === 1) {
  //         novels.push({ index: control.get('id').value, quantity });
  //       }
  //     }
  //   });

  //   this.createQuote.emit({ books, novels });
  // }
}

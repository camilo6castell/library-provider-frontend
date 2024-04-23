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
import { StorageService } from '../../../core/services/generals/storage/storage.service';

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
        `text_${index}`,
        this.formBuilder.control('', Validators.min(1))
      );
    });
  }

  // TEXTS RESULT

  onSubmit(): void {
    const books: IItemTextBatchModel[] = [];
    const novels: IItemTextBatchModel[] = [];

    this.texts.forEach((text, index) => {
      const control = this.textForm.get(`text_${index}`);
      const quantity = control.value;

      if (quantity > 0) {
        const item: IItemTextBatchModel = { index: index, quantity };
        if (text.type === 'NOVEL') {
          novels.push(item);
        } else if (text.type === 'BOOK') {
          books.push(item);
        }
      }
    });

    // console.log('resultado form from wholesale:', books, novels);

    this.submitForm.emit({ books, novels });
  }
}

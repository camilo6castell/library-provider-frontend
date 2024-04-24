import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITextModel } from '../../../core/models/text.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-budget-sale-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './budget-sale-form.component.html',
  styleUrl: './budget-sale-form.component.css',
})
export class BudgetSaleFormComponent {
  @Input() texts: ITextModel[];
  @Output() submitForm = new EventEmitter<{
    textsIndices: number[];
    budget: number;
  }>();

  textForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.textForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.initForm();
    localStorage.removeItem('resultWholesaleQuoteModal');
  }

  private initForm(): void {
    this.textForm.addControl('budget', this.formBuilder.control(''));
    this.texts.forEach((text, index) => {
      this.textForm.addControl(
        `text_${index}`,
        this.formBuilder.control(false)
      ); // Use text.id for unique control names
    });
  }

  onSubmit(): void {
    localStorage.removeItem('resultBudgetSale');
    const selectedTexts: number[] = [];
    const budget = this.textForm.get('budget').value;

    this.texts.forEach((text, index) => {
      const control = this.textForm.get(`text_${index}`);
      if (control.value) {
        selectedTexts.push(index);
      }
    });

    this.submitForm.emit({ textsIndices: selectedTexts, budget });
  }
}

// export class BudgetSaleFormComponent {
//   @Input() texts: ITextModel[];
//   @Output() submitForm = new EventEmitter<{
//     books: IItemTextBatchModel[];
//     novels: IItemTextBatchModel[];
//   }>();

//   textForm: FormGroup;

//   constructor(private formBuilder: FormBuilder) {
//     this.textForm = this.formBuilder.group({});
//   }

//   ngOnInit(): void {
//     this.initForm();
//     localStorage.removeItem('resultWholesaleQuoteModal');
//   }

//   private initForm(): void {
//     this.texts.forEach((text, index) => {
//       this.textForm.addControl(
//         `text_${index}`,
//         this.formBuilder.control('', Validators.min(1))
//       );
//     });
//   }

//   // TEXTS RESULT

//   onSubmit(): void {
//     const books: IItemTextBatchModel[] = [];
//     const novels: IItemTextBatchModel[] = [];

//     this.texts.forEach((text, index) => {
//       const control = this.textForm.get(`text_${index}`);
//       const quantity = control.value;

//       if (quantity > 0) {
//         const item: IItemTextBatchModel = { index: index, quantity };
//         if (text.type === 'NOVEL') {
//           novels.push(item);
//         } else if (text.type === 'BOOK') {
//           books.push(item);
//         }
//       }
//     });

//     // console.log('resultado form from wholesale:', books, novels);

//     this.submitForm.emit({ books, novels });
//   }
// }

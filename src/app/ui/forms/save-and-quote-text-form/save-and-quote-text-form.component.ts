import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ISaveAndQuoteTexModel } from '../../../core/models/save-and-quote-text.model';
import { StorageService } from '../../../core/services/generals/storage/storage.service';

@Component({
  selector: 'app-save-and-quote-text-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './save-and-quote-text-form.component.html',
  styleUrl: './save-and-quote-text-form.component.css',
})
export class SaveAndQuoteTextFormComponent {
  @Output() newSaveAndQuoteTexEvent = new EventEmitter<ISaveAndQuoteTexModel>();
  saveAndQuoteForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.saveAndQuoteForm = this.formBuilder.group({
      title: ['', Validators.required],
      type: [0, Validators.required],
      basePrice: [null, [Validators.required, Validators.min(0)]],
    });
  }

  submitForm() {
    var newSaveandQuoteTextObject = {} as ISaveAndQuoteTexModel;
    if (this.saveAndQuoteForm.valid) {
      newSaveandQuoteTextObject.text = this.saveAndQuoteForm.value;
      newSaveandQuoteTextObject.token = this.storageService.get('TOKEN');
      this.newSaveAndQuoteTexEvent.emit(newSaveandQuoteTextObject);
      // Realizar acciones cuando el formulario es válido
    } else {
      alert('Formulario inválido');
    }
  }
}

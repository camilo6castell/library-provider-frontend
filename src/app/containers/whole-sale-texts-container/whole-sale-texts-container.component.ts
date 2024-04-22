import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainLayoutComponent } from '../../ui/layouts/main-layout/main-layout.component';
import { NavbarBlockComponent } from '../../ui/blocks/navbar-block/navbar-block.component';
import { ButtonElementComponent } from '../../ui/elements/button-element/button-element.component';
import { WholeSaleTextsFormComponent } from '../../ui/forms/whole-sale-texts-form/whole-sale-texts-form.component';
import { wholeSaleTextsFacade } from './whole-sale-texts.facade';
import { Observable } from 'rxjs';
import { ITextModel } from '../../core/models/text.model';
import { AsyncPipe } from '@angular/common';
import { StorageService } from '../../core/services/generals/storage/storage.service';
import { IItemTextBatchModel } from '../../core/models/item-text-batch.model';
import { ResultBlockComponent } from '../../ui/blocks/result-block/result-block.component';

@Component({
  selector: 'app-whole-sale-texts-container',
  standalone: true,
  imports: [
    MainLayoutComponent,
    NavbarBlockComponent,
    ButtonElementComponent,
    WholeSaleTextsFormComponent,
    ResultBlockComponent,
    AsyncPipe,
  ],
  templateUrl: './whole-sale-texts-container.component.html',
})
export class WholeSaleTextsContainerComponent implements OnInit, OnDestroy {
  booksQuote: any[];
  novelsQuote: any[];
  summary: any = [];
  isResult: string = 'none';

  public stockTexts: ITextModel[] = this.storageService.get('textsStock');

  constructor(
    private readonly wholeSaleTextsFacade: wholeSaleTextsFacade,
    private storageService: StorageService
  ) {}
  ngOnInit(): void {
    this.wholeSaleTextsFacade.initSubsciptions();
    // this.initializeSubscriptions();
  }
  ngOnDestroy(): void {
    this.wholeSaleTextsFacade.destroySubscriptions();
  }

  // MINE

  createWholeSaleTextsListener(wholeSaleBatchs: {
    books: IItemTextBatchModel[];
    novels: IItemTextBatchModel[];
  }) {
    // console.log(wholeSaleBatchs.books, wholeSaleBatchs.novels);

    this.isResult = 'contents';
    this.wholeSaleTextsFacade.createWholeSaleTextsFacadeService({
      books: wholeSaleBatchs.books,
      novels: wholeSaleBatchs.novels,
    });
    this.booksQuote = this.storageService.get('booksQuote');
    this.novelsQuote = this.storageService.get('novelsQuote');
    this.summary = this.storageService.get('summary');
  }

  closeSession(closeSession: Boolean) {
    if (closeSession) {
      this.wholeSaleTextsFacade.deleteToken();
    }
  }

  // private initializeSubscriptions(): void {
  //   this.stockTexts$ = this.wholeSaleTextsFacade.stockTexts$();
  // }
}

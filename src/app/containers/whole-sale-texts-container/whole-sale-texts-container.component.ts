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

@Component({
  selector: 'app-whole-sale-texts-container',
  standalone: true,
  imports: [
    MainLayoutComponent,
    NavbarBlockComponent,
    ButtonElementComponent,
    WholeSaleTextsFormComponent,
    AsyncPipe,
  ],
  templateUrl: './whole-sale-texts-container.component.html',
})
export class WholeSaleTextsContainerComponent implements OnInit, OnDestroy {
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
    this.wholeSaleTextsFacade.createWholeSaleTextsFacadeService({
      books: wholeSaleBatchs.books,
      novels: wholeSaleBatchs.novels,
    });
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

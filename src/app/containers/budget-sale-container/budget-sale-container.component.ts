import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../ui/layouts/main-layout/main-layout.component';
import { NavbarBlockComponent } from '../../ui/blocks/navbar-block/navbar-block.component';
import { ButtonElementComponent } from '../../ui/elements/button-element/button-element.component';
import { ModalBlockComponent } from '../../ui/blocks/modal-block/modal-block.component';
import { ITextModel } from '../../core/models/text.model';
import { StorageService } from '../../core/services/generals/storage/storage.service';
import { BudgetSaleFacadeFacade } from './budget-sale.facade';
import { SaveAndQuoteTextFormComponent } from '../../ui/forms/save-and-quote-text-form/save-and-quote-text-form.component';
import { BudgetSaleFormComponent } from '../../ui/forms/budget-sale-form/budget-sale-form.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-budget-sale-container',
  standalone: true,
  imports: [
    NgClass,
    MainLayoutComponent,
    NavbarBlockComponent,
    ButtonElementComponent,
    ModalBlockComponent,
    BudgetSaleFormComponent,
  ],
  templateUrl: './budget-sale-container.component.html',
})
export class BudgetSaleContainerComponent {
  public stockTexts: ITextModel[] = this.storageService.get('textsStock');
  // session
  isUser: Boolean;
  //
  booksQuote: any[];
  novelsQuote: any[];
  summary: any = [];

  constructor(
    private readonly budgetSaleFacadeFacade: BudgetSaleFacadeFacade,
    private storageService: StorageService
  ) {}
  ngOnInit(): void {
    this.isUser = this.budgetSaleFacadeFacade.isUser();
    this.budgetSaleFacadeFacade.getStockTextsFecadeService();
    this.budgetSaleFacadeFacade.initSubsciptions();

    // this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.budgetSaleFacadeFacade.destroySubscriptions();
  }

  // MINE

  createBudgetSaleListener(budgetSaleEvent: {
    textsIndices: number[];
    budget: number;
  }) {
    this.budgetSaleFacadeFacade.createBudgetSaleFacadeService(budgetSaleEvent);

    this.isModal = true;
    this.dataBudgetSale = this.storageService.get('resultBudgetSale');
    console.log('***************************************', this.dataBudgetSale);
  }

  closeSession(closeSession: Boolean) {
    if (closeSession) {
      this.budgetSaleFacadeFacade.deleteToken();
    }
  }

  // MODAL
  isModal: boolean = true;
  dataBudgetSale: any = undefined;

  closeModal(visible: boolean) {
    this.isModal = visible;
  }

  // private initializeSubscriptions(): void {
  //   this.stockTexts$ = this.wholeSaleTextsFacade.stockTexts$();
  // }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainLayoutComponent } from '../../ui/layouts/main-layout/main-layout.component';
import { NavbarBlockComponent } from '../../ui/blocks/navbar-block/navbar-block.component';
import { ButtonElementComponent } from '../../ui/elements/button-element/button-element.component';
import { WholeSaleTextsFormComponent } from '../../ui/forms/whole-sale-texts-form/whole-sale-texts-form.component';
import { wholeSaleTextsFacade } from './whole-sale-texts.facade';
import { Observable } from 'rxjs';
import { ITextModel } from '../../core/models/text.model';
import { AsyncPipe } from '@angular/common';

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
  public stockTexts$: Observable<ITextModel[]>;

  constructor(private readonly wholeSaleTextsFacade: wholeSaleTextsFacade) {}
  ngOnInit(): void {
    this.wholeSaleTextsFacade.initSubsciptions();
    this.wholeSaleTextsFacade.getStockTexts();
    this.initializeSubscriptions();
  }
  ngOnDestroy(): void {
    this.wholeSaleTextsFacade.destroySubscriptions();
  }

  // MINE

  closeSession(closeSession: Boolean) {
    if (closeSession) {
      this.wholeSaleTextsFacade.deleteToken();
    }
  }

  private initializeSubscriptions(): void {
    this.stockTexts$ = this.wholeSaleTextsFacade.stockTexts$();
  }
}

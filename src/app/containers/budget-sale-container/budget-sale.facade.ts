import { Observable, Subscription, tap } from 'rxjs';
import { AppState } from '../../core/state/app.state';
import { UserService } from '../../core/services/user/user.service';
import { ISignupModel } from '../../core/models/signup.model';
import { StorageService } from '../../core/services/generals/storage/storage.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IGetStockTextsModel } from '../../core/models/get-stock-texts.model';
import { ITextModel } from '../../core/models/text.model';
import { IItemTextBatchModel } from '../../core/models/item-text-batch.model';

@Injectable({
  providedIn: 'root',
})
export class BudgetSaleFacadeFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly userService: UserService,
    private readonly storageService: StorageService,
    private router: Router,
    private readonly appState: AppState
  ) {}

  // region observables

  stockTexts$(): Observable<ITextModel[]> {
    return this.appState.user.stockTexts.$();
  }

  //#endregion

  //#region public methods
  initSubsciptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  deleteToken(): void {
    // this.userService.isAuthenticated = false;
    this.storageService.remove('TOKEN');
    this.router.navigate(['/login']);
  }

  getStockTextsFecadeService(): void {
    this.userService
      .getStockTextsService({ getStock: true })
      .pipe(
        tap((data: any) => {
          this.storageService.set('textsStock', data.textsStock);
        })
      )
      .subscribe();
  }

  //

  budgetSaleResult$(): Observable<any> {
    return this.appState.user.budgetSaleResult$.$();
  }

  createBudgetSaleFacadeService(body: {
    textsIndices: number[];
    budget: number;
  }): void {
    this.subscriptions.add(
      this.userService
        .budgetSaleService({
          textsIndices: body.textsIndices,
          budget: body.budget,
          token: `Bearer ${this.storageService.get('TOKEN')}`,
        })
        .pipe(
          tap(
            this.appState.user.budgetSaleResult$.set.bind(this)

            // (data) => {
            // alert(JSON.stringify(data));

            // this.storageService.set('resultBudgetSale', {
            //   suggestedTextsBatch: data.suggestedTextsBatch,
            //   quoteSummary: data.quoteSummary,
            //   messageFromServer: data.messageFromServer,
            // });
            // alert(
            //   JSON.stringify({
            //     booksQuote: data.booksQuote,
            //     novelsQuote: data.booksQuote,
            //     summary: data.summary,
            //   })
            // );
            // alert(JSON.stringify(data.booksQuote));
            // alert(JSON.stringify(data.novelsQuote));
            // alert(JSON.stringify(data.summary));
            // console.log(data.booksQuote, data.novelsQuote, data.summary);
            // }
          )
        )
        .pipe(
          tap((data) => {
            console.log('data: ', data);
            console.log('this', this.appState.user.budgetSaleResult$.$());
          })
        )
        .subscribe()
    );
  }

  //SESSION
  isUser(): Boolean {
    if (this.storageService.get('TOKEN')) {
      return true;
    } else {
      return false;
    }
  }
}

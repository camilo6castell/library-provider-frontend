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
export class wholeSaleTextsFacade {
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
    this.userService.getStockTextsService({ getStock: true }).subscribe();
  }

  //

  createWholeSaleTextsFacadeService(body: {
    books: IItemTextBatchModel[];
    novels: IItemTextBatchModel[];
  }): void {
    this.subscriptions.add(
      this.userService
        .wholeSaleTextsService({
          bookIndicesAndQuantity: body.books,
          novelIndicesAndQuantity: body.novels,
          token: `Bearer ${this.storageService.get('TOKEN')}`,
        })
        .pipe(
          tap((data) => {
            console.log(data);
            this.storageService.set('booksQuote', data.booksQuote);
            this.storageService.set('novelsQuote', data.booksQuote);
            this.storageService.set('summary', data.summary);
            // alert(JSON.stringify(data.booksQuote));
            // alert(JSON.stringify(data.novelsQuote));
            // alert(JSON.stringify(data.summary));
            // console.log(data.booksQuote, data.novelsQuote, data.summary);
          })
        )
        .subscribe()
    );
  }
}

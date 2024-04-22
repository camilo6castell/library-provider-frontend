import { Observable, Subscription, tap } from 'rxjs';
import { AppState } from '../../core/state/app.state';
import { UserService } from '../../core/services/user/user.service';
import { ISignupModel } from '../../core/models/signup.model';
import { StorageService } from '../../core/services/generals/storage/storage.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ISaveAndQuoteTexModel } from '../../core/models/save-and-quote-text.model';

@Injectable({
  providedIn: 'root',
})
export class SaveAndQuoteTextFecade {
  private subscriptions: Subscription;

  constructor(
    private readonly userService: UserService,
    private readonly storageService: StorageService,
    private router: Router
  ) {}

  // region observables
  // user$(): Observable<ISignupModel> {
  //   return this.appState.user.user.$();
  // }
  //#endregion

  //#region public methods
  initSubsciptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  saveAndQuoteTextFecadeService(body: ISaveAndQuoteTexModel): void {
    this.userService
      .saveAndQuoteTextService(body)
      .pipe(
        tap((data) => {
          console.log('saveandquote new', data);
          alert(
            `El texto ha sido agregado, serás redirigido al menú anterior: cotización: ${JSON.stringify(
              data
            )}`
          );
          this.router.navigate(['/home']);
        })
      )
      .subscribe();
  }

  deleteToken(): void {
    // this.userService.isAuthenticated = false;
    this.storageService.remove('TOKEN');
    this.router.navigate(['/login']);
  }
}

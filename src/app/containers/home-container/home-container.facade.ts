import { Observable, Subscription, tap } from 'rxjs';
import { AppState } from '../../core/state/app.state';
import { UserService } from '../../core/services/user/user.service';
import { ISignupModel } from '../../core/models/signup.model';

export class HomeContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly appState: AppState,
    private readonly userService: UserService
  ) {}

  // region observables
  user$(): Observable<ISignupModel> {
    return this.appState.user.user.$();
  }
  //#endregion

  //#region public methods
  initSubsciptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  // getUsers(): void {
  //   this.subscriptions.add(
  //     this.userService
  //       .getUser()
  //       .pipe(tap(this.appState.user.user.set.bind(this)))
  //       .subscribe()
  //   );
  // }
  //#endregion
}

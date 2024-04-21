import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../ui/layouts/main-layout/main-layout.component';
import { NavbarBlockComponent } from '../../ui/blocks/navbar-block/navbar-block.component';
import { ButtonElementComponent } from '../../ui/elements/button-element/button-element.component';
import { SaveAndQuoteTextFecade } from './save-and-quote-text.fecade';

@Component({
  selector: 'app-save-and-quote-text-container',
  standalone: true,
  imports: [MainLayoutComponent, NavbarBlockComponent, ButtonElementComponent],
  templateUrl: './save-and-quote-text-container.component.html',
})
export class SaveAndQuoteTextContainerComponent {
  constructor(
    private readonly saveAndQuoteTextFacade: SaveAndQuoteTextFecade
  ) {}
  // ngOnInit(): void {
  //   this.homeContainerFacade.initSubsciptions();
  //   // this.homeContainerFacade.getUsers();
  //   this.initializeSubscriptions();

  // public user$: Observable<ISignupModel>;
  // }
  // ngOnDestroy(): void {
  //   this.homeContainerFacade.destroySubscriptions();
  // }
  // private initializeSubscriptions(): void {
  //   this.user$ = this.homeContainerFacade.user$();
  // }

  closeSession(closeSession: Boolean) {
    if (closeSession) {
      this.saveAndQuoteTextFacade.deleteToken();
    }
  }
}
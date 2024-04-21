import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../ui/layouts/main-layout/main-layout.component';
import { NavbarBlockComponent } from '../../ui/blocks/navbar-block/navbar-block.component';
import { ButtonElementComponent } from '../../ui/elements/button-element/button-element.component';
import { SaveAndQuoteTextFecade } from './save-and-quote-text.fecade';
import { SaveAndQuoteTextFormComponent } from '../../ui/forms/save-and-quote-text-form/save-and-quote-text-form.component';
import { ISaveAndQuoteTexModel } from '../../core/models/save-and-quote-text.model';
import { StorageService } from '../../core/services/generals/storage/storage.service';

@Component({
  selector: 'app-save-and-quote-text-container',
  standalone: true,
  imports: [
    MainLayoutComponent,
    NavbarBlockComponent,
    ButtonElementComponent,
    SaveAndQuoteTextFormComponent,
  ],
  templateUrl: './save-and-quote-text-container.component.html',
})
export class SaveAndQuoteTextContainerComponent {
  constructor(
    private readonly saveAndQuoteTextFacade: SaveAndQuoteTextFecade,
    private readonly storageService: StorageService
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

  saveAndQuoteTextListener(newSaveAndQuoteText: ISaveAndQuoteTexModel) {
    // this.newUser = newUser;
    newSaveAndQuoteText.token = `Bearer ${this.storageService.get('TOKEN')}`;
    this.saveAndQuoteTextFacade.initSubsciptions();
    this.saveAndQuoteTextFacade.saveAndQuoteTextFecadeService(
      newSaveAndQuoteText
    );
  }

  ngOnInit(): void {
    // this.facade.initSubsciptions();
    // this.facade.createUser(this.newUser);
    // console.log(localStorage.getItem('TOKEN'));
  }
  ngOnDestroy(): void {
    this.saveAndQuoteTextFacade.destroySubscriptions;
  }

  closeSession(closeSession: Boolean) {
    if (closeSession) {
      this.saveAndQuoteTextFacade.deleteToken();
    }
  }
}

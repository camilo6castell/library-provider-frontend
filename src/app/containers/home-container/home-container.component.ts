import { Component } from '@angular/core';
import { NavbarBlockComponent } from '../../ui/blocks/navbar-block/navbar-block.component';
import { ButtonElementComponent } from '../../ui/elements/button-element/button-element.component';
import { HomeContainerFacade } from './home-container.facade';
import { HomeMenuComponent } from '../../ui/blocks/home-menu/home-menu.component';

@Component({
  selector: 'app-home-container',
  standalone: true,
  imports: [NavbarBlockComponent, ButtonElementComponent, HomeMenuComponent],
  templateUrl: './home-container.component.html',
})
export class HomeContainerComponent {
  isUser: Boolean;
  constructor(private readonly homeContainerFacade: HomeContainerFacade) {}
  ngOnInit(): void {
    this.isUser = this.homeContainerFacade.isUser();
    // this.homeContainerFacade.initSubsciptions();
    // this.homeContainerFacade.getUsers();
    // this.initializeSubscriptions();
  }

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
      this.homeContainerFacade.deleteToken();
    }
  }
}

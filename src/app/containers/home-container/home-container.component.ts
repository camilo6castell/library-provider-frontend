import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainLayoutComponent } from '../../ui/layouts/main-layout/main-layout.component';
import { NavbarBlockComponent } from '../../ui/blocks/navbar-block/navbar-block.component';
import { ButtonElementComponent } from '../../ui/elements/button-element/button-element.component';
import { Observable } from 'rxjs';
import { IUserModel } from '../../core/models/signup.model';
import { HomeContainerFacade } from './home-container.facade';

@Component({
  selector: 'app-home-container',
  standalone: true,
  imports: [MainLayoutComponent, NavbarBlockComponent, ButtonElementComponent],
  templateUrl: './home-container.component.html',
})
export class HomeContainerComponent implements OnInit, OnDestroy {
  public user$: Observable<IUserModel>;

  constructor(private readonly homeContainerFacade: HomeContainerFacade) {}

  ngOnInit(): void {
    this.homeContainerFacade.initSubsciptions();
    // this.homeContainerFacade.getUsers();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.homeContainerFacade.destroySubscriptions();
  }

  private initializeSubscriptions(): void {
    this.user$ = this.homeContainerFacade.user$();
  }
}

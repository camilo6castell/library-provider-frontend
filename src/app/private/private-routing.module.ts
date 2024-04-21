import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { privateGuard } from './private.guard';
import { HomeContainerComponent } from '../containers/home-container/home-container.component';
import { SaveAndQuoteTextContainerComponent } from '../containers/save-and-quote-text-container/save-and-quote-text-container.component';

const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
    canActivate: [privateGuard],
  },
  {
    path: 'save-and-quote-text',
    component: SaveAndQuoteTextContainerComponent,
    canActivate: [privateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}

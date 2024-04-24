import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { privateGuard } from './private.guard';
import { HomeContainerComponent } from '../containers/home-container/home-container.component';
import { SaveAndQuoteTextContainerComponent } from '../containers/save-and-quote-text-container/save-and-quote-text-container.component';
import { WholeSaleTextsContainerComponent } from '../containers/whole-sale-texts-container/whole-sale-texts-container.component';
import { MainLayoutComponent } from '../ui/layouts/main-layout/main-layout.component';
import { BudgetSaleContainerComponent } from '../containers/budget-sale-container/budget-sale-container.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [privateGuard],
    children: [
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
      {
        path: 'whole-sale-texts',
        component: WholeSaleTextsContainerComponent,
        canActivate: [privateGuard],
      },
      {
        path: 'budget-sale-texts',
        component: BudgetSaleContainerComponent,
        canActivate: [privateGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}

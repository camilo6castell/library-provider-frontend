import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { privateGuard } from './private.guard';
import { HomeContainerComponent } from '../containers/home-container/home-container.component';

const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
    canActivate: [privateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}

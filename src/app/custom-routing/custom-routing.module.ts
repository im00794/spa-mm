import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart2Component } from '../cart2/cart2.component';
import { CmsPageGuard } from '@spartacus/storefront';
import { RouterModule, Routes } from '@angular/router';

const STATIC_ROUTES: Routes = [
  {
    path: 'cart2',
    component: Cart2Component,
    canActivate: [CmsPageGuard],
    data: { pageLabel: 'cart' },
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(STATIC_ROUTES)],
})
export class CustomRoutingModule {}

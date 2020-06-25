import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Cart2Component} from '../cart2/cart2.component';
import {CmsPageGuard} from '@spartacus/storefront';
import {RouterModule, Routes} from '@angular/router';
import {PlpComponent} from '../components/demo-plp/plp/plp.component';
import {DemoPlpComponent} from '../components/demo-plp/demo-plp.component';

const STATIC_ROUTES: Routes = [
  { path: 'cart2',
    component: Cart2Component,
    canActivate : [CmsPageGuard],
    data: {pageLabel: 'cart'}
  },
  { path: 'demo-plp',
    component: DemoPlpComponent,
    canActivate : [CmsPageGuard],
    data: {pageLabel: 'search/100'}
  }
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(STATIC_ROUTES)
  ]
})
export class CustomRoutingModule { }

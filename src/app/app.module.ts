import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import {
  AddToCartModule,
  B2cStorefrontModule,
  BannerModule,
  HamburgerMenuModule, LoginFormModule,
  PageLayoutModule, PageSlotModule,
  ProductFacetNavigationModule, ProductListModule
} from '@spartacus/storefront';
import { Cart2Component } from './cart2/cart2.component';
import {CustomRoutingModule} from './custom-routing/custom-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { PlpComponent } from './components/demo-plp/plp/plp.component';
import { DemoPlpComponent } from './components/demo-plp/demo-plp.component';
import { FiltersComponent } from './components/demo-plp/filters/filters.component';
import { PlpItemComponent } from './components/demo-plp/plp/plp-item/plp-item.component';
import {CustomPlpModule} from './custom-plp/custom-plp.module';
import { CustomPdpModule } from './custom-pdp/custom-pdp.module';

@NgModule({
  declarations: [
    AppComponent,
    Cart2Component,
    PlpComponent,
    DemoPlpComponent,
    FiltersComponent,
    PlpItemComponent
  ],

  imports: [
    BrowserModule,
    CustomPdpModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://medicaremarket.local:9002',
          prefix: '/mcmcomspartacus/v2/',
        },
      },
      context: {
        urlParameters: ['baseSite', 'language', 'currency'],
        baseSite: ['medimarket-be'],
        currency: ['EUR'],
        language: ['fr'],
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
      features: {
        level: '2.0',
      },
      routing: {
        routes: {
          product: { paths: ['product/:productCode'] },
        },
      },
    }),
    CustomRoutingModule,
    ReactiveFormsModule,
    BannerModule,
    AddToCartModule,
    HamburgerMenuModule,
    PageLayoutModule,
    ProductFacetNavigationModule,
    CustomPlpModule,
    LoginFormModule,
    PageSlotModule,
    ProductListModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

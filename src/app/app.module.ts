import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {translationChunksConfig, translations} from '@spartacus/assets';
import {
  AddToCartModule,
  B2cStorefrontModule,
  BannerModule,
  CategoryNavigationModule,
  HamburgerMenuModule,
  LoginFormModule,
  PageLayoutModule,
  PageSlotModule,
  ProductFacetNavigationModule,
  ProductListModule,
  SiteContextSelectorModule
} from '@spartacus/storefront';
import {Cart2Component} from './cart2/cart2.component';
import {CustomRoutingModule} from './custom-routing/custom-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {PlpComponent} from './components/plp/plp.component';
import {DemoPlpComponent} from './components/demo-plp/demo-plp.component';
import {FiltersComponent} from './components/demo-plp/filters/filters.component';
import {PlpItemComponent} from './components/plp/plp-item/plp-item.component';
import {CustomPlpModule} from './components/plp/custom-plp/custom-plp.module';
import {CustomPdpModule} from './components/custom-pdp/custom-pdp.module';
import {CustomFooterComponent} from './components/custom-footer/custom-footer.component';
import {CustomHeaderComponent} from './components/custom-header/custom-header.component';
import {CustomBlogComponent} from './components/custom-blog/custom-blog.component';
import {RouterModule} from '@angular/router';
import {UrlModule} from '@spartacus/core';

@NgModule({
  declarations: [
    AppComponent,
    Cart2Component,
    PlpComponent,
    DemoPlpComponent,
    FiltersComponent,
    PlpItemComponent,
    CustomFooterComponent,
    CustomHeaderComponent,
    CustomBlogComponent,
  ],

  imports: [
    BrowserModule,
    CustomPdpModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://local.medi-market.be:9002',
          prefix: '/rest/v2/',
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
          product: {paths: ['product/:productCode']},
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
    ProductListModule,
    RouterModule,
    UrlModule,
    CategoryNavigationModule,
    SiteContextSelectorModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

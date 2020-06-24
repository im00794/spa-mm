import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { Cart2Component } from './cart2/cart2.component';
import {CustomRoutingModule} from './custom-routing/custom-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    Cart2Component
  ],
  imports: [
    BrowserModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://local.medi-market.be:9002',
          prefix: '/rest/v2/'
        }
      },
      context: {
        urlParameters : ['baseSite', 'language', 'currency'],
        baseSite : ['medimarket-be'],
        currency: ['EUR'],
        language: ['fr'],
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '2.0'
      }
    }),
    CustomRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomProductIntroComponent} from './custom-product-intro/custom-product-intro.component';
import {CmsConfig, ConfigModule, UrlModule} from '@spartacus/core';
import {StarRatingModule} from '@spartacus/storefront';
import {FormsModule} from '@angular/forms';
import {AddToCartModalComponent} from './add-to-cart-modal/add-to-cart-modal.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [CustomProductIntroComponent, AddToCartModalComponent],
  imports: [
    CommonModule,
    StarRatingModule,
    FormsModule,
    RouterModule,
    UrlModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CMSTabParagraphContainer: {
          component: CustomProductIntroComponent,
        },
      },
    } as CmsConfig),
  ],
})
export class CustomPdpModule {}

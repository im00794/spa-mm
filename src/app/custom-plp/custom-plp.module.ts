import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CmsConfig, ConfigModule} from '@spartacus/core';
import {PlpComponent} from '../components/demo-plp/plp/plp.component';
import {Cart2Component} from '../cart2/cart2.component';
import {CustomFooterComponent} from '../custom-footer/custom-footer.component';
import {CustomBlogComponent} from '../custom-blog/custom-blog.component';
import {CustomHeaderComponent} from '../custom-header/custom-header.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SearchResultsList: {
          component: PlpComponent
        },
        ProductRefinementComponent: {
          component: PlpComponent
        },
        FooterComponent: {
          component: CustomFooterComponent
        },
        BannerCarouselComponent: {
          component: CustomBlogComponent
        },
        LoginComponent: {
          component: CustomHeaderComponent
        },
        ReturningCustomerLoginComponent: {
          component: Cart2Component
        }
      }
    } as CmsConfig)
  ]
})
export class CustomPlpModule { }

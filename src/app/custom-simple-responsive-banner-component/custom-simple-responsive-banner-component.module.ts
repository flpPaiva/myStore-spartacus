import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { CustomSimpleResponsiveBannerComponentComponent } from './custom-simple-responsive-banner-component.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        // SimpleResponsiveBannerComponent: {
        //   component: CustomSimpleResponsiveBannerComponentComponent
        // }
      }
    } as CmsConfig)
  ]
})
export class CustomSimpleResponsiveBannerComponentModule { }

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyMiniCartComponent } from "./my-mini-cart.component";
import { CmsConfig, ConfigModule, UrlModule } from "@spartacus/core";
import { RouterModule } from "@angular/router";
import { IconModule } from "@spartacus/storefront";

@NgModule({
  declarations: [MyMiniCartComponent],
  imports: [
    CommonModule,
    RouterModule,
    UrlModule,
    IconModule,
    ConfigModule.withConfig({
      cmsComponents: {
        MiniCartComponent: {
          component: MyMiniCartComponent,
        },
      },
    } as CmsConfig),
  ],
})
export class MyMiniCartModule {}

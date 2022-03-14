import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "@spartacus/storefront";
import { AppComponent } from './app.component';
import { CustomRoutingModule } from "./custom-routing/custom-routing.module";
import { SpartacusModule } from './spartacus/spartacus.module';
import { StaticPageComponent } from './static-page/static-page.component';
import { SaleComponent } from './sale/sale.component';
import { PRODUCT_NORMALIZER, UrlModule } from "@spartacus/core";
import { ProductNameNormalizer } from "./product-name-normalizer";
import { ProductCategoryNormalizer } from "./product-category-normalizer";
import { RouterModule } from "@angular/router";
import { ContactComponent } from './contact/contact.component';
import { ProductManufactorerNormalizer } from "./product-manufactorer-normalizer";

@NgModule({
  declarations: [
    AppComponent,
    StaticPageComponent,
    SaleComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    CustomRoutingModule,
    RouterModule,
    UrlModule
  ],
  providers: [
    {provide: PRODUCT_NORMALIZER, useClass: ProductNameNormalizer, multi: true},
    {provide: PRODUCT_NORMALIZER, useClass: ProductCategoryNormalizer, multi: true},
    {provide: PRODUCT_NORMALIZER, useClass: ProductManufactorerNormalizer, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

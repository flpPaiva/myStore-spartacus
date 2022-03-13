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

@NgModule({
  declarations: [
    AppComponent,
    StaticPageComponent,
    SaleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    CustomRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

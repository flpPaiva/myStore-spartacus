import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StaticPageComponent } from '../static-page/static-page.component';
import { CmsPageGuard, PageLayoutComponent } from '@spartacus/storefront';
import { SaleComponent } from '../sale/sale.component';

const STATIC_ROUTES : Routes = [
  {path: 'static-page', component: StaticPageComponent, canActivate: [CmsPageGuard], data: {pageLabel: 'cart'}},
  {path: 'alias/hilfe', component: PageLayoutComponent, canActivate: [CmsPageGuard],  data: {pageLabel: '/faq'}},
  {path: 'sale', component: SaleComponent, canActivate: [CmsPageGuard], data: {pageLabel: '/sale'}}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(STATIC_ROUTES)
  ]
})
export class CustomRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StaticPageComponent } from '../static-page/static-page.component';
import { CmsPageGuard, PageLayoutComponent } from '@spartacus/storefront';
import { SaleComponent } from '../sale/sale.component';
import { ConfigModule, RoutingConfig } from '@spartacus/core';
import { ContactComponent } from '../contact/contact.component';
import { SimpleBannerComponentComponent } from '../components/cms/simple-banner-component/simple-banner-component.component';

const STATIC_ROUTES : Routes = [
  {path: 'static-page', component: StaticPageComponent, canActivate: [CmsPageGuard], data: {pageLabel: 'cart'}},
  {path: 'alias/hilfe', component: PageLayoutComponent, canActivate: [CmsPageGuard],  data: {pageLabel: '/faq'}},
  {path: 'sale', component: SaleComponent, canActivate: [CmsPageGuard], data: {pageLabel: '/sale'}},
  {path: 'contact', component: ContactComponent, canActivate: [CmsPageGuard], data: {pageLabel: '/contact'}},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(STATIC_ROUTES),
    ConfigModule.withConfig({
      routing: {
        routes: {
          product: {
            paths: [
              'oldschool/cameras/:firstCategory/:secoundCategory/:productCode/:name/:manufacturer',
              'oldschool/cameras/:firstCategory/:productCode/:name/:manufacturer',
              'oldschool/cameras/:productCode/:name/:manufacturer',
              'oldschool/cameras/:productCode/:name',
              'oldschool/cameras/:productCode'
            ],
            paramsMapping: {
              name: 'nameForUrl',
              manufacturer: 'manufacturerForUrl'
            }
          } 
        }
      }
    } as RoutingConfig)
  ]
})
export class CustomRoutingModule { }

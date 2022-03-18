import { Component, OnInit } from '@angular/core';
import { CmsBannerComponent } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-simple-responsive-banner-component',
  templateUrl: './custom-simple-responsive-banner-component.component.html',
  styleUrls: ['./custom-simple-responsive-banner-component.component.scss']
})
export class CustomSimpleResponsiveBannerComponentComponent implements OnInit {

  // constructor(public component: CmsComponentData<CmsBannerComponent>) { }
  constructor(public component: CmsComponentData<any>) { }

  ngOnInit(): void {
    this.component.data$.subscribe(console.log)
  }

}

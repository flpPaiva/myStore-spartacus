import { Component, OnInit } from '@angular/core';
import { CmsService, Page } from '@spartacus/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sales',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})

export class SaleComponent implements OnInit {

  idComponents: Array<string> = [];
  components: Array<any> = [];
  currentPage: Page | undefined;
  $currentPage: Observable<Page> = this.cmsService.getCurrentPage();
  constructor(private cmsService: CmsService) { }

  ngOnInit(): void {
    this.$currentPage.subscribe((page: Page) => {
      this.currentPage = page;
      this.getComponents(page);
    });
  }

  getComponents(page: Page) {
    debugger
    this.cmsService.getComponentData('SaleParagraphComponent').subscribe(data => {
      debugger
    })
  }

}

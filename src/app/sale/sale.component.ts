import { Component, OnInit } from "@angular/core";
import { RouterAction } from "@ngrx/router-store";
import { CmsService, Page, ProductSearchService, RoutingService } from "@spartacus/core";
import { SearchResults } from "@spartacus/storefront";
import { Observable } from "rxjs";
import { filter, pluck, take } from "rxjs/operators";

@Component({
  selector: "app-sales",
  templateUrl: "./sale.component.html",
  styleUrls: ["./sale.component.scss"],
})
export class SaleComponent implements OnInit {
  idComponents: Array<string> = [];
  components: Array<any> = [];
  currentPage: Page | undefined;
  $currentPage: Observable<Page> = this.cmsService.getCurrentPage();

  constructor(
    private cmsService: CmsService,
    private routingService: RoutingService,
    private productSearchService: ProductSearchService
  ) {}

  ngOnInit(): void {
    this.$currentPage.subscribe((page: Page) => {
      this.currentPage = page;
      this.getComponents(page);
    });
  }

  getComponents(page: Page) {
    this.cmsService
      .getComponentData("SaleParagraphComponent")
      .subscribe(console.log);
  }

  goToRandomProduct() {
    this.productSearchService.search('cam');
    this.productSearchService.getResults()
    .pipe(
      filter(res => res.hasOwnProperty('products')),
      pluck('products'),
      take(1)
    )
    .subscribe((products : any) => {
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      this.routingService.go({ cxRoute: "product", params: { code: randomProduct.code } });
    }); 
  }
}

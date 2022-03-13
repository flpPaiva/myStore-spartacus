import { Component, OnInit } from '@angular/core';
import { ActiveCartService, OrderEntry } from '@spartacus/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-static-page',
  templateUrl: './static-page.component.html',
  styleUrls: ['./static-page.component.scss']
})

export class StaticPageComponent implements OnInit {

  orderEntries$: Observable<OrderEntry[]> = this.cartService.getEntries();

  constructor(private cartService: ActiveCartService) { }

  ngOnInit(): void {
  }

}

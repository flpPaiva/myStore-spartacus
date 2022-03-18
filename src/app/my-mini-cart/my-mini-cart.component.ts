import { Component, OnInit } from '@angular/core';
import { OrderEntry } from '@spartacus/core';
import { MiniCartComponent } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-mini-cart',
  templateUrl: './my-mini-cart.component.html',
  styleUrls: ['./my-mini-cart.component.scss']
})

export class MyMiniCartComponent extends MiniCartComponent {
  entries$: Observable<OrderEntry[]> = this.activeCartService.getEntries();
 

}

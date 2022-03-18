import { Component, OnInit } from '@angular/core';
import { ActiveCartService, OrderEntry } from '@spartacus/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  entries$: Observable<OrderEntry[]> = this.cartService.getEntries();
  
  constructor(private cartService: ActiveCartService) { }

  ngOnInit(): void {
  }

}

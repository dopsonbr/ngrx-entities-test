import { Component, OnInit } from '@angular/core';
import { Item, ITEMS } from '../mocks/mock-items';
import { State } from '../reducers';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadItems } from './+state/items.actions';
import { getAllItems } from './+state/items.selectors';
import { AddOrderLine } from '../order-lines/+state/order-lines.actions';
import { OrderLine } from '../mocks/mock-order-lines';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'ngrx-test-items',
  template: `
    <mat-list>
      <mat-list-item *ngFor="let item of items | async">
        <h3 matLine>
          <span> {{item.id}} </span>
          <span class="demo-2"> -- {{item.name}} </span>
          <button (click)="addToCart(item)"> add to cart</button>
        </h3>
      </mat-list-item>
    </mat-list>
  `,
  styles: []
})
export class ItemsComponent implements OnInit {

  items: Observable<Item[]>;

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadItems());
    this.items = this.store
      .pipe(
        select(getAllItems)
      );
  }

  addToCart(item: Item) {
    const newOrderLine: OrderLine = {
      id: uuid(), quantity: 1, item
    };
    this.store.dispatch(new AddOrderLine({orderLine: newOrderLine}));
  }

}

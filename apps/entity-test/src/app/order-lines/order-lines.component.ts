import { Component, OnInit } from '@angular/core';
import { OrderLine } from '../mocks/mock-order-lines';
import { Observable, of } from 'rxjs';
import { State } from '../reducers';
import { select, Store } from '@ngrx/store';
import { getAllOrderLines } from './+state/order-lines.selectors';

@Component({
  selector: 'ngrx-test-order-lines',
  template: `
    <mat-list>
      <mat-list-item *ngFor="let ol of orderLines | async">
        <h3 matLine>
          <span> id {{ol.id}} </span>
          <span class="demo-2"> -- qty {{ol.quantity}} </span>
          <span class="demo-2"> -- item id{{ol.item.id}} </span>
          <span class="demo-2"> -- item name{{ol.item.name}} </span>
          <button (click)="addToCarryOut(ol)"> add to carry out</button>
          <button (click)="addToWillCall(ol)"> add to will call</button>
        </h3>
      </mat-list-item>
    </mat-list>
  `,
  styles: []
})
export class OrderLinesComponent implements OnInit {

  orderLines: Observable<OrderLine[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.orderLines = this.store.pipe(select(getAllOrderLines))
  }

  addToCarryOut(ol: OrderLine){

  }

  addToWillCall(ol: OrderLine){}


}

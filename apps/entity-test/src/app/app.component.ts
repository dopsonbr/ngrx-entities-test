import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngrx-test-root',
  template: `
    <mat-toolbar color="primary">
      <button mat-button><a routerLink="items">items</a> </button>
      <button mat-button><a routerLink="order-lines"> orderlines</a></button>
      <button mat-button><a routerLink="fulfillments">fulfillments</a> </button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,

  styles: []
})
export class AppComponent {
  title = 'entity-test';
  constructor(router: Router ){}
}

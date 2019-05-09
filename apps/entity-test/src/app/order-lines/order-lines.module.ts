import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderLinesComponent } from './order-lines.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  ORDERLINES_FEATURE_KEY,
  orderLinesReducer
} from './+state/order-lines.reducer';
import { OrderLinesEffects } from './+state/order-lines.effects';
import { MatListModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    component: OrderLinesComponent

  }
];

@NgModule({
  declarations: [OrderLinesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(ORDERLINES_FEATURE_KEY, orderLinesReducer),
    EffectsModule.forFeature([OrderLinesEffects]),
    MatListModule
  ]
})
export class OrderLinesModule {}

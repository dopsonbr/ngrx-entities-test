import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ORDERLINES_FEATURE_KEY, OrderLinesState, selectAll } from './order-lines.reducer';

// Lookup the 'OrderLines' feature state managed by NgRx
const getOrderLinesState = createFeatureSelector<OrderLinesState>(
  ORDERLINES_FEATURE_KEY
);


export const getAllOrderLines = createSelector(
  getOrderLinesState,
  selectAll
);



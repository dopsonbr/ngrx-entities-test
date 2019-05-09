import { OrderLinesAction, OrderLinesActionTypes } from './order-lines.actions';
import { OrderLine } from '../../mocks/mock-order-lines';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ItemsActionTypes } from '../../items/+state/items.actions';

export const ORDERLINES_FEATURE_KEY = 'orderLines';

/**
 * Interface for the 'OrderLines' data used in
 *  - OrderLinesState, and
 *  - orderLinesReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface OrderLinesState extends EntityState<OrderLine>{}
export const adapter: EntityAdapter<OrderLine> = createEntityAdapter<OrderLine>()

export const initialState = adapter.getInitialState();


export function orderLinesReducer(
  state: OrderLinesState = initialState,
  action: OrderLinesAction
): OrderLinesState {
  switch (action.type) {
    case OrderLinesActionTypes.AddOrderLine: {
      return adapter.addOne(action.payload.orderLine, state);

    }
    default:
      return state;
  }
}

export const {
  selectAll
} = adapter.getSelectors();

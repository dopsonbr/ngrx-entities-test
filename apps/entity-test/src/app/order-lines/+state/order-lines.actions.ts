import { Action } from '@ngrx/store';
import { OrderLine } from '../../mocks/mock-order-lines';

export enum OrderLinesActionTypes {
  AddOrderLine = '[OrderLine] Add order line'
}

export class AddOrderLine implements Action {
  readonly type = OrderLinesActionTypes.AddOrderLine;
  constructor(public payload: {orderLine: OrderLine}){}
}

export type OrderLinesAction =
  | AddOrderLine

export const fromOrderLinesActions = {
  AddOrderLine,
};

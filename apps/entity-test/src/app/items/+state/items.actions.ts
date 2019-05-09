import { Action } from '@ngrx/store';
import { Item } from '../../mocks/mock-items';

export enum ItemsActionTypes {
  LoadItems = '[Items] Load Items',
  ItemsLoaded = '[Items] Items Loaded',
}

export class LoadItems implements Action {
  readonly type = ItemsActionTypes.LoadItems;
}



export class ItemsLoaded implements Action {
  readonly type = ItemsActionTypes.ItemsLoaded;
  constructor(public payload: {items: Item[]}) {}
}

export type ItemsAction = LoadItems | ItemsLoaded ;

export const fromItemsActions = {
  LoadItems,
  ItemsLoaded,
};

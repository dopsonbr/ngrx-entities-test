import { ItemsAction, ItemsActionTypes } from './items.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Item } from '../../mocks/mock-items';

export const ITEMS_FEATURE_KEY = 'items';


export interface ItemsState extends EntityState<Item> {
}

export const adapter: EntityAdapter<Item> = createEntityAdapter<Item>();

export const initialItemsState = adapter.getInitialState();


export function itemsReducer(
  state: ItemsState = initialItemsState,
  action: ItemsAction
): ItemsState {
  switch (action.type) {
    case ItemsActionTypes.ItemsLoaded: {
      return adapter.addAll(action.payload.items, state);

    }
    default:
      return state;
  }
}

export const {
  selectAll,

} = adapter.getSelectors();

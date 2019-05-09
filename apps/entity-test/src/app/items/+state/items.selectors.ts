import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITEMS_FEATURE_KEY, ItemsState, selectAll } from './items.reducer';

// Lookup the 'Items' feature state managed by NgRx
const getItemsState = createFeatureSelector<ItemsState>(ITEMS_FEATURE_KEY);


export const getAllItems = createSelector(
  getItemsState,
  selectAll
);


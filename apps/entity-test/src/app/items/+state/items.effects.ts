import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import {
  LoadItems,
  ItemsLoaded,
  ItemsActionTypes
} from './items.actions';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { ItemsService } from '../items.service';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class ItemsEffects {


  @Effect()
  loadItems$ = this.actions$
    .pipe(
      ofType<LoadItems>(ItemsActionTypes.LoadItems),
      mergeMap(() => this.itemsService.getItems()),
      map(items => new ItemsLoaded({ items }))
    );

  constructor(private actions$: Actions,
              private itemsService: ItemsService,
              private store: Store<State>) {

  }
}

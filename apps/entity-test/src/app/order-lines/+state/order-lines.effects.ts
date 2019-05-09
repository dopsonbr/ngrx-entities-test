import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';


@Injectable()
export class OrderLinesEffects {
  // @Effect() loadOrderLines$ = this.actions$
  //   .pipe(
  //     ofType<LoadOrderLines>(OrderLinesActionTypes.LoadOrderLines),
  //     map(() => new OrderLinesLoaded())
  //   )

  constructor(
    private actions$: Actions
  ) {}
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  ITEMS_FEATURE_KEY,
  itemsReducer
} from './+state/items.reducer';
import { ItemsEffects } from './+state/items.effects';
import { ItemsComponent } from './items.component';
import { MatListModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    component: ItemsComponent

  }
];
@NgModule({
  declarations: [ItemsComponent],
  exports: [ItemsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(ITEMS_FEATURE_KEY, itemsReducer),
    EffectsModule.forFeature([ItemsEffects]),
    MatListModule,
    MatListModule
  ]
})
export class ItemsModule {}

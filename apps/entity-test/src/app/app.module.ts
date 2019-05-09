import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrderViewModule } from './order-view/order-view.module';
import { FulfillmentsModule } from './fulfillments/fulfillments.module';
import { OrderLinesModule } from './order-lines/order-lines.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsModule } from './items/items.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './shared/utils';

const routes = [
  {
    path: 'items',
    loadChildren: './items/items.module#ItemsModule'
  },
  {
    path: 'order-lines',
    loadChildren: './order-lines/order-lines.module#OrderLinesModule'
  },
  {
    path: "**",
    redirectTo: '/'
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    OrderViewModule,
    FulfillmentsModule,
    OrderLinesModule,
    ItemsModule
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

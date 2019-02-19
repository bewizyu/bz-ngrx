import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {coreReducers} from './reducers/core.reducer';
import {NetworkContainerComponent} from './features/network/components/network.container';
import {NetworkEffect} from './features/network/store/network.effects';

export const COMPONENTS = [
  NetworkContainerComponent
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('core', coreReducers),
    EffectsModule.forFeature([
      NetworkEffect,
    ]),
  ],
  declarations: COMPONENTS,
  exports: [
    ...COMPONENTS,
  ],
})
export class BzCoreModule {
}

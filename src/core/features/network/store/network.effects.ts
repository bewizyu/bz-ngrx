import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs';
import {take, tap} from 'rxjs/operators';
import {NetworkProvider} from '../providers/network.provider';
import {NetworkActionTypes} from './network.action';

@Injectable({providedIn: 'root'})
export class NetworkEffect {

  @Effect()
  watchNetwork$: Observable<Action> = this.actions$.pipe(
    ofType(NetworkActionTypes.WATCH_NETWORK.valueOf()),
    take(1),
    tap(() => {
      this.network.startNetworkStatusChanged();
    })
  );

  @Effect()
  unWatchNetwork$: Observable<Action> = this.actions$.pipe(
    ofType(NetworkActionTypes.UNWATCH_NETWORK.valueOf()),
    take(1),
    tap(() => this.network.stopNetworkStatusChanged())
  );

  constructor(private network: NetworkProvider,
              private actions$: Actions) {
  }
}

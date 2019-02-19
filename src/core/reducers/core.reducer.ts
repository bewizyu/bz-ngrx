import {ActionReducerMap} from '@ngrx/store';
import {networkReducer, NetworkState} from '../features/network/store/network.reducer';

/**
 * CoreState interface
 */
export interface CoreState {
  network: NetworkState;
}

/**
 * Core reducers
 */
export const coreReducers: ActionReducerMap<CoreState> = {
  network: networkReducer,
};

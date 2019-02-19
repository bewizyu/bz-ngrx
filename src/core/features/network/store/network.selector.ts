import { createSelector, MemoizedSelector } from '@ngrx/store';
import { CoreState } from '../../../reducers/core.reducer';
import { selectCoreState } from '../../../selectors/core.selector';
import { NetworkType } from '../models/network.model';
import { getCurrentStatus, getIsOffline, NetworkState } from './network.reducer';

/**
 * selectNetwork
 * @type {MemoizedSelector<object, NetworkState>}
 */
export const selectNetwork: MemoizedSelector<object, NetworkState> =
  createSelector(selectCoreState, (state: CoreState) => {
    return state.network;
  });

/**
 * selectStatus
 * @type {MemoizedSelector<object, NetworkType>}
 */
export const selectStatus: MemoizedSelector<object, NetworkType> = createSelector(selectNetwork, getCurrentStatus);

/**
 * selectIsOffline
 * @type {MemoizedSelector<object, boolean>}
 */
export const selectIsOffline: MemoizedSelector<object, boolean> = createSelector(selectNetwork, getIsOffline);

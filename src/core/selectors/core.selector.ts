import {createFeatureSelector, MemoizedSelector} from '@ngrx/store';
import {CoreState} from '../reducers/core.reducer';

/**
 * Get the core state selector
 * @type {MemoizedSelector<object, CoreState>}
 */
export const selectCoreState: MemoizedSelector<object, CoreState> =
  createFeatureSelector<CoreState>('core');

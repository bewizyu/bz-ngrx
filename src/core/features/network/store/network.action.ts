import { Action } from '@ngrx/store';
import { NetworkType } from '../models/network.model';

/**
 * NetworkActionTypes
 *  WATCH_NETWORK
 *  UNWATCH_NETWORK
 *  STATUS_CHANGE_SUCCESS
 */
export enum NetworkActionTypes {
  WATCH_NETWORK         = 'WATCH_NETWORK',
  UNWATCH_NETWORK       = 'UNWATCH_NETWORK',
  STATUS_CHANGE_SUCCESS = 'STATUS_CHANGE_SUCCESS',
}

/**
 * WatchNetwork action
 * start watching network's status
 */
export class WatchNetwork implements Action {
  readonly type = NetworkActionTypes.WATCH_NETWORK;
}

/**
 * UnWatchNetwork action
 * start unwatching network's status
 */
export class UnWatchNetwork implements Action {
  readonly type = NetworkActionTypes.UNWATCH_NETWORK;
}

/**
 * StatusChangeSucess action
 */
export class StatusChangeSuccess implements Action {
  readonly type = NetworkActionTypes.STATUS_CHANGE_SUCCESS;

  constructor(public payload: { status: NetworkType }) {
  }
}

export type NetworkActionsUnion =
  | WatchNetwork
  | UnWatchNetwork
  | StatusChangeSuccess;

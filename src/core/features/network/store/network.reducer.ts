import {NetworkActionsUnion, NetworkActionTypes} from './network.action';
import {NetworkType} from '../models/network.model';

/**
 * NetworkState
 */
export interface NetworkState {
  status: NetworkType;
  isOffline: boolean;
}

const initialState: NetworkState = {
  status: null,
  isOffline: false,
};

/**
 * networkReducer
 */
export function networkReducer(state: NetworkState = initialState, action: NetworkActionsUnion): NetworkState {
  switch (action.type) {
    case NetworkActionTypes.STATUS_CHANGE_SUCCESS:

      const isOffline: boolean =
        action.payload.status === NetworkType.OFFLINE ||
        action.payload.status === NetworkType.NONE;

      return {
        ...state,
        isOffline,
        status: action.payload.status,
      };

    default:
      return state;
  }
}

/**
 * getCurrentStatus
 */
export const getCurrentStatus = (state: NetworkState) => {
  return state.status;
};

/**
 * getIsOffline
 */
export const getIsOffline = (state: NetworkState) => {
  return state.isOffline;
};

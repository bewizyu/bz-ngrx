import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {StatusChangeSuccess} from '../store/network.action';
import {NetworkState} from '../store/network.reducer';

/**
 * Provider for network business
 */
@Injectable({
  providedIn: 'root'
})
export class NetworkProvider {

  constructor(private store: Store<NetworkState>) {
    this.handleConnectivityEvent = this.handleConnectivityEvent.bind(this);
  }

  public getNetworkStatus() {
    return (navigator as any).connection.type;
  }

  /**
   * Start the change observable of Network API
   */
  public startNetworkStatusChanged(): void {
    this.store.dispatch(new StatusChangeSuccess({status: this.getNetworkStatus()}));

    this.stopNetworkStatusChanged();

    window.addEventListener('offline', this.handleConnectivityEvent, false);
    window.addEventListener('online', this.handleConnectivityEvent, false);
  }

  /**
   * Stop the change observable of Network API
   */
  public stopNetworkStatusChanged(): void {
    window.removeEventListener('offline', this.handleConnectivityEvent, false);
    window.removeEventListener('online', this.handleConnectivityEvent, false);
  }

  private handleConnectivityEvent(event) {
    this.store.dispatch(new StatusChangeSuccess({status: event.type}));
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {UnWatchNetwork, WatchNetwork} from '../store/network.action';
import {NetworkState} from '../store/network.reducer';

@Component({
  selector: 'app-network-container',
  template: `
    <div>
      <ng-content></ng-content>
    </div>`
})
export class NetworkContainerComponent implements OnInit, OnDestroy {

  constructor(private store: Store<NetworkState>) {}

  ngOnInit() {
    this.store.dispatch(new WatchNetwork());
  }

  ngOnDestroy() {
    this.store.dispatch(new UnWatchNetwork());
  }
}

import { useStaticRendering } from 'mobx-react';
import { ClickHandleStore } from './clickHandleStore';
import { OrderStore } from './orderStore';

const isServer = !process.browser
useStaticRendering(isServer)

class RootStore {
  constructor(isServer, initialData = {}) {
    this.clickHandleStore = new ClickHandleStore(this);
  }
}

let store = null

export function initializeStore(initialData) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return new RootStore(isServer, initialData)
  }
  if (store === null) {
    store = new RootStore(isServer, initialData)
  }
  return store
}

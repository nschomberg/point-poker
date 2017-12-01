import { LOCAL_STORAGE_KEYS } from 'utils/constants';

export default class Storage {

  static get(key) {
    return window.localStorage.getItem(key);
  }

  static set(key, value) {
    return window.localStorage.setItem(key, value);
  }

}

// Getter/Setter creator function -> curries a key to build getter/setter functions
const storageGetter = key => () => Storage.get(key);
const storageSetter = key => value => Storage.set(key, value);

// Username storage methods
export const getUserName = storageGetter(LOCAL_STORAGE_KEYS.USERNAME);
export const setUserName = storageSetter(LOCAL_STORAGE_KEYS.USERNAME);

// UUID storage methods
export const getUUID = storageGetter(LOCAL_STORAGE_KEYS.UUID);
export const setUUID = storageSetter(LOCAL_STORAGE_KEYS.UUID);

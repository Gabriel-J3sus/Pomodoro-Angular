import { Service } from '@angular/core';
import { StorageKeys } from './storage.service.types';

@Service()
export class StorageService {
  set<T>(key: StorageKeys, value: T) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  get<T>(key: StorageKeys): T | null {
    const value = localStorage.getItem(key)

    if (value === null) return null

    try {
      return JSON.parse(value)
    } catch {
      return null
    }
  }

  remove(key: StorageKeys) {
    localStorage.removeItem(key)
  }

  clear() {
    localStorage.clear()
  }
}

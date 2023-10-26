import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexDbServiceService {
  private db: IDBDatabase | undefined;

  constructor() {
    this.initDatabase();
  }

  private initDatabase() {
    const request = indexedDB.open('MyDatabase', 1);

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (event.target as any).result;
      db.createObjectStore('MyStore', { keyPath: 'id', autoIncrement: true });
    };

    request.onsuccess = (event: Event) => {
      this.db = (event.target as any).result;
    };

    request.onerror = (event: Event) => {
      console.error('Error opening database:', (event.target as any).error);
    };
  }
}

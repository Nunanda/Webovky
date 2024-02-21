import { Injectable } from '@angular/core';
import { User } from '../types';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexDbService {
  private db: IDBDatabase | undefined;
  private dbName: string = 'SelecroDB';
  private dbVersion: number = 1;

  private dbReadySubject = new Subject<void>();
  dbReady$ = this.dbReadySubject.asObservable();

  constructor() {
    this.openDB().then(() => {
      this.dbReadySubject.next();
      console.log('Database opened');
    }).catch(error => {
      console.error('Error opening database:', error);
    });
  }

  openDB(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request: IDBOpenDBRequest = indexedDB.open(this.dbName, this.dbVersion);
      request.onerror = (event: Event) => {
        reject('Error opening database');
      };
      request.onsuccess = (event: Event) => {
        this.db = (event.target as IDBOpenDBRequest).result;
        resolve();
      };
      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        this.db = (event.target as IDBOpenDBRequest).result;

        // Create object stores
        const userPublicStore = this.db.createObjectStore('userPublic', { keyPath: 'id' });
        const userPublicDetailStore = this.db.createObjectStore('userPublicDetail', { keyPath: 'id' });
        const userStore = this.db.createObjectStore('user', { keyPath: 'id' });
        const userLinkStore = this.db.createObjectStore('userLink', { keyPath: 'id' });

        const progressStore = this.db.createObjectStore('progress', { keyPath: 'id'});

        const instructionStore = this.db.createObjectStore('instruction', { keyPath: 'id' });
        const stepProgressStore = this.db.createObjectStore('stepProgress', { keyPath: 'id' });
        const premiumInstruction = this.db.createObjectStore('premiumInstructions', { keyPath: 'id'});
        

        // Create indexes for userLinkStore
        userLinkStore.createIndex('followerId', 'followerId', { unique: false });
        userLinkStore.createIndex('followeeId', 'followeeId', { unique: false });
      };
    });
  }












  // Rest of the methods (addData, getData, updateData, deleteData) remain the same

  addUserRecord(user: User) {
    if (!this.db) {
      console.error('Database is not initialized.');
      return;
    }
    const transaction = this.db.transaction(['User'], 'readwrite');
    const objectStore = transaction.objectStore('User');
    const request = objectStore.add(user);
    request.onsuccess = () => {
      console.log('User record added successfully.');
    };
    request.onerror = (event: Event) => {
      console.error('Error adding User record:', (event.target as any).error);
    };
  }

   async getUserById(userId: string): Promise<User | undefined> {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        console.error('Database is not initialized.');
        reject('Database is not initialized.');
        return;
      }
      const transaction = this.db.transaction(['User'], 'readonly');
      const userStore = transaction.objectStore('User');
      const request = userStore.get(userId);
      request.onsuccess = (event: Event) => {
        const userData = (event.target as IDBRequest).result;
        if (userData !== undefined) {
          resolve(userData);
        } else {
          console.error('User data is undefined for userId:', userId);
          reject('User data not found');
        }
      };
      request.onerror = (event: Event) => {
        console.error('Error retrieving user data:', (event.target as any).error);
        reject('Error retrieving user data');
      };
    });
  }

  updateUserRecord(user: User) {
    if (!this.db) {
      console.error('Database is not initialized.');
      return;
    }
  
    const transaction = this.db.transaction(['User'], 'readwrite');
    const objectStore = transaction.objectStore('User');
  
    // Check if the user exists first
    const getRequest = objectStore.get(user.id);
  
    getRequest.onsuccess = () => {
      const existingUser = getRequest.result;
  
      if (existingUser) {
        // Update the user record with new data
        const updateRequest = objectStore.put(user);
  
        updateRequest.onsuccess = () => {
          console.log('User record updated successfully.');
        };
  
        updateRequest.onerror = (event: Event) => {
          console.error('Error updating User record:', (event.target as any).error);
        };
      } else {
        console.error('User not found.'); // Or handle the scenario if the user doesn't exist
      }
    };
  
    getRequest.onerror = (event: Event) => {
      console.error('Error getting User record for update:', (event.target as any).error);
    };
  }
}

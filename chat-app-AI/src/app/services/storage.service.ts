import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private USERNAME_KEY = 'username';
  private APIKEY_KEY = 'apiKey';

  saveUsername(username: string) {
    localStorage.setItem(this.USERNAME_KEY, username);
  }

  getUsername(): string {
    const username = localStorage.getItem(this.USERNAME_KEY);
    return username || '';
  }

  setApiKey(apiKey: string) {
    localStorage.setItem(this.APIKEY_KEY, apiKey);
  }

  getApiKey(): string {
    const apiKey = localStorage.getItem(this.APIKEY_KEY);
    return apiKey || '';
  }
}

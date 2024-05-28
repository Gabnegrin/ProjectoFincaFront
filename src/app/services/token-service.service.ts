import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  private storageKey: string = 'jwtToken';

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem(this.storageKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.storageKey);
  }

  removeToken(): void {
    localStorage.removeItem(this.storageKey);
  }
}

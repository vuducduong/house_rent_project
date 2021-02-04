import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }
}

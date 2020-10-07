import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {
    const user = localStorage.getItem('user');
    if (user){
      this.authenticated = true;
    }
  }

  private _authenticated: boolean = false;
  
  get authenticated(): boolean {
    return this._authenticated;
  }
  set authenticated(value: boolean) {
    this._authenticated = value;
  }

  login() {
    localStorage.setItem('user', 'authenticated');
    this.authenticated = true;
  }
  logout() {
    localStorage.removeItem('notes');
    localStorage.removeItem('user');
    this.authenticated = false;
  }

  canActivate(): boolean {
    const token = localStorage.getItem('user');
    if (token == null) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}

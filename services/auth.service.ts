import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { ApiService } from './api.service';

import { SignInInfo, AuthResult } from '../models';

@Injectable()
export class AuthService {
  public currentUserSubject: BehaviorSubject<AuthResult>;
  public currentUser: Observable<AuthResult>;

  constructor(private apiService: ApiService, private localStorageService: LocalStorageService) {
    this.currentUserSubject = new BehaviorSubject<AuthResult>(
      this.localStorageService.getLocalStorage('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): AuthResult {
    return this.currentUserSubject.value;
  }

  login(signInInfo: SignInInfo): Observable<any> {
    return this.apiService.post('/auth/login', signInInfo);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}

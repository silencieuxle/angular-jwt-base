import { AuthResult } from '../models';

export class LocalStorageService {
  getToken(): string {
    const authData: AuthResult = this.getLocalStorage('currentUser');
    if (!authData) {
      return '';
    }
    if (authData.timestamp > new Date().getTime()) {
      return authData.token;
    }
    return '';
  }

  setLocalStorage(key: string, value: any) {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  }

  getLocalStorage(key: string): any {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  }

  removeLocalStorage(key: string): any {
    localStorage.removeItem(key);
  }
}

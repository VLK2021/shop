import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(user: any) {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken)
      )
  };

  private setToken(res: any): void {
    if (res) {
      const expData = new Date(new Date().getTime() + +res.expiresIn * 1000);
      localStorage.setItem('fb-token-exp', expData.toString());
      localStorage.setItem('fb-token', res.idToken);
    }else {
      localStorage.clear();
    }
  };

  get token(){
    // @ts-ignore
    const expData = new Date(localStorage.getItem('fb-token-exp'))
    if (new Date > expData) {
      this.logout();
      return null
    }
    return localStorage.getItem('fb-token');
  };

  logout(){
    this.setToken(null)
  };

  isAuthenticated(){
    return !!this.token
  };

}

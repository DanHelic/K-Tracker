import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class Auth{

  constructor(private http: HttpClient) {}

  login(userName: string, password: string){
    return this.http.post<{ accessToken: string }>('/api/auth/login',{
      "user_name": userName,
      "password": password
    }, {
      withCredentials: true
    });
  }

  logout(){
    return this.http.post<{ accessToken: string }>('/api/auth/logout',{}, {
      withCredentials: true
    });
  }

  refreshToken() {
    return this.http.post<{ accessToken: string }>(
      '/api/auth/refresh',
      {},
      { withCredentials: true }
    );
  }
}